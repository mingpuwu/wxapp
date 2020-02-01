// pages/current/current.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentall:null,
    currentcost:null,
    items: [
      { name: 'eat', value: '饮食',checked:'true'},
      { name: 'veh', value: '交通'},
      { name: 'pla', value: '娱乐'},
      { name: 'sho', value: '购物'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("get db data")
    try{
      this.data.currentall = wx.getStorageSync('currentall')
      var currentallnum = Number(this.data.currentall)
      console.log("data is : ", currentallnum)
      if (currentallnum == 0) {
        console.log("set currentall 0")
        wx.setStorageSync('currentall', 0)
      }
    }catch (e) {
      console.log("get currentall fail")
    }
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
    wx.setStorageSync('currentall', this.data.currentall)
    console.log("storage data")
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

  },

  currentcost: function(e) {
    this.data.currentcost = e.detail.value
  },

  radioChange: function(e) {
    console.log("选择框选择：",e.detail.value)
  },

  add: function() {
    console.log("add money:", this.data.currentcost)
    this.setData({currentall:(Number(this.data.currentall) + Number(this.data.currentcost))})
    this.setData({currentcost:null})
    console.log("allmoney is : ",this.data.currentall)
  }
})