//Functions to run after the script tag has loaded
Filepicker = {
  _loaded: false,
  _loadCallback: function() {},
  _onload: function() {
    Filepicker._loaded = true;
    Filepicker._loadCallback();
  },
  load: function(fn) {
    if (Filepicker._loaded)  {
      fn();
    } else {
      Filepicker._loadCallback = fn;
    }
  }
  // XXX: error callback
};

//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//api.filepicker.io/v1/filepicker.js';
script.onload = Filepicker._onload;
// script.onerror = Filepicker.error;

//Load the script tag
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

