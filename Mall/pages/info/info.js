// pages/info/info.js
var app = getApp();
Page({
    data: {},
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    shipInfo: function(event) {
        wx.navigateTo({
            url: 'shopping/shopping'
        })
    }

})