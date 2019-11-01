import axios from 'axios'
import { Loading } from 'element-ui'
import { Message } from 'element-ui';
import { request } from 'https'

let loading

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "加载中!",
        background: "rgba(0,0,0,.2)"
    })
}

function endLoading() {
    loading.close()
}

//请求
axios.interceptors.request.use(config => {
        // 加载动画
        startLoading()
        return config
    },
    err => {
        return Promise.reject(err)
    }
)


//响应
axios.interceptors.response.use(response => {
        //结束动画
        endLoading()
        return response
    },
    err => {
        Message.error(err.response.data)
        return Promise.reject(err)
    })













export default axios