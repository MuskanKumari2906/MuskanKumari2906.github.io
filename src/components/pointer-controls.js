const pointerControls = {
  init: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
  },

  onClick: function (event) {
    const target = event.target;
    if (target.hasAttribute('interactive')) {
      const info = target.getAttribute('data-info');
      this.showInfo(info);
    }
  },

  showInfo: function (info) {
    const infoPanel = document.getElementById('info-panel');
    infoPanel.innerText = info;
    infoPanel.style.display = 'block';
  }
};

AFRAME.registerComponent('pointer-controls', pointerControls);