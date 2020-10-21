import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    // 加载
    render: (h) => h(App)
    // 挂载
}).$mount(root)