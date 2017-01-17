<template>
    <transition name="vodal-fade">
        <div class="vodal" v-show="show" :style="style">
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
            default: 'fade'
        },
        mask: {
            type: Boolean,
            default: true  
        },
        closeButton: {
            type: Boolean,
            default: true
        },
    },

    computed: {
        style() {
            const { duration } = this;
            return `
                animationDuration: ${duration}ms;
                webkitAnimationDuration: ${duration}ms;
            `;
        },

        dialogStyle() {
            const { width, height, measure, duration } = this;
            return `
                width: ${width + measure};
                height: ${height + measure};
                animationDuration: ${duration}ms;
                webkitAnimationDuration: ${duration}ms;
            `;
        }
    }
}
</script>

<style>
/* -- container -- */
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

/* -- mask -- */
.vodal-mask {
    position: absolute;
    background: rgba(0, 0, 0, .3);
}

/* -- dialog -- */
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

/* -- close button -- */
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

/* -- fade -- */
@-webkit-keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

@keyframes vodal-fade-enter {
    from {
        opacity: 0;
    }
}

.vodal-fade-enter-active {
    -webkit-animation: vodal-fade-enter both ease-in;
    animation: vodal-fade-enter both ease-in;
}

@-webkit-keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

@keyframes vodal-fade-leave {
    to {
        opacity: 0
    }
}

.vodal-fade-leave-active {
    -webkit-animation: vodal-fade-leave both ease-out;
    animation: vodal-fade-leave both ease-out;
}

/* -- zoom -- */
@-webkit-keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-enter-active {
    -webkit-animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-leave-active {
    -webkit-animation: vodal-zoom-leave both;
    animation: vodal-zoom-leave both;
}

/* -- slideDown -- */
@-webkit-keyframes vodal-slideDown-enter {
    from {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

@keyframes vodal-slideDown-enter {
    from {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

.vodal-slideDown-enter-active {
    -webkit-animation: vodal-slideDown-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-slideDown-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-slideDown-leave {
    to {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

@keyframes vodal-slideDown-leave {
    to {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0);
    }
}

.vodal-slideDown-leave-active {
    -webkit-animation: vodal-slideDown-leave both;
    animation: vodal-slideDown-leave both;
}

/* -- slideLeft -- */
@-webkit-keyframes vodal-slideLeft-enter {
    from {
        -webkit-transform: translate3d(-150px, 0, 0);
        transform: translate3d(-150px, 0, 0);
    }
}

@keyframes vodal-slideLeft-enter {
    from {
        -webkit-transform: translate3d(-150px, 0, 0);
        transform: translate3d(-150px, 0, 0);
    }
}

.vodal-slideLeft-enter-active {
    -webkit-animation: vodal-slideLeft-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-slideLeft-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-slideLeft-leave {
    to {
        -webkit-transform: translate3d(-150px, 0, 0);
        transform: translate3d(-150px, 0, 0);
    }
}

@keyframes vodal-slideLeft-leave {
    to {
        -webkit-transform: translate3d(-150px, 0, 0);
        transform: translate3d(-150px, 0, 0);
    }
}

.vodal-slideLeft-leave-active {
    -webkit-animation: vodal-slideLeft-leave both;
    animation: vodal-slideLeft-leave both;
}

/* -- slideRight -- */
@-webkit-keyframes vodal-slideRight-enter {
    from {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

@keyframes vodal-slideRight-enter {
    from {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

.vodal-slideRight-enter-active {
    -webkit-animation: vodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-slideRight-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-slideRight-leave {
    to {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

@keyframes vodal-slideRight-leave {
    to {
        -webkit-transform: translate3d(150px, 0, 0);
        transform: translate3d(150px, 0, 0);
    }
}

.vodal-slideRight-leave-active {
    -webkit-animation: vodal-slideRight-leave both;
    animation: vodal-slideRight-leave both;
}

/* -- slideUp -- */
@-webkit-keyframes vodal-slideUp-enter {
    from {
        -webkit-transform: translate3d(0, 100px, 0);
        transform: translate3d(0, 100px, 0);
    }
}

@keyframes vodal-slideUp-enter {
    from {
        -webkit-transform: translate3d(0, 100px, 0);
        transform: translate3d(0, 100px, 0);
    }
}

.vodal-slideUp-enter-active {
    -webkit-animation: vodal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-slideUp-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-slideUp-leave {
    to {
        -webkit-transform: translate3d(0, 100px, 0);
        transform: translate3d(0, 100px, 0);
    }
}

@keyframes vodal-slideUp-leave {
    to {
        -webkit-transform: translate3d(0, 100px, 0);
        transform: translate3d(0, 100px, 0);
    }
}

.vodal-slideUp-leave-active {
    -webkit-animation: vodal-slideUp-leave both;
    animation: vodal-slideUp-leave both;
}

/* -- flip -- */
@-webkit-keyframes vodal-flip-enter {
    from {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
    }
    70% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}

@keyframes vodal-flip-enter {
    from {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 60deg);
    }
    70% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
}

.vodal-flip-enter-active {
    -webkit-animation: vodal-flip-enter both ease-in;
    animation: vodal-flip-enter both ease-in;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
}

@-webkit-keyframes vodal-flip-leave {
    from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
    }
}

@keyframes vodal-flip-leave {
    from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
        transform: perspective(400px) rotate3d(1, 0, 0, -15deg);
    }
    to {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
        transform: perspective(400px) rotate3d(1, 0, 0, 45deg);
    }
}

.vodal-flip-leave-active {
    -webkit-animation: vodal-flip-leave both;
    animation: vodal-flip-leave both;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
}

/* -- rotate -- */
@-webkit-keyframes vodal-rotate-enter {
    from {
        -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
        transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
    }
}

@keyframes vodal-rotate-enter {
    from {
        -webkit-transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
        transform: rotate3d(0, 0, 1, -180deg) scale3d(.3, .3, .3);
    }
}

.vodal-rotate-enter-active {
    -webkit-animation: vodal-rotate-enter both;
    animation: vodal-rotate-enter both;
    -webkit-transform-origin: center;
    transform-origin: center;
}

@-webkit-keyframes vodal-rotate-leave {
    to {
        -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
        transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
    }
}

@keyframes vodal-rotate-leave {
    to {
        -webkit-transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
        transform: rotate3d(0, 0, 1, 180deg) scale3d(.3, .3, .3);
    }
}

.vodal-rotate-leave-active {
    -webkit-animation: vodal-rotate-leave both;
    animation: vodal-rotate-leave both;
    -webkit-transform-origin: center;
    transform-origin: center;
}

/* -- door -- */
@-webkit-keyframes vodal-door-enter {
    from {
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
    }
}

@keyframes vodal-door-enter {
    from {
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
    }
}

.vodal-door-enter-active {
    -webkit-animation: vodal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-door-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-door-leave {
    60% {
        -webkit-transform: scale3d(.01, 1, 1);
        transform: scale3d(.01, 1, 1);
    }
    to {
        -webkit-transform: scale3d(0, 1, .1);
        transform: scale3d(0, 1, .1);
    }
}

@keyframes vodal-door-leave {
    60% {
        -webkit-transform: scale3d(.01, 1, 1);
        transform: scale3d(.01, 1, 1);
    }
    to {
        -webkit-transform: scale3d(0, 1, .1);
        transform: scale3d(0, 1, .1);
    }
}

.vodal-door-leave-active {
    -webkit-animation: vodal-door-leave both;
    animation: vodal-door-leave both;
}
</style>