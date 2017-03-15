// pages/index/search/search.js
Page({
    data: {
        //搜索标签
        seaLab: ['2018翻译硕士-旅游类', '2018翻译硕士-旅游类文章攻', '2018翻译硕士-旅游类文章攻克班', '2018翻译硕士-旅游类', '2018翻译硕士-旅游类文章攻', '2018翻译硕士-旅游类文章攻克班'],
        //是否显示热门标签
        condition: true,
        //是否显示清除按钮
        conditionClear: false,
        //input内容
        inputValue: '',
        //提示标签
        cutText: '',
        //提示标签的显示与隐藏
        conditionCut: false

    },
    //点击取消返回上一页
    back: function() {
        wx.navigateBack(1);
    },
    //输入文字触发的事件
    targetSearch1: function(e) {
        var arr = ['翻译硕士-旅游类', '2118翻译硕士-旅游类文章攻', '2218翻译硕士-旅游类文章攻克班', '翻译硕士-旅游类', '2118翻译硕士-旅游类文章攻', '2218翻译硕士-旅游类文章攻克班', '翻译硕士-旅游类', '2118翻译硕士-旅游类文章攻', '2218翻译硕士-旅游类文章攻克班', '翻译硕士-旅游类', '2118翻译硕士-旅游类文章攻', '2218翻译硕士-旅游类文章攻克班'];

        var iptText = e.detail.value;
        var a = [];
        console.log(this.data.inputValue)

        this.setData({
            //获取输入的内容
            inputValue: e.detail.value,
            //隐藏热门标签
            condition: false,
            //显示清除按钮
            conditionClear: true,
            //显示提示标签
            conditionCut: true

        });
        //文字匹配
        for (let i = 0; i < arr.length; i++) {
            if (iptText === '') {
                a.push('');
                //输入框没有内容的时候,显示热门标签,隐藏清除按钮,清空提示短语
                this.setData({
                    cutText: a,
                    condition: true,
                    conditionClear: false,
                    conditionCut: false
                })
            } else if (arr[i].indexOf(iptText) === 0) {
                a.push(arr[i]);
                this.setData({
                    cutText: a
                })
            } else {
                a.push();
                this.setData({
                    cutText: a,
                })
            }
        }
    },



    //失去焦点显示热门标签
    // targetSearch2: function() {
    //     this.setData({
    //         condition: true,
    //         conditionCut: false
    //     })
    // },



    //清除input内容
    clearIpt: function() {
        this.setData({
            inputValue: '',
            conditionClear: false,
            conditionCut: false,
            condition: true,
        })
    },
    //点击标签,把标签内文字写入输入框;(或者直接搜索标签内容)
    setIpt: function(e) {
        var lab = e.currentTarget.dataset.sealab;
        this.setData({
            inputValue: lab,
            conditionCut: false,
            conditionClear: true
        });
        setInterval(this.tapSearch(), 1000)

    },
    //点击热门标签直接搜索
    tapSearch: function() {
        wx.navigateTo({
            url: '/pages/index/courseInfo/courseInfo'
        })
    }
})