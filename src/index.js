import Vue from 'vue';

const Toast = Vue.extend(require('./toast.vue'));
let toastPool = [];

const getAnInstance = () => {
  if (toastPool.length) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new Toast({
    el: document.createElement('div')
  });
};

const returnAnInstance = (instance) => {
  if (instance) {
    toastPool.push(instance);
  }
};

export default (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const {
    className = '',
    duration = 3000,
    iconClass = '',
    message,
    position = 'middle'
  } = options;

  let instance = getAnInstance();

  instance.message = message;
  instance.position = position;
  instance.className = className;
  instance.iconClass = iconClass;

  Vue.nextTick(() => {
    instance.$appendTo(document.body);
    setTimeout(() => {
      instance.$remove();
      returnAnInstance(instance);
    }, duration);
  });
};
