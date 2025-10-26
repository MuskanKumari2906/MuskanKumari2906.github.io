const AFRAME = require('aframe');

AFRAME.registerComponent('anatomy-layer', {
  schema: {
    objectId: { type: 'string' }
  },

  init: function () {
    this.el.addEventListener('click', this.onClick.bind(this));
    this.el.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
  },

  onClick: function () {
    const objectId = this.data.objectId;
    this.showInfoCard(objectId);
  },

  onMouseEnter: function () {
    this.el.setAttribute('scale', '1.1 1.1 1.1');
  },

  onMouseLeave: function () {
    this.el.setAttribute('scale', '1 1 1');
  },

  showInfoCard: function (objectId) {
    // Logic to display information card based on objectId
    const infoData = this.getInfoData(objectId);
    // Display the infoData in the VR scene
  },

  getInfoData: function (objectId) {
    // Fetch data from anatomy.json or another source
    // Return the relevant information for the given objectId
  }
});