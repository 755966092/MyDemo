Page({
    data: {
        name: 'jack',
        move: [],
        showLoand:true,
        start:0
    },
    //获取位置
    getcity: function (){
        var temp = this,city;
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
                    temp.getmove(city)
                }
        })
    },
    getmove: function(city){
        var temp = this;
        //请求获取电影
        fetch('https://api.douban.com/v2/movie/in_theaters?city=' + city + '&start='+temp.data.start+'&count=20').then(
            function(response) {
                response.json().then(
                    function(data) {
                        //subjects是一个数组,里面保存每一个请求到的电影的详情对象
                        console.log(data)
                        temp.setData({
                            move: temp.data.move.concat(data.subjects),
                            start:temp.data.start + data.subjects.length,
                            showLoand:false
                        })
                    })
            }
        )
    },
    onLoad: function() {
        this.getcity();
    },
    //跳转到新页面,传递过去用户点击的电影ID
    newview: function(e){
        var b = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: "info/info?id="+b,
        })
    },
    newScroll: function(e){
        console.log(e);
        console.log(1);
    },
    onPullDownRefresh: function(){
        console.log(222);
    },
    sc: function(e){
        console.log(e);
        console.log(111);
    }
})
