import Vue from 'vue';

const Toast = Vue.extend(require('./toast.vue'));
let toastPool = [];

let getAnInstance = function() {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new Toast({
    el: document.createElement('div')
  });
};

let returnAnInstance = function(instance) {
  if (instance) {
    toastPool.push(instance);
  }
};

export default function(options) {
  options = options || {};

  let message, position, duration, className;

  if (typeof options === 'string') {
    message = options;
    duration = 3000;
    position = 'middle';
    className = '';
  } else {
    message = options.message;
    duration = options.duration || 3000;
    position = options.position || 'middle';
    className = options.className || '';
  }

  let instance = getAnInstance();

  instance.message = message;
  instance.position = position;
  instance.className = className;

  Vue.nextTick(function() {
    instance.$appendTo(document.body);
    setTimeout(function() {
      instance.$remove();
      returnAnInstance(instance);
    }, duration);
  });
};
