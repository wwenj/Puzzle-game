<template>
  <!-- <div class="app" :style="gameIpad?'width:100vh;height:100vw':''"> -->
  <div class="app" :style="gameIpad">
    <div class="fullScreen2" @click="fullScreen">进入全屏</div>
    <div class="content">
      <ul :class="['box', 'box'+INDEX12, isShowFun(12)?boxAnimationFun(12):'box-hidden']">
        <input type="checkbox" :id="checkbox(12)" name="checkbox" :value='12' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+1600)" @click="liOnCLick(index+1600,16)" :id="BgStyle(index+1600)" v-for="(item,index) in 16" :key="index" :data-id='12'>
          <img src="../assets/img/num/num16.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX11, isShowFun(11)?boxAnimationFun(11):'box-hidden']">
        <input type="checkbox" :id="checkbox(11)" name="checkbox" :value='11' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+1200)" @click="liOnCLick(index+1200,12)" :id="BgStyle(index+1200)" v-for="(item,index) in 12" :key="index" :data-id='11'>
          <img src="../assets/img/num/num12.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX10, isShowFun(INDEX10)?boxAnimationFun(INDEX10):'box-hidden']">
        <input type="checkbox" :id="checkbox(10)" name="checkbox" :value='10' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+1000)" @click="liOnCLick(index+1000,10)" :id="BgStyle(index+1000)" v-for="(item,index) in 10" :key="index" :data-id='10'>
          <img src="../assets/img/num/num10.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX9, isShowFun(INDEX9)?boxAnimationFun(INDEX9):'box-hidden']">
        <input type="checkbox" :id="checkbox(9)" name="checkbox" :value='INDEX9' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+900)" @click="liOnCLick(index+900,9)" :id="BgStyle(index+900)" v-for="(item,index) in 9" :key="index" :data-id='9'>
          <img src="../assets/img/num/num9.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX8, isShowFun(INDEX8)?boxAnimationFun(INDEX8):'box-hidden']">
        <input type="checkbox" :id="checkbox(8)" name="checkbox" :value='INDEX8' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+800)" @click="liOnCLick(index+800,8)" :id="BgStyle(index+800)" v-for="(item,index) in 8" :key="index" :data-id='8'>
          <img src="../assets/img/num/num8.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX7, isShowFun(INDEX7)?boxAnimationFun(INDEX7):'box-hidden']">
        <input type="checkbox" :id="checkbox(7)" name="checkbox" :value='INDEX7' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+700)" @click="liOnCLick(index+700,7)" :id="BgStyle(index+700)" v-for="(item,index) in 7" :key="index" :data-id='7'>
          <img src="../assets/img/num/num7.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX6, isShowFun(INDEX6)?boxAnimationFun(INDEX6):'box-hidden']">
        <input type="checkbox" :id="checkbox(6)" name="checkbox" :value='INDEX6' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+600)" @click="liOnCLick(index+600,6)" :id="BgStyle(index+600)" v-for="(item,index) in 6" :key="index" :data-id='6'>
          <img src="../assets/img/num/num6.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX5, isShowFun(INDEX5)?boxAnimationFun(INDEX5):'box-hidden']">
        <input type="checkbox" :id="checkbox(5)" name="checkbox" :value='INDEX5' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+500)" @click="liOnCLick(index+500,5)" :id="BgStyle(index+500)" v-for="(item,index) in 5" :key="index" :data-id='5'>
          <img src="../assets/img/num/num5.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX4, isShowFun(INDEX4)?boxAnimationFun(INDEX4):'box-hidden']">
        <input type="checkbox" :id="checkbox(4)" name="checkbox" :value='INDEX4' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+400)" @click="liOnCLick(index+400,4)" :id="BgStyle(index+400)" v-for="(item,index) in 4" :key="index" :data-id='4'>
          <img src="../assets/img/num/num4.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX3, isShowFun(INDEX3)?boxAnimationFun(INDEX3):'box-hidden']">
        <input type="checkbox" :id="checkbox(3)" name="checkbox" :value='INDEX3' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+300)" @click="liOnCLick(index+300,3)" :id="BgStyle(index+300)" v-for="(item,index) in 3" :key="index" :data-id='3'>
          <img src="../assets/img/num/num3.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX2, isShowFun(INDEX2)?boxAnimationFun(INDEX2):'box-hidden']">
        <input type="checkbox" :id="checkbox(2)" name="checkbox" :value='INDEX2' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+200)" @click="liOnCLick(index+200,2)" :id="BgStyle(index+200)" v-for="(item,index) in 2" :key="index" :data-id='2'>
          <img src="../assets/img/num/num2.png" alt="">
        </li>
      </ul>
      <ul :class="['box', 'box'+INDEX1, isShowFun(INDEX1)?boxAnimationFun(INDEX1):'box-hidden']">
        <input type="checkbox" :id="checkbox(1)" name="checkbox" :value='INDEX1' class="checkbox-input" v-model="checkboxData" v-show="isShow">
        <li :ref="'refa'+(index+100)" @click="liOnCLick(index+100,1)" :id="BgStyle(index+100)" v-for="(item,index) in 1" :key="index" :data-id='1'>
          <img src="../assets/img/num/num1.png" alt="">
        </li>
      </ul>
    </div>
    <!-- 选中按钮 -->
    <div class="select-btn" @click="choiceOnClick"></div>
    <!-- 轨迹按钮 -->
    <div class="trajectory-btn" @click="trajectoryOnClick"></div>
    <!-- 染色按钮 -->
    <div class="addColor">
      <span class="addColorRed" :id="ifColor===2?'addColor':''" @click="addRedOnClick"></span>
      <span class="addColorGreen" :id="ifColor===1?'addColor':''" @click="addGreenOnClick"></span>
    </div>
    <!-- 清空按钮 -->
    <div @click="clearColorOnClick" class="clearColor"></div>
    <!-- 找同伴 -->
    <div @click="findSimilarOnClick" class="findSimilar"></div>
    <!-- 找同伴后的同款度的覆盖长条 -->
    <!-- <div class="findSimilarBox" :style="findSimilarBoxStyle()"></div> -->
    <div v-for="(item, index) in findSimilarBoxArry" class="findSimilarBox" :style="item.style" @click="findSimilarBoxOnClick(index,item.liObj)" :key="index"></div>
    <!-- 开始遮罩层 -->
    <div class="mark" :id="isMark?'mark':''" :style="gameIpad">
      <div class="fullScreen" @click="fullScreen">
        <img src="../assets/img/starGo.png" alt="点击开始">
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            liStyleObj: {}, // 每个砖块染色关联对象
            ifColor: 2, // 选择染色颜色 1绿 2红
            nowState: 'coloring', // 当前正在进行的状态 coloring染色，similaring找同类
            boxWidth: '0',
            boxLeft: '0',
            isMark: false, // 控制显示开启全屏按钮
            gameIpad: false,
            findSimilarBoxArry: [], // 找同类遮罩层数组

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
            // 轨迹color 的数组
            colorArray: ['blue', 'green', 'yellow', 'black', 'White', 'Purple'],
            // 轨迹高度
            trajectoryHeight: 0
        };
    },
    created() {
        this.INDEX1 = 1;
        this.INDEX2 = 2;
        this.INDEX3 = 3;
        this.INDEX4 = 4;
        this.INDEX5 = 5;
        this.INDEX6 = 6;
        this.INDEX7 = 7;
        this.INDEX8 = 8;
        this.INDEX9 = 9;
        this.INDEX10 = 10;
        this.INDEX11 = 11;
        this.INDEX12 = 12;
        // 初始化第一次轨迹数组
        this.trajectoryArray[this.count] = {};
        // 初始创建所有砖块的数据，找同类时用
        const liData = {};
        for (let i = 1; i < 17; i++) {
            const tmpNum = i * 100;
            const tmpArr = [];
            for (let j = 0; j < i; j++) {
                const tmpJ = tmpNum + j;
                tmpArr.push(tmpJ);
            }
            liData[i] = tmpArr;
        }
        this.liDataObj = liData;
    },
    mounted() {
        this.resize();
        window.addEventListener('resize', this.resize);
    },
    methods: {
        /* action */
        checkbox(value) {
            if (this.checkboxData.indexOf(value) !== -1) {
                return 'checkbox';
            }
            return '';
        },
        // 设置红色
        addRedOnClick() {
            this.findSimilarBoxArry = [];
            this.isShow = false;
            this.ifColor = 2;
            if (this.nowState !== 'coloring') {
                this.liStyleObj = {};
            }
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';
        },
        // 设置绿色
        addGreenOnClick() {
            this.findSimilarBoxArry = [];
            this.isShow = false;
            this.ifColor = 1;
            if (this.nowState !== 'coloring') {
                this.liStyleObj = {};
            }
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';
        },
        // 取消找同类遮罩层
        findSimilarBoxOnClick(index, liObj) {
            for (const item in liObj) {
                delete this.liStyleObj[item];
            }
            this.findSimilarBoxArry.splice(index, 1);
        },
        // 点击砖块显示颜色
        liOnCLick(index, num) {
            const liDataArray = []; // 当前选中找同类的砖块，所有需要显示的列的所有元素组成的数组
            if (this.nowState !== 'coloring') {
                for (const item in this.liDataObj) {
                    if (item % num === 0) {
                        // 找出有找同类的所有同类列
                        this.liDataObj[item].forEach(item => {
                            liDataArray.push(item);
                        });
                    }
                }
                // 如果是找同类，点击砖块后显示所有的同类
                const tmpRef = `refa${index}`;
                this.boxWidth = this.$refs[tmpRef][0].offsetWidth;
                this.boxLeft = this.$refs[tmpRef][0].offsetLeft;
                // 找到的所有同类的对象
                const tmpLiStyleObj = {};
                liDataArray.forEach(item => {
                    const temRef2 = `refa${item}`;
                    if (this.$refs[temRef2]) {
                        // 判断所有同同类列的的在当前覆盖的区间下的同类砖块
                        const tmpItemLeft = this.$refs[temRef2][0].offsetLeft;
                        if (
                            tmpItemLeft >= this.boxLeft - 5 &&
                            tmpItemLeft < this.boxLeft + this.boxWidth - 5
                        ) {
                            // 把转块组成能渲染的对象
                            tmpLiStyleObj[item] = {
                                id: item,
                                color: 2
                            };
                        }
                    }
                });
                // 把最终找到的同类赋值给砖块染色数据
                // this.liStyleObj = tmpLiStyleObj;
                this.liStyleObj = Object.assign(this.liStyleObj, tmpLiStyleObj);
                this.findSimilarBoxStyle(this.boxWidth, this.boxLeft, tmpLiStyleObj);
            } else {
                const tmpIs = this.liStyleObj[index];
                let isDel = false;
                // 相关逻辑关联到liStyleObj对象上，如果对象中有这个砖块则删除，没有这个砖块则插入
                if (tmpIs) {
                    // 判断再次点击时是否
                    if (tmpIs.color !== this.ifColor) {
                        this.liStyleObj[index].color = this.ifColor;
                        isDel = true;
                    } else {
                        delete this.liStyleObj[index];
                        if (!this.trajectoryArray[this.count][index]) {
                            isDel = true;
                        }
                        delete this.trajectoryArray[this.count][index];
                    }
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
                        color: this.ifColor,
                        idDel: false
                    };
                    this.liStyleObj = tmpObj; // 重新赋值，保证响应式刷新
                }

                if (isDel) {
                    // 每轮需要画轨迹的几个方块（isDel为true, 说明this.trjaectoryArray[this.count]是新的）
                    this.trajectoryArray[this.count][index] = {
                        id: index,
                        color: this.ifColor
                    };
                }
            }
        },
        // 清空按钮
        clearColorOnClick() {
            this.findSimilarBoxArry = [];

            this.liStyleObj = {};
            this.nowState = 'coloring';
            this.boxWidth = '0';
            this.boxLeft = '0';

            this.isShow = false;
            this.isTrajector = true;
            this.trajectoryHeight = 0;
            this.lineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            // 存放动画类的数组
            this.boxAnimation = [];
            this.checkboxData = []
            ;[
                ...document
                    .getElementsByClassName('content')[0]
                    .getElementsByTagName('div')
            ].forEach(ele => {
                ele.style.display = 'none';
            });
        },
        // 找同类按钮
        findSimilarOnClick() {
            this.clearColorOnClick();
            this.nowState = 'similaring';
            this.isShow = false;
        },
        // 找同类覆盖层
        findSimilarBoxStyle(boxWidth, boxLeft, styleObj) {
            const tmpStyle = {
                style: `background:rgba(255,255,255,0.3);border:1px solid black;width:${boxWidth}px;left:${boxLeft + 115}px;`,
                liObj: styleObj
            };
            this.findSimilarBoxArry.push(tmpStyle);
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
        trajectoryOnClick() {
            if (this.isTrajector) return;
            this.count++;
            const preCount = this.count - 1;
            this.trajectoryArray[this.count] = {};
            const keys = Object.keys(this.trajectoryArray[preCount])
                .map(currentVal => +currentVal)
                .sort();

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
                    tmpArray.push(that.trajectoryArray[preCount][curVal].color);
                });
            }
            if ([...new Set(tmpArray)].length === 1) {
                // 说明是同一种颜色
                let sumWidth = 0;
                const color = this.colorArray[this.count % 6];
                const x = this.$refs[`refa${keys[0]}`][0].offsetLeft;

                const y = this.$refs[`refa${keys[0]}`][0].offsetHeight - 3;
                keys.forEach(curVal => {
                    const tmpRef = `refa${curVal}`;
                    sumWidth += this.$refs[tmpRef][0].offsetWidth;
                });
                const div = document.createElement('div');
                const div1 = document.createElement('div');
                // const div2 = document.createElement('div');

                div1.style.border = '6px solid';
                div1.style.borderColor = `${color} transparent transparent transparent`;

                div1.style.position = 'absolute';
                div1.style.left = `${x + sumWidth / 2 - 6}px`;
                div1.style.top = `${y - 3 - this.trajectoryHeight}px`;

                // div2.style.border = '15px solid';
                // div2.style.borderColor = 'blue transparent transparent transparent';
                // div2.style.position = 'absolute';
                // div2.style.left = `${x + sumWidth / 2 - 15}px`;
                // div2.style.top = `${y - 15}px`;
                // div2.style.zIndex = '100';

                div.style.borderBottom = `3px solid ${color}`;
                div.style.borderLeft = `3px dashed ${color}`;
                div.style.borderRight = `3px dashed ${color}`;
                div.style.position = 'absolute';
                div.style.left = `${x + 1}px`;
                div.style.top = `${y - 13 - this.trajectoryHeight}px`;
                div.style.width = `${sumWidth - 2}px`;
                div.style.height = `${10}px`;

                document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div1);

                // document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div2);
                document.getElementsByClassName(`box${this.$refs[`refa${keys[0]}`][0].dataset.id}`)[0].appendChild(div);

                this.trajectoryHeight += 3;
                if (this.trajectoryHeight >= y / 2) {
                    this.trajectoryHeight = y / 2;
                }
            }
        },
        clearTrajectory() {
            for (let i = 0, len = this.trajectoryArray.length; i < len; i++) {
                this.trajectoryArray[i] = {};
            }
            this.liStyleObj = {}
            ;[
                ...document
                    .getElementsByClassName('content')[0]
                    .getElementsByTagName('div')
            ].forEach(ele => {
                ele.style.display = 'none';
            });
        },
        // 选中按钮
        choiceOnClick() {
            this.findSimilarBoxArry = [];

            this.liStyleObj = {};
            this.boxWidth = '0';
            this.boxLeft = '0';
            this.nowState = 'coloring';
            if (this.checkboxData.length === 1 || this.checkboxData.length === 2 || this.checkboxData.length === 3) {
                this.lineData = [];
                this.lineData = this.checkboxData;
                this.isTrajector = false;
                this.isShow = false;
                this.clearTrajectory();
                this.checkboxChange();
            } else {
                this.isShow = !this.isShow;
                this.checkboxData = [];
            }
            this.trajectoryHeight = 0;
        },
        // 复选框变化事件
        checkboxChange() {
            this.addRedOnClick();

            this.clearTrajectory();
            this.isShow = false;
            this.isTrajector = false;
            this.lineData = [];
            this.lineData = this.checkboxData;
            if (this.checkboxData.length === 2) {
                let num1 = this.checkboxData[0];
                let num2 = this.checkboxData[1];
                num1 > num2 ? '' : ([num1, num2] = [num2, num1]);
                // 一些操作 处理动画
                const tmpNum = ((num1 - num2) / 2 + 0.5) * 2;
                this.boxAnimation.push(`box-animation-down${tmpNum}`);
                this.boxAnimation.push(`box-animation-up${tmpNum}`);
            } else if (this.checkboxData.length === 3) {
                const num1 = this.checkboxData[0];
                const num2 = this.checkboxData[1];
                const num3 = this.checkboxData[2];
                const tmpArray = [+num1, +num2, +num3];
                tmpArray.sort((a, b) => a - b);
                const max = Math.max(num1, num2, num3);
                const min = Math.min(num1, num2, num3);
                const mid = tmpArray[1];
                // 一些操作 处理动画
                const tmpNum1 = (max - mid + 0.5) * 2 - 1;
                const tmpNum2 = (mid - min + 0.5) * 2 - 1;
                this.boxAnimation.push(`box-animation-down${tmpNum1}`);
                this.boxAnimation.push('');
                this.boxAnimation.push(`box-animation-up${tmpNum2}`);
            }
        },
        // 是否显示该行
        isShowFun(index) {
            return this.lineData.includes(index);
        },
        // 每行的动画效果
        boxAnimationFun(index) {
            if (this.checkboxData.length === 2) {
                if (index >= this.checkboxData[0] && index >= this.checkboxData[1]) {
                    return this.boxAnimation[0];
                }
                return this.boxAnimation[1];
            } else if (this.checkboxData.length === 3) {
                const num1 = this.checkboxData[0];
                const num2 = this.checkboxData[1];
                const num3 = this.checkboxData[2];
                const max = Math.max(num1, num2, num3);
                const min = Math.min(num1, num2, num3);
                if (index >= max) {
                    return this.boxAnimation[0];
                } else if (index <= min) {
                    return this.boxAnimation[2];
                }
                return this.boxAnimation[1];
            }
        },
        // 开启全屏
        fullScreen() {
            this.isMark = true;
            const el = document.documentElement;
            const rfs =
                el.requestFullScreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullscreen;
            if (typeof rfs !== 'undefined' && rfs) {
                rfs.call(el);
            }
            return;
        },
        // 关闭全屏
        exitFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        },
        resize() {
            const html = document.getElementsByTagName('html')[0];
            const width = html.clientWidth;
            const height = html.clientHeight;
            if (width < height) {
                console.log('横屏转换');
                // this.gameIpad = true;
                this.gameIpad = `width:${height}px;height:${width}px`;
            } else {
                console.log('竖屏转换');
                // this.gameIpad = false;
                this.gameIpad = `width:${width}px;height:${height}px`;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.app {
    // width: 100vw;
    // height: 100vh;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: url('../assets/img/boxBg.png');
    background-size: 100% 100%;
    padding-top: 1px;
    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 40px 0 0 110px;
        background-color: rgba(0, 0, 0, 0.7);
        border: 5px dashed rgb(196, 176, 4);
        border-radius: 5px;
        .box {
            position: relative;
            width: 100%;
            display: flex;
            li {
                width: 100%;
                height: 40px;
                border: 1px solid #ec963c;
                background: #93202F;
                text-align: center;
                line-height: 40px;
                color: #ec963c;
                font-size: 12px;
                font-weight: bold;
                img{
                  width:15px;
                  height: 30px;
                  vertical-align: middle;
                }
            }
            .checkbox-input {
                -webkit-appearance: none; /*清除复选框默认样式*/
                background: url('../assets/img/no.png');
                background-size: 100% 100%;
                height: 26px;
                width: 26px;
                position: absolute;
                left: -45px;
                top: 7px;
            }
        }
        .box-hidden {
            visibility: hidden;
        }
        @mixin transformY($value) {
            @if $value > 0 {
                transform: translateY(100% * $value - 50%);
            } @else {
                transform: translateY(100% * $value + 50%);
            }
            transition: all 2s;
        }
        @for $i from 1 through 24 {
            .box-animation-up#{$i} {
                @include transformY( -($i - 1)/2)
            }
        }
        @for $i from 1 through 24 {
            .box-animation-down#{$i} {
                @include transformY((($i - 1)/2))
            }
        }
    }
    .select-btn {
        position: absolute;
        height: 46px;
        top: 12%;
        right: 5%;
        width: 150px;
        height: 100px;
    }
    .trajectory-btn {
        position: absolute;
        top: 46%;
        right: 7%;
        width: 150px;
        height: 100px;
    }
    .addColor {
        position: absolute;
        height: 46px;
        top: 36%;
        right: 1%;
        span {
            display: inline-block;
            border-radius: 5px;
            display: inline-block;
            width: 40px;
            height: 40px;
        }
        .addColorRed {
            background: #FF4848;
        }
        .addColorGreen {
            background: #339966;
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
        top: 45px;
        height: 504px;
        background: rgba(255, 0, 0, 0.3);
    }
    .mark {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        background: url('../assets/img/starBg.png');
        background-size: 100% 100%;
        .fullScreen {
            width: 100px;
            height: 100px;
            color: #ec963c;
            text-align: center;
            line-height: 100px;
            font-size: 25px;
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: 500;
            img{
              width: 100%;
              height: 100%;
            }
        }
    }
}
.fullScreen2{
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #ec963c;
  background: rgba(0,0,0,0.6);
  border-radius: 5px;
  position: fixed;
  font-size: 12px;
  top: 10px;
  left: 10px;
}
#greenClass {
    background: #339966;
}
#redClass {
    background: #FF4848;
}
#mark {
    display: none;
}
#checkbox {
    background: url('../assets/img/yes.png');
    background-size: 100% 100%;
}
#addColor{
  border: 2px solid #ec963c;
}
</style>
