<template>
  <div class="app">
        <div class="content">
            <ul :class="['box', 'box'+INDEX12, isShowFun(12)?boxAnimationFun(12):'box-hidden']">
                <label for="checkbox1" class="label"></label>
                <input type="checkbox" id="checkbox1" :value = '12' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX12" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX11, isShowFun(11)?boxAnimationFun(11):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = '11' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX11" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX10, isShowFun(INDEX10)?boxAnimationFun(INDEX10):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX10' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX10" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX9, isShowFun(INDEX9)?boxAnimationFun(INDEX9):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX9' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX9" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX8, isShowFun(INDEX8)?boxAnimationFun(INDEX8):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX8' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX8" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX7, isShowFun(INDEX7)?boxAnimationFun(INDEX7):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX7' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX7" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX6, isShowFun(INDEX6)?boxAnimationFun(INDEX6):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX6' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX6" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX5, isShowFun(INDEX5)?boxAnimationFun(INDEX5):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX5' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX5" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX4, isShowFun(INDEX4)?boxAnimationFun(INDEX4):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX4' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX4" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX3, isShowFun(INDEX3)?boxAnimationFun(INDEX3):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX3' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX3" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX2, isShowFun(INDEX2)?boxAnimationFun(INDEX2):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX2' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX2" :key="index"></li>
            </ul>
            <ul :class="['box', 'box'+INDEX1, isShowFun(INDEX1)?boxAnimationFun(INDEX1):'box-hidden']">
                <input type="checkbox" name="checkbox" :value = 'INDEX1' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
                <li v-for="(item,index) in INDEX1" :key="index"></li>
            </ul>
        </div>
        <div class="leftNav">
            <button @click="choiceOnClick" v-if="!isShow">选中</button>
            <button @click="confirmOnClick" v-else>确认</button>
            <button>染色</button>
            <button>轨迹</button>
            <button>寻找同类</button>
        </div>
  </div>
</template>
<script>
const INDEX1 = 1;
const INDEX2 = 2;
const INDEX3 = 3;
const INDEX4 = 4;
const INDEX5 = 5;
const INDEX6 = 6;
const INDEX7 = 7;
const INDEX8 = 8;
const INDEX9 = 9;
const INDEX10 = 10;
const INDEX11 = 12;
const INDEX12 = 16;

export default {
    data() {
        return {
            checkboxData: [],
            isShow: false,
            lineData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            // 存放动画类的数组
            boxAnimation: [],
            INDEX1,
            INDEX2,
            INDEX3,
            INDEX4,
            INDEX5,
            INDEX6,
            INDEX7,
            INDEX8,
            INDEX9,
            INDEX10,
            INDEX11,
            INDEX12
        };
    },
    created() {
    },
    methods: {
        choiceOnClick () {
            this.isShow = true;
        },
        confirmOnClick () {
            if (this.checkboxData) {
                this.lineData = [];
                this.lineData = this.checkboxData;
                this.boxAnimation.push('box-animation');
            }
            this.isShow = false;
        },
        checkboxChange () {
            if (this.checkboxData.length === 2) {
                this.lineData = [];
                this.lineData = this.checkboxData;
                let num1 = this.checkboxData[0];
                let num2 = this.checkboxData[1];
                num1 > num2 ? '' : [num1, num2] = [num2, num1];
                console.log('num1', num1);
                console.log('num2', num2);
                // 一些操作 处理动画
                const tmpNum = ((num1 - num2) / 2 + 0.5) * 2;
                console.log('tmpNum', tmpNum);
                this.boxAnimation.push(`box-animation-down${tmpNum}`);
                this.boxAnimation.push(`box-animation-up${tmpNum}`);
            }
        },
        isShowFun (index) {
            return this.lineData.includes(index);
        },
        boxAnimationFun (index) {
            if (index >= this.checkboxData[0] && index >= this.checkboxData[1]) {
                return this.boxAnimation[0];
            }
            return this.boxAnimation[1];
        }
    }
};
</script>
<style lang='scss' scoped>
.app {
    padding-top: 50px;
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 70%;
        min-height: 626px;
        margin: auto;
        border: 1px solid black;
        .box {
            display: flex;
            position: relative;
            width: 100%;
            .checkbox-input {
                // display: none;
                position: absolute;
                left: -28px;
                top: 20px;
            }

        }
        .label {
                display: inline-block;
                position: absolute;
                left: -150px;
                top: 20px;
                width: 12px;
                height: 12px;
                border: 1px solid black;
                // background: black;
                background-image: url(~Assets/img/checkboxUnselect.png);
                background-size: 12px 12px;
                // background-position: 0 0px;
            }
        .box-hidden {
            visibility: hidden;
        }
        @mixin transformY ($value) {

            @if $value > 0 {
                transform: translateY(100% * $value - 50%);
                // transform: translateY(26px);
            } @else {
                transform: translateY(100% * $value + 50%);
                // transform: translateY(-26px);
            }
            transition: all 3s;
        }
        .box-animation {
            // float: left;
            // transform: move(1);
            // transform: scaleY(2);
            // transform: move(4);
            @include transformY(4);
            // position: absolute;
            // top: 50%;
            // transition: all 3s;
            // transform-origin: 0,0;
            // animation: 3s myfirst;
            // animation-fill-mode: forwards;
        }

        .box-animation-up1 {
            @include transformY(0);
        }
        .box-animation-up2 {
            @include transformY(-0.5);
        }
        .box-animation-up3 {
            @include transformY(-1);
        }
        .box-animation-up4 {
            @include transformY(-1.5);
        }
        .box-animation-up5 {
            @include transformY(-2);
        }
        .box-animation-up6 {
            @include transformY(-2.5);
        }
        .box-animation-up7 {
            @include transformY(-3);
        }
        .box-animation-up8 {
            @include transformY(-3.5);
        }
        .box-animation-up9 {
            @include transformY(-4);
        }
        .box-animation-up10 {
            @include transformY(-4.5);
        }
        .box-animation-up11 {
            @include transformY(-5);
        }
        .box-animation-up12 {
            @include transformY(-5.5);
        }

        .box-animation-down1 {
            @include transformY(0);
        }
        .box-animation-down2 {
            @include transformY(0.5);
        }
        .box-animation-down3 {
            @include transformY(1);
        }
        .box-animation-down4 {
            @include transformY(1.5);
        }
        .box-animation-down5 {
            @include transformY(2);
        }
        .box-animation-down6 {
            @include transformY(2.5);
        }
        .box-animation-down7 {
            @include transformY(3);
        }
        .box-animation-down8 {
            @include transformY(3.5);
        }
        .box-animation-down9 {
            @include transformY(4);
        }
        .box-animation-down10 {
            @include transformY(4.5);
        }
        .box-animation-down11 {
            @include transformY(5);
        }
        .box-animation-down12 {
            @include transformY(5.5);
        }
        ul {
            // flex: 1;
            // height: 100%;
            // width: 100%;
            // border-bottom: 1px solid black;
        }
        li {
            width: 100%;
            height: 50px;
            border: 1px solid black;
            cursor: pointer;
        }
    }
    .leftNav {
        width: 7%;
        max-width: 100px;
        height: 300px;
        position: absolute;
        bottom: 0;
        right: 50px;
        border: 1px solid black;
    }
}


li:hover {
    background: rgba(0, 0, 0, 0.22);
}

</style>
