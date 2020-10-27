export default class extends Stimulus.Controller {
  static get targets() {
    return ['aside', 'toggleControl'];
  }

  ASIDE_VISIBLE_CLASS = 'aside--visible';
  NO_SCROLL_CLASS = 'no-scroll';

  connect() {
    if (this.hasToggleControlTarget && this.hasAsideTarget) {
      this.toggleControlTarget.addEventListener('click',  this.onToggleClick);
      this.asideTarget.addEventListener('click', this.onAsideClick);
      window.addEventListener('resize', this.onWindowResize, { passive: true });
    }
  }

  disconnect() {
    window.removeEventListener('resize', this.onWindowResize);

    if (this.hasAsideTarget) {
      this.asideTarget.removeEventListener('click', this.onAsideClick);
    }

    if (this.hasToggleControlTarget) {
      this.toggleControlTarget.removeEventListener('click', this.onToggleClick);
    }
  }

  onToggleClick = () => {
    this.asideTarget.classList.add(this.ASIDE_VISIBLE_CLASS);
    document.body.classList.add(this.NO_SCROLL_CLASS);
  }

  onAsideClick = () => {
    this.asideTarget.classList.remove(this.ASIDE_VISIBLE_CLASS);
    document.body.classList.remove(this.NO_SCROLL_CLASS);
  }

  onWindowResize = () => {
    if (this.toggleControlHidden()) {
      this.onAsideClick();
    }
  }

  toggleControlHidden() {
    return !this.toggleControlTarget.parentOffset;
  }
}
