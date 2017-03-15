
  module.exports = {
        getCity: function(fn){
        var than = this;
        wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function(res){
            console.log(res);
            //当前位置的经纬度
            var locationParam = res.latitude + ',' + res.longitude;
            //通过经纬度定位当前城市
            fetch('https://api.map.baidu.com/geocoder/v2/?ak=7VENmCeC4aaAfx3CKbSjT1K3oRucOgDK&location=' + locationParam + '1&output=json&pois=1').then(function(response){
            response.json().then(function(data){
                fn(data.result.addressComponent.city.replace('市',''))
            })
            })
        }
        })
    },
    //请求获取天气
    getWeatherer: function(city){
        var that  = this;
        //fetch请求
        fetch('https://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=uVI0viOM0c4W64xi19cVxza3q9IniAIy').then(function(r){
        r.json().then(function(d){
            that.setData({
            currentCity: d.results[0].currentCity,
            index: d.results[0].index,
            pm25: d.results[0].pm25,
            weather_data: d.results[0].weather_data
            })
        })
        })
    }
  }