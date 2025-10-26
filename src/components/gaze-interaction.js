const GazeInteractionComponent = {
  schema: {
    duration: { type: 'number', default: 1 },
    audio: { type: 'string', default: '' },
  },

  init: function () {
    this.el.addEventListener('mouseenter', () => {
      this.startGaze();
    });

    this.el.addEventListener('mouseleave', () => {
      this.stopGaze();
    });
  },

  startGaze: function () {
    const duration = this.data.duration;
    this.gazeTimeout = setTimeout(() => {
      this.triggerInteraction();
    }, duration * 1000);
  },

  stopGaze: function () {
    clearTimeout(this.gazeTimeout);
  },

  triggerInteraction: function () {
    const audioSrc = this.data.audio;
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
    // Additional interaction logic can be added here
  },
};

AFRAME.registerComponent('gaze-interaction', GazeInteractionComponent);