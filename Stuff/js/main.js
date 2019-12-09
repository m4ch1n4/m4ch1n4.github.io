var anim;
var animData = {
  container: document.getElementById('bodymovin'),
  renderer: 'demobannerintro_svg',
  loop: true,
  autoplay: true,
  autoloadSegments: true,
  rendererSettings: {
    progressiveLoad: false
  },
  path: 'https://github.com/m4ch1n4/m4ch1n4.github.io/blob/master/demobannerintro_svg/Machina_footer.json'
};
anim = bodymovin.loadAnimation(animData);