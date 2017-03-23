var anim;
var animData = {
  container: document.getElementById('bodymovin'),
  renderer: 'pixi',
  loop: true,
  autoplay: true,
  autoloadSegments: true,
  rendererSettings: {
    progressiveLoad: false
  },
  path: 'h'
};
anim = bodymovin.loadAnimation(animData);