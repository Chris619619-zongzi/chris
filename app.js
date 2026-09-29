/* ============================================================
   识鸟 BirdID —— 答题 / 名片 / 循环 主逻辑
   ============================================================ */

(function () {
  'use strict';

  var IMG_API =
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';

  // 根据文字提示词获取生成图片 URL
  function imgUrl(prompt, size) {
    return (
      IMG_API +
      '?prompt=' +
      encodeURIComponent(prompt) +
      '&image_size=' +
      (size || 'portrait_4_3')
    );
  }

  function $(id) {
    return document.getElementById(id);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function showScreen(name) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle('is-active', screens[i].id === 'screen-' + name);
    }
  }

  /* ---------------- 状态 ---------------- */

  var queue = []; // 本轮打乱后的鸟
  var idx = 0;
  var streak = 0;
  var bestStreak = 0;
  var results = []; // { bird, ok }
  var answered = false;

  var quizImg = $('quizImg');
  var optionsGrid = $('optionsGrid');
  var feedbackBar = $('feedbackBar');
  var toCardBtn = $('toCardBtn');
  var progressFill = $('progressFill');
  var progressText = $('progressText');
  var streakNum = $('streakNum');
  var streakBadge = $('streakBadge');
  var cardScroll = $('cardScroll');
  var summaryWrap = $('summaryWrap');

  function currentBird() {
    return queue[idx];
  }

  /* ---------------- 流程控制 ---------------- */

  function startRound() {
    queue = shuffle(window.BIRDS);
    idx = 0;
    streak = 0;
    bestStreak = 0;
    results = [];
    renderQuiz();
    showScreen('quiz');
  }

  function nextBird() {
    idx += 1;
    if (idx >= queue.length) {
      renderSummary();
      showScreen('summary');
    } else {
      renderQuiz();
      showScreen('quiz');
    }
  }

  /* ---------------- 答题页 ---------------- */

  function renderQuiz() {
    answered = false;
    var bird = currentBird();

    // 进度
    progressText.textContent = idx + 1 + ' / ' + queue.length;
    progressFill.style.width = (idx / queue.length) * 100 + '%';
    updateStreak();

    // 图片
    var frame = quizImg.parentElement;
    frame.classList.remove('is-loaded');
    quizImg.classList.remove('is-loaded');
    quizImg.src = imgUrl(bird.imagePrompt, 'portrait_4_3');

    // 3 个干扰项 + 正确答案
    var distractors = shuffle(
      window.BIRDS.filter(function (b) {
        return b.id !== bird.id;
      })
    ).slice(0, 3);
    var choices = shuffle(distractors.concat(bird));

    optionsGrid.innerHTML = '';
    var keys = ['A', 'B', 'C', 'D'];
    choices.forEach(function (choice, i) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.innerHTML =
        '<span class="opt-key">' +
        keys[i] +
        '</span><span class="opt-name">' +
        choice.name +
        '</span>';
      btn.addEventListener('click', function () {
        choose(btn, choice);
      });
      optionsGrid.appendChild(btn);
    });

    feedbackBar.className = 'feedback-bar';
    feedbackBar.textContent = '';
    toCardBtn.hidden = true;
    toCardBtn.classList.remove('cta-pop');
  }

  function choose(btn, choice) {
    if (answered) return;
    answered = true;

    var bird = currentBird();
    var ok = choice.id === bird.id;

    // 锁定全部选项并标色
    var btns = optionsGrid.querySelectorAll('.option-btn');
    btns.forEach(function (b) {
      b.disabled = true;
      var name = b.querySelector('.opt-name').textContent;
      if (name === bird.name) {
        b.classList.add('is-correct');
      } else if (b === btn) {
        b.classList.add('is-wrong');
      } else {
        b.classList.add('is-dim');
      }
    });

    if (ok) {
      streak += 1;
      bestStreak = Math.max(bestStreak, streak);
      feedbackBar.className = 'feedback-bar is-good';
      feedbackBar.textContent =
        '🎉 答对啦！' + bird.name + '：' + bird.marks.slice(0, 2).join('，');
    } else {
      streak = 0;
      feedbackBar.className = 'feedback-bar is-bad';
      feedbackBar.textContent =
        '差一点～正确答案是「' +
        bird.name +
        '」，记住：' +
        bird.marks.slice(0, 2).join('，');
    }
    updateStreak();
    results.push({ bird: bird, ok: ok });

    toCardBtn.hidden = false;
    toCardBtn.classList.add('cta-pop');
  }

  function updateStreak() {
    streakNum.textContent = streak;
    streakBadge.classList.toggle('is-zero', streak === 0);
  }

  /* ---------------- 鸟类名片页 ---------------- */

  function renderCard() {
    var b = currentBird();

    function section(title, body) {
      return (
        '<div class="section-block"><h3 class="section-title">' +
        title +
        '</h3>' +
        body +
        '</div>'
      );
    }

    var marksHtml =
      '<div class="marks-list">' +
      b.marks
        .map(function (m) {
          return '<span class="mark-tag">' + m + '</span>';
        })
        .join('') +
      '</div>';

    var factsHtml = b.facts
      .map(function (f) {
        return (
          '<div class="fact-item"><span class="fact-icon">💡</span><span>' +
          f +
          '</span></div>'
        );
      })
      .join('');

    var infoRows = [
      ['栖息环境', b.habitat],
      ['食性', b.diet],
      ['生活习性', b.behavior],
      ['分布范围', b.distribution]
    ]
      .map(function (row) {
        return (
          '<div class="info-row"><div class="info-label">' +
          row[0] +
          '</div><div class="info-text">' +
          row[1] +
          '</div></div>'
        );
      })
      .join('');

    var galleryHtml =
      '<div class="gallery-grid">' +
      b.gallery
        .map(function (p) {
          return (
            '<figure><img loading="lazy" src="' +
            imgUrl(p, 'landscape_4_3') +
            '" alt="' +
            b.name +
            '生态照"></figure>'
          );
        })
        .join('') +
      '</div>';

    cardScroll.innerHTML =
      '<div class="card-hero">' +
      '<img src="' +
      imgUrl(b.imagePrompt, 'portrait_4_3') +
      '" alt="' +
      b.name +
      '">' +
      '<div class="hero-mask">' +
      '<div class="hero-chips">' +
      '<span class="hero-chip">📏 ' + b.length + '</span>' +
      '<span class="hero-chip">📍 ' + b.residence + '</span>' +
      '<span class="hero-chip">🛡️ ' + b.status + '</span>' +
      '</div>' +
      '<h1 class="hero-name">' + b.name + '</h1>' +
      '<p class="hero-latin"><i>' + b.latin + '</i> · ' + b.en + '</p>' +
      '</div></div>' +
      '<div class="card-body">' +
      section('识别要点', marksHtml) +
      section('名片简介', '<p>' + b.profile + '</p>') +
      section('详细档案', infoRows) +
      section('趣闻冷知识', factsHtml) +
      section('生态相册', galleryHtml) +
      '</div>';

    cardScroll.scrollTop = 0;

    // 预加载下一只鸟的答题图，让下一题更快显示
    if (idx + 1 < queue.length) {
      var pre = new Image();
      pre.src = imgUrl(queue[idx + 1].imagePrompt, 'portrait_4_3');
    }
  }

  /* ---------------- 结算页 ---------------- */

  function renderSummary() {
    var total = results.length;
    var correct = results.filter(function (r) {
      return r.ok;
    }).length;
    var pct = total ? Math.round((correct / total) * 100) : 0;

    var bestKey = 'birdid-best';
    var prevBest = Number(localStorage.getItem(bestKey) || 0);
    var isNewBest = correct > prevBest;
    if (isNewBest) localStorage.setItem(bestKey, String(correct));
    var best = Math.max(prevBest, correct);

    var praise;
    if (pct === 100) praise = '观鸟大师！全部认对 🦅';
    else if (pct >= 80) praise = '火眼金睛，非常出色！';
    else if (pct >= 60) praise = '不错的成绩，继续加油！';
    else praise = '多去公园走走，下次更厉害！';

    var pills = results
      .map(function (r) {
        return (
          '<span class="bird-pill ' +
          (r.ok ? '' : 'is-miss') +
          '">' +
          (r.ok ? '✓' : '✗') +
          ' ' +
          r.bird.name +
          '</span>'
        );
      })
      .join('');

    summaryWrap.innerHTML =
      '<div class="summary-card">' +
      '<div class="summary-emoji">' + (pct >= 60 ? '🏆' : '🐣') + '</div>' +
      '<h2 class="summary-title">本轮识鸟结束</h2>' +
      '<p class="summary-sub">' + praise + (isNewBest ? '（新纪录！）' : '') + '</p>' +
      '<div class="score-ring" style="--pct:' + pct + '%">' +
      '<span class="score-num">' + pct + '%</span>' +
      '<span class="score-label">正确率</span>' +
      '</div>' +
      '<div class="summary-stats">' +
      '<div class="stat-item"><div class="stat-num">' + correct + '/' + total + '</div>' +
      '<div class="stat-label">答对</div></div>' +
      '<div class="stat-item"><div class="stat-num">🔥 ' + bestStreak + '</div>' +
      '<div class="stat-label">最佳连击</div></div>' +
      '<div class="stat-item"><div class="stat-num">⭐ ' + best + '</div>' +
      '<div class="stat-label">历史最佳</div></div>' +
      '</div>' +
      '<div class="bird-list">' + pills + '</div>' +
      '<button class="cta-btn" id="restartBtn" type="button">再来一轮 <span class="cta-arrow">→</span></button>' +
      '</div>';

    $('restartBtn').addEventListener('click', startRound);
  }

  /* ---------------- 事件绑定 ---------------- */

  quizImg.addEventListener('load', function () {
    quizImg.classList.add('is-loaded');
    quizImg.parentElement.classList.add('is-loaded');
  });

  toCardBtn.addEventListener('click', function () {
    renderCard();
    showScreen('card');
  });

  $('nextBtn').addEventListener('click', nextBird);

  // 启动
  startRound();
})();
