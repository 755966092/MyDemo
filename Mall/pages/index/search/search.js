// pages/index/search/search.js
var app = getApp();
Page({
    data: {
        course: ['考研政治', '考研数学', '考研英语', '翻硕']
    },
    searchCourse: function(e) {
        console.log(app.search(e))
    },
    //点击搜索按钮
    defaultTap: function(e) {
        console.log(e);
    },
    //失去焦点之后,获取输入的内容
    EventHandle: function(e) {
        console.log(e.detail.value)
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