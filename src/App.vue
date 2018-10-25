<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
    methods: {
        // ...mapActions(['getUserInfo']),
        bindEvent() {
            GLOBAL.vbus.$on('ajax_handle_error', (resData) => {
                if (!!resData.config.noShowDefaultError) return;
                // this.$store.commit('SET_TO_LOGIN_PATH', this.$route.path);
                // this.$store.commit('SET_TO_LOGIN', true);
                return;
            });
            GLOBAL.vbus.$on('request_error', (resData) => {
            });
            GLOBAL.vbus.$on('response_error', (resData) => {
            });
            GLOBAL.vbus.$on('scrollToTop', (resData) => {
            });
            // 接口反馈的错误信息都在这里弹出，除非设置了noShowDefaultError
            GLOBAL.vbus.$on('global.$dialog.show', (msg) => {
                this.$message({type: 'error', message: msg});
            });
        },
        init() {
            // this.getUserInfo();
        },
        resize() {
            const body = document.getElementsByTagName('body')[0];
            const html = document.getElementsByTagName('html')[0];
            const width = html.clientWidth;
            const height = html.clientHeight;
            const max = width > height ? width : height;
            const min = width > height ? height : width;
            body.style.width = `${max}px`;
            body.style.height = `${min}px`;
        }
    },
    created() {
        this.init();
        this.bindEvent();
        this.resize();
        window.addEventListener('resize', this.resize);
    }
};
</script>
<style>
@import './assets/styles/index.css';
html{
   width: 100%;
  height: 100%;
}
body{
   width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
@media screen and (orientation:portrait) {
    body {
      transform-origin: 0 0;
      transform: rotateZ(90deg) translateY(-100%);
    }
}
</style>
