// pages/info/info.js
var wxCharts = require('../../utils/wxcharts.js')
var app = getApp()
var pieChart = null

Page({

  /**
   * 页面的初始数据
   */
  data: {
    plancost:0,
    currentall:0,
    percent:0,
    remain:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var currentall_string = wx.getStorageSync('currentall')
    this.setData({ currentall: Number(currentall_string) })
    console.log("当前总消费：", this.data.currentall)

    var plancost_string = wx.getStorageSync('plancost')
    if (!plancost_string) {
      console.log("消费计划没有设置")
      wx.setStorageSync('plancost', 2000)
      plancost_string = wx.getStorageSync('plancost')
    }

    this.setData({ plancost: Number(plancost_string) })

    console.log("计划消费：", plancost_string)
    this.setData({ percent: parseInt((this.data.currentall) / Number(plancost_string) * 100) })
    this.setData({remain:this.data.plancost-this.data.currentall})
    console.log("当前消费百分比是：", parseInt(this.data.percent))
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  touchHandler: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
  }, 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '剩余',
        data: 100 - this.data.percent,
      }, {
        name: '消费',
        data: this.data.percent,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
    });

    var currentall_string = wx.getStorageSync('currentall')
    this.setData({ currentall: Number(currentall_string) })
    console.log("当前总消费：", this.data.currentall)

    var plancost_string = wx.getStorageSync('plancost')
    if (!plancost_string) {
      console.log("消费计划没有设置")
      wx.setStorageSync('plancost', 2000)
      plancost_string = wx.getStorageSync('plancost')
    }

    this.setData({ plancost: Number(plancost_string) })

    console.log("计划消费：", plancost_string)
    this.setData({ percent: parseInt((this.data.currentall) / Number(plancost_string) * 100) })
    this.setData({ remain: this.data.plancost - this.data.currentall })
    console.log("当前消费百分比是：", parseInt(this.data.percent))
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