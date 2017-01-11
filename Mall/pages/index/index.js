Page({
    data: {
        imgUrls: [
            '/images/banner2.jpg',
            '/images/banner3.jpg',
            '/images/banner1.jpg',
        ],
        //导航数据
        navImgUrl: [{
                imgurl: '/images/zz.png',
                name: '政治',
                id: 'politics'
            },
            {
                imgurl: '/images/yy.png',
                name: '英语',
                id: 'english'

            },
            {
                imgurl: '/images/sx.png',
                name: '数学',
                id: 'math'
            },
            {
                imgurl: '/images/jjjr.png',
                name: '经济/金融',
                id: 'economy'
            },
            {
                imgurl: '/images/fyss.png',
                name: '翻译硕士',
                id: 'translate'
            },
            {
                imgurl: '/images/kjss.png',
                name: '会计硕士',
                id: 'accounting'
            },
            {
                imgurl: '/images/flss.png',
                name: '法律硕士',
                id: 'law'
            },
            {
                imgurl: '/images/gd.png',
                name: '更多',
                id: 'more'
            }
        ],
        //最新好课
        newCourse: [{
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500

            }, {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500

            }
        ],

        //免费好课
        freeCourse: [{
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: '免费',

            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: '免费'
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: '免费',

            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: '免费'
            },

        ],

        //活动专区
        activityCourse: [{
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 800,
                price1: 500
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500
            },
            {
                url: '/images/fffffff.png',
                name: '2018翻译硕士-社会文化 类文章攻克班',
                price: 500
            }
        ],
    },
    //搜索栏跳转
    targetSearch: function() {
        wx.navigateTo({
            url: 'search/search'
        })
    },
    //课程列表跳转
    shipNewPage: function(event) {
        var kc = event.currentTarget.dataset.title;
        var id = event.currentTarget.dataset.id;
        if (id === 'more') {
            wx.navigateTo({
                url: '/pages/more/more'
            })
        } else {
            wx.navigateTo({
                url: 'courseList/courseList?kc=' + kc + '&id=' + id
            })
        }
    },
    //课程详情页跳转
    tapSearch: function() {
        wx.navigateTo({
            url: '/pages/index/courseInfo/courseInfo'
        })
    }
})