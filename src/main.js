import Vue from 'vue'
// import uView from 'uview-ui'
import Store from './store'
import Config from './config'
import App from './App'
// 不再需要导入 uno.css
// import 'uno.css'

/* 全局组件引入 Start */

/* 全局组件引入 End */

/**
 * @description: 全局 Msg
 * @param {type} title
 * @param {type} duration
 * @param {type} mask
 * @param {type} icon
 * @return {type}
 */
const Msg = (title, duration = 2000, mask = false, icon = 'none') => {
  //统一提示方便全局修改
  if (Boolean(title) === false) {
    return
  }
  uni.showToast({
    title,
    duration,
    mask,
    icon
  })
}

/**
 * @description: 全局 Modal
 * @param {type} title 提示title
 * @param {type} content 提示内容
 * @param {type} callback 是否显示取消按钮
 * @return {type}
 */
const Modal = ({ title = '提示', content = '这是一个模态弹窗', cancel = true }, callback = () => { }) => {
  uni.showModal({
    title,
    content,
    cancel,
    success: function (res) {
      callback(res)
    }
  })
}

/**
 * @description: 跳转到页面
 * @param {type} config
 * @return {type}
 */
const NavTo = config => {
  if (config && config.isLogin && !store.state.hasLogin) return '跳转到登录页'
  uni.navigateTo(config)
}

/**
 * @description: 跳转到 Tab 页面
 * @param {type} config
 * @return {type}
 */
const NavTab = config => {
  if (config && config.isLogin && !store.state.hasLogin) return '跳转到登录页'
  uni.switchTab(config)
}

/**
 * @description: 页面返回
 * @param {type} config
 * @return {type}
 */
const NavBack = config => {
  if (config && config.isLogin && !store.state.hasLogin) return '跳转到登录页'
  const pages = getCurrentPages()
  const prevPage = pages[pages.length - 2]
  if (!prevPage) {
    Msg('上一页走丢了，返回首页...')
    setTimeout(() => {
      NavTab({ url: '/pages/index/index' })
    }, 1200);
  } else {
    uni.navigateBack(config)
  }
}

/**
 * @description: 上一页实例，可操作上一页数据
 * @return {type}
 */
const PrevPage = () => {
  const pages = getCurrentPages()
  const prevPage = pages[pages.length - 2]
  // #ifdef H5
  return prevPage
  // #endif
  return prevPage.$vm
}

/**
 * @description: 图片预览
 * @param {type} index
 * @param {type} data
 * @param {type} type
 * @return {type}
 */
const PreviewImage = (index, data, type = '') => {
  let newImage = []
  if (type === 'list') {
    newImage = data.map((item) => {
      return ResourcePrefixCheck(item)
    })
  } else {
    newImage = [ResourcePrefixCheck(data)]
  }

  uni.previewImage({
    current: index,
    urls: newImage,
  })
}

// Vue.use(uView)

/* 全局组件挂载 Start */

/* 全局组件挂载 End */

Vue.prototype.$store = Store
Vue.prototype.$to = { NavTo, NavTab, NavBack }
Vue.prototype.$utils = { Msg, Modal, NavTo, NavTab, NavBack, PrevPage, PreviewImage }
Vue.prototype.$config = { API_BASE_URL: Config.API_BASE_URL }

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
