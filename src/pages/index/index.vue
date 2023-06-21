<template>
  <view class="container index-container h-screen bg-gray-100 flex justify-center">
    <view class="example-button mt-20">
      <u-button type="primary" @click="$to.NavTo({ url: '/pages/examples/index' })">查看示例</u-button>
    </view>
  </view>
</template>

<script>
export default {
  // 局部注册的组件
  components: {},

  // 组件状态值
  data() {
    return {}
  },

  // 计算属性
  computed: {},

  // 侦听器
  watch: {},

  // 方法
  methods: {},

  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad
   * [百度小程序]
   */
  onInit() {},

  /**
   * 监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参）
   */
  onLoad(option) {},

  /**
   * 监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
   */
  onShow() {},

  /**
   * 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。
   */
  beforeCreate() {},

  /**
   * 在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，且 el property 目前尚不可用
   */
  created() {},

  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},

  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
   */
  onReady() {},

  /**
   * 监听页面隐藏
   */
  onHide() {},

  /**
   * 监听页面卸载
   */
  onUnload() {},

  /**
   * 监听窗口尺寸变化
   * [App、微信小程序、快手小程序]
   */
  onResize() {},

  /**
   * 监听用户下拉动作，一般用于下拉刷新
   * 需要在 pages.json 里，找到的当前页面的pages节点，并在 style 选项中开启 enablePullDownRefresh。当处理完数据刷新后，uni.stopPullDownRefresh 可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh() {},

  /**
   * 页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项
   */
  onReachBottom() {},

  /**
   * 点击 tab 时触发，参数为Object，具体见下方注意事项
   * [微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序]
   */
  onTabItemTap() {},

  /**
   * 用户点击右上角分享
   * [微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序、京东小程序]
   */
  onShareAppMessage() {},

  /**
   * 监听页面滚动，参数为Object
   * 监听非 scroll-view 标签的滚动，scroll-view 滚动需用自带事件监听
   * [nvue暂不支持]
   */
  onPageScroll() {},

  /**
   * 监听原生标题栏按钮点击事件，参数为Object
   * [App、H5]
   */
  onNavigationBarButtonTap() {},

  /**
   * 监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：onBackPress 详解。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。
   * [app、H5、支付宝小程序]
   */
  onBackPress() {},

  /**
   * 监听原生标题栏搜索输入框输入内容变化事件
   * [App、H5]
   */
  onNavigationBarSearchInputChanged() {},

  /**
   * 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
   * [App、H5]
   */
  onNavigationBarSearchInputConfirmed() {},

  /**
   * 监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发
   * [App、H5]
   */
  onNavigationBarSearchInputClicked() {},

  /**
   * 监听用户点击右上角转发到朋友圈
   * [微信小程序]
   */
  onShareTimeline() {},

  /**
   * 监听用户点击右上角收藏
   * [微信小程序、QQ小程序]
   */
  onAddToFavorites() {},

  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   * uniapp 只支持 H5平台
   */
  beforeUpdate() {},

  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   * uniapp 只支持 H5平台
   */
  updated() {},

  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},

  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},

  /**
   * 当捕获一个来自子孙组件的错误时被调用
   */
  errorCaptured() {},
}
</script>

<style lang="scss" scoped>
.index-container {
}
</style>
