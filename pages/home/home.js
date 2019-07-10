// pages/home/home.js
import { timestampToTime } from "../../utils/timestampToTime";
Page({
/**http://api.zsmq.console.retailsolution.cn/v1/message/queryAllCanSee?pageNo=' + this.state.pageNo + '&pageSize=' + this.state.pageSize */
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    currentDate: new Date().getTime(),
    selectedTime:"",
    unfold:false, 
    myList:[{
      key:"1",
      status:"已放还",
      licensePlate:"苏D1589",
      order:1
    },
      {
        key: "2",
        status: "已放还",
        licensePlate: "苏D1589",
        order: 2
      },
      {
        key: "3",
        status: "已放还",
        licensePlate: "苏D1589",
        order: 3
      },
      {
        key: "4",
        status: "未放还",
        licensePlate: "苏D1589",
        order: 4
      }]
  },
  handClick: function (event){
    var $this = this;
    wx.navigateTo({
      url: '../datails/datails?gid=' + event.currentTarget.dataset.gid
    })
    console.log(event.currentTarget.dataset.gid)
  },
  /**
   * 监听时间变化
   */
  onInputTimePicker:function(event) {
  this.setData({
    currentDate:event.detail
  })
  },
  /**
   * 关闭弹窗
   */
  onPopupClose:function() {
    this.setData({ show: false });
  },
  /**
   * 打开弹窗
   */
  onPopupOpen:function(){
    this.setData({ show: true });
  },
  /**
   * 时间选择器点击确定按钮
   */
  conformTimePicker:function(event){
    let date = timestampToTime(event.detail)
    this.setData({
      selectedTime: date
    })
    this.onPopupClose()
  },
   /**
   * 查询表单确认按钮
   */
  formSubmit:function(event){
    console.log("确认按钮", event.detail)
  },
  unfoldSearch:function(){
    let state=this.data.unfold
    console.log("state", !state)
    this.setData({
      unfold: !state
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})