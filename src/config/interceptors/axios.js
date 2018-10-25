import { CONSOLE_REQUEST_ENABLE, CONSOLE_RESPONSE_ENABLE } from '../';

export function requestSuccessFunc(requestObj) {
    CONSOLE_REQUEST_ENABLE && console.info('requestInterceptorFunc', `url: ${requestObj.url}`, requestObj);
    // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
    // ...

    return requestObj;
}

export function requestFailFunc(requestError) {
    // 自定义发送请求失败逻辑，断网，请求发送监控等
    // ...

    return Promise.reject(requestError);
}

export function responseSuccessFunc(responseObj) {
    CONSOLE_RESPONSE_ENABLE && console.info('requestSuccessFunc', `data: ${responseObj.data}`);
    // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
    // ...
    // 假设我们请求体为
    // {
    //     code: 1010,
    //     msg: 'this is a msg',
    //     data: null
    // }

    const resData = responseObj.data;
    const { status } = resData;

    switch (status) {
    case 0: // 如果业务成功，直接进成功回调
        return resData.data;
    case 1111:
        // 如果业务失败，根据不同 code 做不同处理
        // 比如最常见的授权过期跳登录
        // 特定弹窗
        // 跳转特定页面等

        location.href = 'xxx'; // 这里的路径也可以放到全局配置里
        return;
    default:
        // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
        !responseObj.config.noShowDefaultError && GLOBAL.vbus.$emit('global.$dialog.show', resData.msg);
        return Promise.reject(resData);
    }
}

export function responseFailFunc(responseError) {
    // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
    // ...
    const status = responseError.response.status;
    if (status === 504 || status === 404) {
        GLOBAL.vbus.$emit('global.$dialog.show', '服务器被服务器被吃了⊙﹏⊙∥');
    } else if (status === 403) {
        GLOBAL.vbus.$emit('global.$dialog.show', '权限不足，请联系管理员');
    } else {
        GLOBAL.vbus.$emit('global.$dialog.show', '未知错误!');
    }
    return Promise.reject(responseError);
}
