var common = require('common.js')
Page({
    data: {
        name: 'jack',
        move: []
    },
    onLoad: function() {
        var temp = this,
            city;
        wx.getLocation({
            type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            success: function(res) {
                var locationParam = res.latitude + ',' + res.longitude;
                //获取位置
                fetch('https://api.map.baidu.com/geocoder/v2/?ak=7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK&location=' + locationParam + '1&output=json&pois=1').then(function(response) {
                    response.json().then(function(data) {
                        city = data.result.addressComponent.city.replace('市', '')
                    })
                })

                //请求获取电影
                fetch('https://api.douban.com/v2/movie/in_theaters?city=' + city + '&start=0&count=5').then(
                    function(response) {
                        response.json().then(
                            function(data) {
                                //subjects是一个数组,里面保存每一个请求到的电影的详情对象
                                console.log(data.subjects)
                                temp.setData({
                                    move: data.subjects
                                })
                            })
                    }
                )
            }
        })

    }
})