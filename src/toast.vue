<template>
  <div class="mint-toast {{ customClass }}" transition="mint-toast-pop" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
    <i class="mint-toast-icon {{ iconClass }}" v-if="iconClass !== ''"></i>
    <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
  </div>
</template>

<style>
  @component-namespace mint {
    @component toast {
      position: fixed;
      max-width: 80%;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;

      @descendent icon {
        display: block;
        text-align: center;
        font-size: 56px;
      }

      @descendent text {
        display: block;
        text-align: center;
      }

      @when placetop {
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @when placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      @when placebottom {
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }

      @descendent pop-transition {
        transition: opacity .3s linear;
      }

      @descendent pop-enter, pop-leave {
        opacity: 0;
      }
    }
  }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    }
  };
</script>