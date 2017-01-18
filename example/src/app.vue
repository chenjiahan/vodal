<template>
    <div class="wrap">
        <div class="container" :style="paddingTop">
            <h1 class="title scale">Vodal</h1>
            <h3 class="intro scale">A vue modal with animations.</h3>
            <div class="btn-area">
                <button 
                    class="btn scale" 
                    v-text="item"
                    v-for="(item, index) in types" 
                    :style="delay(index)"
                    @click="onShow(item)"
                />
            </div>
            <vodal 
                measure="em"
                :show="show"
                :animation="animation"
                :width="28.5"
                :height="17"
                :duration="301"
                :className="my-dialog"
                @hide="show = false"
            >
                <div class="header">Vodal</div>
                <div class="body">A vue modal with animations.</div>
                <button class="vodal-confirm-btn" @click="show = false">ok</button>
                <button class="vodal-cancel-btn" @click="show = false">close</button>
            </vodal>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Vodal from '../../src';

Vue.component(Vodal.name, Vodal);

export default {
    name: 'app',

    data () {
        return {
            show: false,
            animation: '',
            paddingTop: `paddingTop: ${(window.innerHeight - 440) / 2}px`,
            types: ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight']
        }
    },

    methods: {
        delay (index) {
            return `
                animationDelay: ${index * 100}ms;
                WebkitAnimationDelay: ${index * 100}ms;
            `;
        },

        onShow(animation) {
            this.animation = animation;
            this.show = true;
        }
    }
}
</script>

<style>
@import "../../src/animation/fade.css";
@import "../../src/animation/door.css";
@import "../../src/animation/flip.css";
@import "../../src/animation/rotate.css";
@import "../../src/animation/slide-down.css";
@import "../../src/animation/slide-left.css";
@import "../../src/animation/slide-right.css";
@import "../../src/animation/slide-up.css";
@import "../../src/animation/zoom.css";

*,
*:before,
*:after {
    box-sizing: border-box;
}
html {
    font-family: "Open Sans",sans-serif;
}
a {
    text-decoration: none;
    background-color: transparent;
}
a:hover {
    outline: 0;
    text-decoration: none;
}
a:focus {
    outline: none;
    text-decoration: none;
}
button {
    color: inherit;
    font: inherit;
    margin: 0;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
}
button:focus {
    outline: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}

/* -- container -- */
#app,
.wrap {
    height: 100%;
}
.container {
    width: 100%;
}
.title,
.intro {
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}
.title {
    font-size: 70px;
    margin: 0;
}
.intro {
    font-size: 30px;
    margin: 15px 10px 20px;
}
.btn-area {
    width: 600px;
    margin: 0 auto;
}

/* -- scale animation -- */
@keyframes scale {
    from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
    }
    to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
    }
}
.scale {
    animation: scale both .4s cubic-bezier(0.4, 0, 0, 1.5);
}

/* -- btn -- */
.btn {
    display: inline-block;
    color: #0a1855;
    width: 140px;
    padding: 0;
    font-size: 18px;
    background: #fff;
    margin: 20px 30px;
    line-height: 42px;
    user-select: none;
    text-align: center;
    border: none;
    border-radius: 4px;
}
.btn:hover {
    box-shadow: 0 0 50px rgba(255,255,255,.3);
}
.btn:active {
    box-shadow: 0 0 50px rgba(255,255,255,.3), inset 2px 2px 2px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0);
}
@media (max-width: 600px) {
    .container {
        padding-top: 30px!important;
    }
    .title {
        font-size: 40px;
    }
    .intro {
        font-size: 20px;
    }
    .btn {
        width: 35%;
        font-size: 16px;
        line-height: 34px;
        margin: 10px 0 10px 10%;
    }
    .btn-area {
        width: 100%;
    }
}

/* -- title -- */
.header {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
}

/* -- body -- */
.body {
    padding-top: 15px;
}

/* -- button -- */
.vodal-cancel-btn, .vodal-confirm-btn {
    position: absolute;
    font: inherit;
    bottom: 16px;
    width: 70px;
    padding: 4px 15px;
    border-radius: 3px;
    transition: background .2s;
    border: 1px solid #03a9f4;
}
.vodal-confirm-btn {
    color: #fff;
    right: 102px;
    background: #03a9f4;
}
.vodal-confirm-btn:hover {
    background: #0098e3;
}
.vodal-cancel-btn {
    color: #03a9f4;
    right: 16px;
    background: #fff;
}
.vodal-cancel-btn:hover {
    background: #fafafa;
}
.vodal-cancel-btn:focus, .vodal-confirm-btn:focus {
    outline: none;
}
.vodal-confirm-btn:active {
    background: #0087d2;
}
.vodal-cancel-btn:active {
    background: #fafafa;
    box-shadow: inset 1px 1px 1px rgba(0,0,0,.2),0 0 1px transparent;
}
</style>