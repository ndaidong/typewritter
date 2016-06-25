/**
 * TypeWritter
 * Small library for text typing effect
 * @ndaidong
**/

((name, factory) => {
  var root = window || {};
  if (root.define && root.define.amd) {
    root.define([], factory);
  } else if (root.exports) {
    root.exports = factory();
  } else {
    root[name] = factory();
  }
})('TypeWritter', () => {

  const SENTENCE_DELAY = 3000;

  var sentences = [];

  var el;
  var typingTimer;
  var currLetter = -1;
  var currSentence = 0;

  var back, next;

  back = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    let msg = sentences[currSentence];
    let k = Math.random() * 20 + 10;

    if (currLetter >= 0) {
      currLetter--;
      let s = msg.substring(0, currLetter);
      el.innerHTML = `<span>${s}</span>`;
      typingTimer = setTimeout(back, k);
    } else {
      currSentence++;
      typingTimer = setTimeout(next, k);
    }
  };

  next = () => {

    let sl = sentences.length;
    if (sl === 0) {
      return false;
    }

    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    if (currSentence >= sl) {
      currSentence = 0;
    }

    let msg = sentences[currSentence];
    let a = msg.split('');
    let len = a.length;

    if (currLetter < len) {
      currLetter++;
      let s = msg.substring(0, currLetter);
      el.innerHTML = `<span>${s}</span>`;
      typingTimer = setTimeout(next, Math.random() * 100 + 50);
    } else {
      typingTimer = setTimeout(back, SENTENCE_DELAY);
    }

    return {
      typingTimer,
      currLetter,
      currSentence
    };
  };

  var stop = () => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    currLetter = -1;
    currSentence = 0;
    typingTimer = null;
  };

  var start = ({containerId, extractClass, cursorClass}) => {

    let container = document.getElementById(containerId);
    if (!container) {
      return false;
    }

    let ps = container.querySelectorAll(`.${extractClass}`);
    if (ps.length) {
      for (var i = 0; i < ps.length; i++) {
        let p = ps[i];
        let s = p.textContent;
        if (s.length > 0) {
          sentences.push(s);
        }
      }
    }

    if (!sentences.length) {
      return false;
    }

    container.innerHTML = '';
    el = document.createElement('SPAN');
    container.appendChild(el);
    let cursor = document.createElement('SPAN');
    cursor.className = cursorClass;
    cursor.innerHTML = '|';
    container.appendChild(cursor);

    stop();
    return next();
  };

  return {
    start,
    stop
  };

});
