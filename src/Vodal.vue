<template>
  <transition name="vodal-fade">
    <div v-show="show" tabindex="-1" :style="style" :class="['vodal', className]" @keyup.esc="onEsc">
      <div class="vodal-mask" v-if="mask" @click="onClickMask" :style="customMaskStyles" />
      <transition :name="`vodal-${animation}`">
        <div class="vodal-dialog" v-show="show" :style="dialogStyle">
          <span class="vodal-close" v-if="closeButton" @click="$emit('hide')" />
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'vodal',

  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'zoom'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    customStyles: {
      type: Object,
      default: () => ({})
    },
    customMaskStyles: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    style() {
      return {
        animationDuration: `${this.duration}ms`
      };
    },
    dialogStyle() {
      return {
        width: this.width + this.measure,
        height: this.height + this.measure,
        animationDuration: `${this.duration}ms`,
        ...this.customStyles
      }
    }
  },

  watch: {
    show(isShow) {
      isShow && this.$nextTick(() => {
        this.$el.focus();
      })
    }
  },

  methods: {
    onEsc() {
      if (this.show && this.closeOnEsc) {
        this.$emit('hide');
      }
    },
    onClickMask() {
      this.$emit('clickMask');
      if (this.closeOnClickMask) {
        this.$emit('hide');
      }
    }
  }
}
</script>
