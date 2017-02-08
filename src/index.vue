<template>
    <transition name="vodal-fade">
        <div :class="['vodal', className]" v-show="show" :style="style" @keyup.esc="onEsc" tabindex="-1">
            <div class="vodal-mask" v-if="mask" @click="$emit('hide')" />
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
        className: {
            type: String,
            default: ''
        }
    },

    computed: {
        style() {
            return `
                animationDuration: ${this.duration}ms;
                webkitAnimationDuration: ${this.duration}ms;
            `;
        },

        dialogStyle() {
            return `
                width: ${this.width + this.measure};
                height: ${this.height + this.measure};
                ${this.style}
            `;
        }
    },

    methods: {
        onEsc() {
            this.show && this.$emit('hide');
        }
    },

    watch: {
        show(show) {
            show && this.$nextTick(() => {
                this.$el.focus();
            })
        }
    }
}
</script>

<style>
.vodal,
.vodal-mask {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
}

.vodal {
    position: fixed;
}

.vodal-mask {
    position: absolute;
    background: rgba(0, 0, 0, .3);
}

.vodal-dialog {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 101;
    padding: 15px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
}

.vodal-close {
    position: absolute;
    cursor: pointer;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
}

.vodal-close:before,
.vodal-close:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #999;
    border-radius: 100%;
    -webkit-transition: background .2s;
    transition: background .2s;
}

.vodal-close:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.vodal-close:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

.vodal-close:hover:before,
.vodal-close:hover:after {
    background: #333;
}
</style>