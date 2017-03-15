// pages/info/info.js
Page({
  data:{
    move:[]
  },
  onLoad:function(options){
    var than = this;
    var id = options.id;
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id);
    
    fetch("https://api.douban.com/v2/movie/subject/"+options.id).then(function(response){
      response.json().then(function(data){
        console.log(data)
        //名字
        console.log(data.original_title);
        //主演casts
        console.log(data.casts);
        //导演directors
        console.log(data.directors);
        //年份
        console.log(data.year)
        //评分
        console.log(data.rating.average)
        wx.setNavigationBarTitle({
          title: data.original_title,
        })
        //简介
        console.log(data.summary)
        than.setData({
          move:data
        })
      })
    })
  },
  onReady:function(){
    // 页面渲染完成,发送请求,请求到用户点击的电影详情,movemoveId为请求的电影id

  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})