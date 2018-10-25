## 创建项目
``` bash
# 克隆项目文件
git clone git@10.2.250.21:zhangyuqiang/vue-develop-template.git --depth=1

# 删除原来的源
git remote remove origin

# 将你的新源地址写入本地配置文件
git remote add origin [Your New .git URL]
```

## 构建启动

``` bash
# 安装依赖
npm install

# 启动本地开发环境： 默认localhost:8080
npm run dev

# 代码编译
npm run build

# 为了更好了解打包结果，建议在代码正式发布之前，先分析一下打包后的每个包的文件有哪些，尽量保证文件之间没有过多的依赖
npm run analyz

# 单元测试
npm run unit

# e2e测试
npm run e2e

# 所有测试
npm test
```

## 前后端分离开发模式，代理转发请求

打开`config/index.js`文件，找到`dev`模块中的`proxyTable: {}`，参考如下配置：

``` json
proxyTable: {
    '/login': {
        target: 'http://devcrs.talbrain.com',
        changeOrigin: true,
        pathRewrite: {
            '^/login': '/login'
        }
    },
    '/api': {
        target: 'http://devcrs.talbrain.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
}
```

## 访问本地开发环境

> 首先需要配置HOSTS，具体如下：

``` bash
# 三个测试环境：
47.94.47.101 testcrs.talbrain.com
47.94.47.101 01testcrs.talbrain.com
47.94.47.101 02testcrs.talbrain.com
# 开发环境本地登录（必须）
101.200.141.204 devzhi.talbrain.com
101.200.141.204 beta.crm.weclassroom.com
# 接口文档
10.2.250.64 doc.reg.com
# 开发环境
47.94.47.101 devcrs.talbrain.com
```

> * 访问devzhi.talbrain.com
> * 登录成功后，右键复制右侧导航栏【潜在客户】的链接，如：`http://devcrs.talbrain.com/login?token=9cd04baa871a72aacaee13c974a02994`
> * 将其域名替换为`localhost:8080`，得到结果为: `http://localhost:8080/login?token=9cd04baa871a72aacaee13c974a02994`
> * 按回车访问，此时登录成功后会直接调整至`devcrs.talbrain.com`
> * 直接在导航栏输入`localhost:8080`，即可成功访问本地开发环境.
