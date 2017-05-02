<template>
    <transition name="vodal-fade">
        <div 
            v-show="show" 
            tabindex="-1"
            :style="style" 
            :class="['vodal', className]" 
            @keyup.esc="onEsc" 
        >
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
            return {
                animationDuration: `${this.duration}ms`,
                webkitAnimationDuration: `${this.duration}ms`
            };
        },
        dialogStyle() {
            return {
                ...this.style,
                width: `${this.width + this.measure}`,
                height: `${this.height + this.measure}`
            }
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
