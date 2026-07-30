(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var initialLoader = document.getElementById('initial-loader');

    if (!initialLoader || !initialLoader.parentNode) {
      return;
    }

    var parent = initialLoader.parentNode;
    var observer = new MutationObserver(function () {
      if (!document.documentElement.contains(initialLoader)) {
        observer.disconnect();
        window.location.replace('/demo_5/');
      }
    });

    observer.observe(parent, { childList: true });
  });
}());
