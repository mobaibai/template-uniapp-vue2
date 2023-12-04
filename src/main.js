import Vue from 'vue'
import uView from 'uview-ui'
import Store from './store'
import Config from './config'
import App from './App'

/* 全局组件引入 Start */
/* 全局组件引入 End */

Vue.use(uView)

/* 全局组件挂载 Start */
/* 全局组件挂载 End */

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
const Modal = ({ title = '提示', content = '这是一个模态弹窗', cancel = true }, callback = () => {}) => {
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
 * @description: 重定向到页面、
 * @param {type} config
 * @return {type}
 */
const RediTo = config => {
  uni.redirectTo(config)
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
    setTimeout(() => {
      NavTab({ url: '/pages/index/index' })
    }, 1000)
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
 * @description: 资源前缀检查
 * @param {type} path
 * @return {type}
 */
const ResourcePrefixCheck = path => {
  if (!path.includes('https://') || !path.includes('http://')) {
    return `${Config.API_BASE_RESOURCE_URL}/${path}`
  } else {
    return path
  }
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
    newImage = data.map(item => {
      return ResourcePrefixCheck(item)
    })
  } else {
    newImage = [ResourcePrefixCheck(data)]
  }

  uni.previewImage({
    current: index,
    urls: newImage
  })
}

/**
 * @description: 手机号正则
 * @param {type} phone
 * @return {type}
 */
const PhoneReg = phone => {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(phone)
}

/**
 * @description: 身份证号正则
 * @param {type} idCard
 * @return {type}
 */
const IdCardReg = idCard => {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(idCard)
}

/**
 * @description: 邮箱正则
 * @param {type} email
 * @return {type}
 */
const EmailReg = email => {
  return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)
}

Vue.prototype.$store = Store
Vue.prototype.$nav = { NavTo, NavTab, RediTo, NavBack }
Vue.prototype.$utils = { Msg, Modal, NavTo, NavTab, NavBack, PrevPage, PreviewImage, PhoneReg, IdCardReg, EmailReg }
Vue.prototype.$config = { API_BASE_URL: Config.API_BASE_URL }

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
