<template>
  <div class="app">
    <div class="content">
        <ul :class="['box', 'box'+INDEX12, isShowFun(12)?boxAnimationFun(12):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = '12' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+100)" @click="liOnCLick(index+100)" :id="BgStyle(index+100)" v-for="(item,index) in 16" :key="index" :data-id='12'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX11, isShowFun(11)?boxAnimationFun(11):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = '11' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+200)" @click="liOnCLick(index+200)" :id="BgStyle(index+200)" v-for="(item,index) in 12" :key="index" :data-id='11'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX10, isShowFun(INDEX10)?boxAnimationFun(INDEX10):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX10' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+300)" @click="liOnCLick(index+300)" :id="BgStyle(index+300)" v-for="(item,index) in 10" :key="index" :data-id='10'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX9, isShowFun(INDEX9)?boxAnimationFun(INDEX9):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX9' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+400)" @click="liOnCLick(index+400)" :id="BgStyle(index+400)" v-for="(item,index) in 9" :key="index" :data-id='9'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX8, isShowFun(INDEX8)?boxAnimationFun(INDEX8):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX8' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+500)" @click="liOnCLick(index+500)" :id="BgStyle(index+500)" v-for="(item,index) in 8" :key="index" :data-id='8'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX7, isShowFun(INDEX7)?boxAnimationFun(INDEX7):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX7' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+600)" @click="liOnCLick(index+600)" :id="BgStyle(index+600)" v-for="(item,index) in 7" :key="index" :data-id='7'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX6, isShowFun(INDEX6)?boxAnimationFun(INDEX6):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX6' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+700)" @click="liOnCLick(index+700)" :id="BgStyle(index+700)" v-for="(item,index) in 6" :key="index" :data-id='6'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX5, isShowFun(INDEX5)?boxAnimationFun(INDEX5):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX5' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+800)" @click="liOnCLick(index+800)" :id="BgStyle(index+800)" v-for="(item,index) in 5" :key="index" :data-id='5'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX4, isShowFun(INDEX4)?boxAnimationFun(INDEX4):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX4' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+900)" @click="liOnCLick(index+900)" :id="BgStyle(index+900)" v-for="(item,index) in 4" :key="index" :data-id='4'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX3, isShowFun(INDEX3)?boxAnimationFun(INDEX3):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX3' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+1000)" @click="liOnCLick(index+1000)" :id="BgStyle(index+1000)" v-for="(item,index) in 3" :key="index" :data-id='3'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX2, isShowFun(INDEX2)?boxAnimationFun(INDEX2):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX2' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+1100)" @click="liOnCLick(index+1100)" :id="BgStyle(index+1100)" v-for="(item,index) in 2" :key="index" :data-id='2'></li>
        </ul>
        <ul :class="['box', 'box'+INDEX1, isShowFun(INDEX1)?boxAnimationFun(INDEX1):'box-hidden']">
            <input type="checkbox" name="checkbox" :value = 'INDEX1' class="checkbox-input" v-model="checkboxData" v-show="isShow" @change="checkboxChange">
            <li :ref="'refa'+(index+1200)" @click="liOnCLick(index+1200)" :id="BgStyle(index+1200)" v-for="(item,index) in 1" :key="index" :data-id='1'></li>
        </ul>
    </div>
    <!-- 选中按钮 -->
    <div class="select-btn" @click="choiceOnClick"></div>
    <!-- 轨迹按钮 -->
    <div class="trajectory-btn" @click="trajectoryOnClick"></div>
    <!-- 染色按钮 -->
    <div class="addColor">
      <p @click="addRedOnClick"></p>
      <p @click="addGreenOnClick"></p>
    </div>
    <!-- 清空按钮 -->
    <div @click="clearColorOnClick" class="clearColor"></div>
    <!-- 找同伴 -->
    <div @click="findSimilarOnClick" class="findSimilar"></div>
    <!-- 找同伴后的同款度的覆盖长条 -->
    <div class="findSimilarBox" :style="findSimilarBoxStyle()"></div>
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
            liStyleObj: {}, // 每个砖块染色关联对象
            ifColor: 2, // 选择染色颜色 1绿 2红
            nowState: 'coloring', // 当前正在进行的状态 coloring染色，similaring找同类
            boxWidth: '0',
            boxLeft: '0',

            // 染色数组
            trajectoryArray: [],
            // 染色计数器
            count: 0,
            isTrajector: true,
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
        this.trajectoryArray[this.count] = {};
    },
    methods: {
        /* action */
        // 设置红色
        addRedOnClick() {
            this.ifColor = 2;
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';
        },
        // 设置绿色
        addGreenOnClick() {
            this.ifColor = 1;
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';
        },
        // 点击砖块显示颜色
        liOnCLick(index, index2) {
            if (this.nowState !== 'coloring') {
                // 如果是找同类，点击砖块后显示所有的同类
                const tmpRef = `refa${index}`;
                this.boxWidth = this.$refs[tmpRef][0].offsetWidth;
                this.boxLeft = this.$refs[tmpRef][0].offsetLeft;
            } else {
                const tmpIs = this.liStyleObj[index];
                // 相关逻辑关联到liStyleObj对象上，如果对象中有这个砖块则删除，没有这个砖块则插入
                console.log('tmpIs', tmpIs);
                if (tmpIs) {
                    console.log('aaaaaa', tmpIs);
                    delete this.liStyleObj[index];
                    delete this.trajectoryArray[this.count][index];
                    this.liStyleObj = JSON.parse(
                        JSON.stringify(this.liStyleObj)
                    );
                } else {
                    const tmpObj = JSON.parse(JSON.stringify(this.liStyleObj));
                    tmpObj[index] = {
                        id: index,
                        color: this.ifColor
                    };
                    // 每轮需要画轨迹的几个方块
                    this.trajectoryArray[this.count][index] = {
                        id: index,
                        color: this.ifColor
                    };
                    this.liStyleObj = tmpObj; // 重新赋值，保证响应式刷新
                }
            }
        },
        // 清空按钮
        clearColorOnClick() {
            this.liStyleObj = {};
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';


            this.isShow = true;
            this.lineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            // 存放动画类的数组
            this.boxAnimation = [];
            this.checkboxData = [];
            [...document.getElementsByClassName('content')[0].getElementsByTagName('div')].forEach(ele => {
                ele.style.display = 'none';
            });
        },
        // 找同类按钮
        findSimilarOnClick() {
            this.liStyleObj = {};
            this.ifColor = 2;
            this.nowState = 'similaring';
            this.boxWidth = '0';
            this.boxLeft = '0';
        },
        // 找同类覆盖层
        findSimilarBoxStyle() {
            return `width:${this.boxWidth}px;left:${this.boxLeft}px;`;
        },
        // 所有砖块背景色渲染
        BgStyle(index) {
            const tmpIs = this.liStyleObj[index];
            if (tmpIs) {
                if (tmpIs.color === 1) {
                    return 'greenClass';
                } else if (tmpIs.color === 2) {
                    return 'redClass';
                }
            }
        },

        // 轨迹按钮的功能
        trajectoryOnClick () {
            // if (this.isTrajector) return;
            console.log('aaaaaa');
            this.count++;
            const preCount = this.count - 1;
            this.trajectoryArray[this.count] = {};
            const keys = Object.keys(this.trajectoryArray[preCount]).map((currentVal) => +currentVal).sort();

            const max = Math.max(...keys);
            const min = Math.min(...keys);
            let flag = 0; // 代表这一组数据是否是连续的
            for (let i = min; i <= max; i++) {
                if (!keys.includes(i)) {
                    flag = 1;
                    break;
                }
            }
            const tmpArray = [];
            const that = this;
            if (flag === 0 && keys.length !== 0) {
                // 说明这组数据是连续的， 之后判断颜色是否一样
                keys.forEach(curVal => {
                    tmpArray.push(that.liStyleObj[curVal].color);
                });
            }
            if ([...new Set(tmpArray)].length === 1) {
                // 说明是同一种颜色
                console.log('tmpArray', tmpArray);
                let sumWidth = 0;
                const color = tmpArray[0] === 2 ? 'red' : 'green';
                const x = this.$refs[`refa${keys[0]}`][0].offsetLeft;

                const y = this.$refs[`refa${keys[0]}`][0].offsetHeight - 3;
                keys.forEach(curVal => {
                    const tmpRef = `refa${curVal}`;
                    sumWidth += this.$refs[tmpRef][0].offsetWidth;
                });
                const div = document.createElement('div');
                const div1 = document.createElement('div');
                const div2 = document.createElement('div');

                div1.style.border = '15px solid';
                div1.style.borderColor = 'blue transparent transparent transparent';

                div1.style.position = 'absolute';
                div1.style.left = `${x + sumWidth / 2 - 15}px`;
                div1.style.top = `${y - 11}px`;
                // div1.style.zIndex = '9999';
                div1.style.zIndex = '100';

                div2.style.border = '15px solid';
                div2.style.borderColor = `${color} transparent transparent transparent`;
                div2.style.position = 'absolute';
                div2.style.left = `${x + sumWidth / 2 - 15}px`;
                div2.style.top = `${y - 15}px`;
                // div1.style.zIndex = '9999';
                div2.style.zIndex = '100';

                div.style.borderBottom = '3px solid blue';
                div.style.borderLeft = '5px dashed blue';
                div.style.borderRight = '5px dashed blue';
                div.style.position = 'absolute';
                div.style.left = `${x}px`;
                div.style.top = `${y - 20}px`;
                div.style.width = `${sumWidth}px`;
                div.style.height = `${10}px`;

                document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div);
                document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div1);
                document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div2);
                // 去掉所有box 类的动画类
                // [...document.getElementsByClassName('box')].forEach((ele) => {
                //     console.log('aaaaaaaaaaaaaaaaaaa', typeof ele.classList);
                //     // console.log('bbbbbbbbbbbbbbbbbbb', `box-animation-up${index + 1}`);
                //     console.log('ccccccccccccccccccc', [...ele.classList]);
                //     // for (let i = 0; i < 12; i++) {
                //     //     if ([...ele.classList].includes(`box-animation-up${i + 1}`)) {
                //     //         // console.log('ccccccccccccccccccccccc');
                //     //         ele.classList.remove(`box-animation-up${i + 1}`);
                //     //     }
                //     //     if ([...ele.classList].includes(`box-animation-down${i + 1}`)) {
                //     //         ele.classList.remove(`box-animation-down${i + 1}`);
                //     //     }
                //     // }
                // });
            }
        },

        // 选中按钮
        choiceOnClick () {
            if (this.checkboxData.length !== 0) {
                this.lineData = [];
                this.lineData = this.checkboxData;
                this.isTrajector = false;
                this.isShow = false;
                this.checkboxChange();
            } else {
                this.isShow = !this.isShow;
            }
        },
        // 复选框变化事件
        checkboxChange () {
            if (this.checkboxData.length === 2) {
                this.isShow = false;
                this.isTrajector = false;
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
        // 是否显示该行
        isShowFun (index) {
            return this.lineData.includes(index);
        },
        // 每行的动画效果
        boxAnimationFun (index) {
            if (index >= this.checkboxData[0] && index >= this.checkboxData[1]) {
                return this.boxAnimation[0];
            }
            return this.boxAnimation[1];
        }
    }
};
</script>
<style lang="scss" scoped>
.app {
    width: 100vw;
    height: 100vh;
    position: relative;
    background: url('../assets/img/boxBg.png');
    background-size: 100% 100%;
    padding-top: 1px;
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 60%;
        min-height: 626px;
        margin: 60px 0 0 80px;
        background-color: rgba(0, 0, 0, 0.7);
        border: 5px dashed rgb(196, 176, 4);
        border-radius: 5px;
        .box {
            position: relative;
            width: 100%;
            display: flex;
            li {
                width: 100%;
                height: 50px;
                border: 1px solid #ec963c;
                cursor: pointer;
                background: #3d181e;
            }
            .checkbox-input {
                position: absolute;
                left: -28px;
                top: 20px;
            }
            .frame-select {
                background: yellow;
            }
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
    }
    .select-btn {
        position: absolute;
        top: 12%;
        right: 5%;
        width: 150px;
        height: 100px;
    }
    .trajectory-btn {
        position: absolute;
        top: 46%;
        right: 5%;
        width: 150px;
        height: 100px;
    }
    .addColor {
        position: absolute;
        height: 46px;
        top: 37%;
        right: 1%;
        p {
            display: inline-block;
            width: 47px;
            height: 46px;
        }
    }
    .clearColor {
        position: absolute;
        top: 81%;
        right: 6%;
        width: 150px;
        height: 100px;
    }
    .findSimilar {
        position: absolute;
        top: 63%;
        right: 6%;
        width: 150px;
        height: 100px;
    }
    .findSimilarBox {
        position: fixed;
        top: 65px;
        height: 625px;
        background: rgba(255, 0, 0, 0.3);
    }
}
#greenClass {
    background: green;
}
#redClass {
    background: red;
}
</style>
