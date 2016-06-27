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

  class TW {
    constructor({containerId, extractClass, cursorClass, sentences = []}) {

      let container = document.getElementById(containerId);
      if (!container) {
        throw new Error('containerId does not exist!');
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
        throw new Error('sentences could not be empty!');
      }

      container.innerHTML = '';
      let el = document.createElement('SPAN');
      container.appendChild(el);
      let cursor = document.createElement('SPAN');
      cursor.className = cursorClass;
      cursor.innerHTML = '|';
      container.appendChild(cursor);

      this.sentences = sentences;
      this.el = el;
      this.typingTimer = null;
      this.currLetter = -1;
      this.currSentence = 0;

      return this;
    }

    clearBack() {

      let self = this;
      let sentences = self.sentences;
      let typingTimer = self.typingTimer;
      let currLetter = self.currLetter;
      let currSentence = self.currSentence;
      let el = self.el;

      if (typingTimer) {
        clearTimeout(typingTimer);
      }
      let msg = sentences[currSentence];
      let k = Math.random() * 20 + 10;

      if (currLetter >= 0) {
        currLetter--;
        let s = msg.substring(0, currLetter);
        el.innerHTML = s;
        typingTimer = setTimeout(() => {
          self.clearBack();
        }, k);
      } else {
        currSentence++;
        typingTimer = setTimeout(() => {
          self.writeNext();
        }, k);
      }

      this.currLetter = currLetter;
      this.currSentence = currSentence;
      this.typingTimer = typingTimer;

      return this;
    }

    writeNext() {

      let self = this;
      let sentences = self.sentences;
      let typingTimer = self.typingTimer;
      let currLetter = self.currLetter;
      let currSentence = self.currSentence;
      let el = self.el;

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
        el.innerHTML = s;
        typingTimer = setTimeout(() => {
          self.writeNext();
        }, Math.random() * 100 + 50);
      } else {
        typingTimer = setTimeout(() => {
          self.clearBack();
        }, SENTENCE_DELAY);
      }

      this.currLetter = currLetter;
      this.currSentence = currSentence;
      this.typingTimer = typingTimer;

      return this;
    }

    stop() {
      let self = this;
      if (self.typingTimer) {
        clearTimeout(self.typingTimer);
      }
      this.currLetter = -1;
      this.currSentence = 0;
      this.typingTimer = null;
      return this;
    }
  }

  var start = ({containerId, extractClass, cursorClass, sentences}) => {
    let tw = new TW({containerId, extractClass, cursorClass, sentences});
    return tw.stop().writeNext();
  };

  return {
    start
  };

});
