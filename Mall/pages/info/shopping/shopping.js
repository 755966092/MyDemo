var app = getApp()
Page({
    data: {
        // hidden:false,
        curNav: 1,
        curIndex: 0,
        cart: [],
        cartTotal: 0,
        navList: [{
                id: 1,
                name: '热销课程'
            },
            {
                id: 2,
                name: '政治'
            },
            {
                id: 3,
                name: '英语'
            },
            {
                id: 4,
                name: '数学'
            }
        ],
        dishesList: [
            [{
                    name: "政治",
                    price: 38,
                    num: 1,
                    id: 1,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 29,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 88,
                    num: 1,
                    id: 2,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 3,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 58,
                    num: 1,
                    id: 4,
                    img: '/images/v.png'
                }
            ],
            [{
                    name: "政治",
                    price: 18,
                    num: 1,
                    id: 5,
                    img: '/images/v.png'
                },
                {
                    name: "政治",
                    price: 8,
                    num: 1,
                    id: 6,
                    img: '/images/v.png'
                }
            ],
            []
        ],
        dishes: []
    },
    selectNav(event) {
        console.log(event)
        let id = event.target.dataset.id,
            index = parseInt(event.target.dataset.index);
        self = this;
        this.setData({
            curNav: id,
            curIndex: index
        })
    },
    // 选择课程
    selectDish(event) {
        let dish = event.currentTarget.dataset.dish;
        let price = event.currentTarget.dataset.price * 1;
        let flag = true;
        let cart = this.data.cart;
        let total = this.data.cartTotal;
        if (cart.length > 0) {
            cart.forEach(function(item, index) {
                if (item == dish) {
                    cart.splice(index, 1);
                    flag = false;
                    total -= price;
                }
            })
        }
        if (flag) {
            cart.push(dish);
            total += price;
        }
        this.setData({
            cartTotal: total
        })
        this.setStatus(dish)
    },
    setStatus(dishId) {
        let dishes = this.data.dishesList;
        for (let dish of dishes) {
            dish.forEach((item) => {
                if (item.id == dishId) {
                    item.status = !item.status || false
                }
            })
        }

        this.setData({
            dishesList: this.data.dishesList
        })
    },
    // onLoad() {
    //     this.loadingChange()
    // }
})