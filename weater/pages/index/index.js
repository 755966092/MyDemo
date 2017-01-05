var common = require('common.js')
Page({
  data:{
    currentCity:'',
    index: [],
    pm25: '',
    weather_data: [],
  },
  onLoad: function () {
      var than = this
        common.getCity(function(city){
          //这里必须改变调用的getWeatherer的this指向,如果不改变,this默认指向common对象
          common.getWeatherer.call(than,city)
        })
  }
})