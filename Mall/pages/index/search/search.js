// pages/index/search/search.js
Page({
    data: {
        //搜索标签
        seaLab: ['2018翻译硕士-旅游类', '2018翻译硕士-旅游类文章攻', '2018翻译硕士-旅游类文章攻克班', '2018翻译硕士-旅游类', '2018翻译硕士-旅游类文章攻', '2018翻译硕士-旅游类文章攻克班'],
        condition: true

    },
    back: function() {
        wx.navigateBack(1);
    },
    //获取焦点隐藏热门标签
    targetSearch1: function() {
        this.setData({
            condition: false
        })
    },
    //失去焦点显示热门标签
    targetSearch2: function() {
        this.setData({
            condition: true
        })
    },
    onLoad: function(options) {
        // 页面初始化 options为页面跳转所带来的参数
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})