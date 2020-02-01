var util = require('./utils/util.js')

App({

  globalData: {
    time:null
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    var time = util.formatTime(new Date());
    this.globalData.time = time
    console.log("日期是：", time[0],time[1],time[2],time[3],time[4],time[5],time[6],time[7],time[8],time[9],)
    var day = Number(time[8])*10+Number(time[9])
    console.log("日期：",day)
    if (day == 1) {
      var setflag = wx.getStorageSync('setflag')
      if (!setflag) {
        wx.setStorageSync('currentall', 0)
        wx.setStorageSync('setflag', 1)
      }
    } else {
      wx.setStorageSync('setflag', 0)
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
