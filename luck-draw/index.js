// Page Components
var Index = {
    template: '#index',
    data() {
        return {
            title: '极拍',
            promotions: ["正在进行中", "往期秒杀"],
            promotionIndex: 0,
            activityList: [{
                id: 1,
                title: '小王子',
                img: '/img/xiaowangzi.png',
                subTitle: '物舍双喜瓶，陪伴于你左右的水瓶',
                status: 0,
                price: '198.99',
                formerPrice: '399.00',
                startTime: '2018-07-02 00:00:00',
                endTime: '2018-08-02 24:00:00'
            }]

        }
    },
    methods: {
        changeTab: function(index) {
            this.promotionIndex = index
            if (index === 1) {
                this.activityList = [{
                        id: 1,
                        title: '小王子',
                        img: '/img/xiaowangzi.png',
                        subTitle: '物舍双喜瓶，陪伴于你左右的水瓶',
                        status: 1,
                        price: '198.99',
                        formerPrice: '399.00',
                        startTime: '2018-07-02 00:00:00',
                        endTime: '2018-08-02 24:00:00'
                    },
                    {
                        id: 1,
                        title: '小王子',
                        img: '/img/xiaowangzi.png',
                        subTitle: '物舍双喜瓶，陪伴于你左右的水瓶',
                        status: 1,
                        price: '198.99',
                        formerPrice: '399.00',
                        startTime: '2018-07-02 00:00:00',
                        endTime: '2018-08-02 24:00:00'
                    },
                    {
                        id: 1,
                        title: '小王子',
                        img: '/img/xiaowangzi.png',
                        subTitle: '物舍双喜瓶，陪伴于你左右的水瓶',
                        status: 1,
                        price: '198.99',
                        formerPrice: '399.00',
                        startTime: '2018-07-02 00:00:00',
                        endTime: '2018-08-02 24:00:00'
                    }
                ]
            } else {
                this.activityList = [{
                    id: 1,
                    title: '小王子',
                    img: '/img/xiaowangzi.png',
                    subTitle: '物舍双喜瓶，陪伴于你左右的水瓶',
                    status: 0,
                    price: '198.99',
                    formerPrice: '399.00',
                    startTime: '2018-07-02 00:00:00',
                    endTime: '2018-08-02 24:00:00'
                }]
            }
        }
    }
}

// detail
var Detail = {
    template: '#detail',
    data() {
        return {
            title: '极拍',
            id: this.$route.query.id,
            detail : {
              swiperImgs: [
                '/img/xiaowangzi.png',
                '/img/xiaowangzi.png',
                '/img/xiaowangzi.png',
                '/img/xiaowangzi.png',
              ],
              stock: 1,
              price: 100,
              oldPrice: 200,
              title: '小王子',
              subTitle: '小王子h很好看小王子h很好看小王子h很好看小王子h很好看',
              descImgs: [
              "/img/xiaowangzi-desc-1.jpg",
              "/img/xiaowangzi-desc-2.jpg",
              "/img/xiaowangzi-desc-3.jpg",
              ]
            }

        }
    },
    methods: {
        back() {
            $router.back('/')
        },
        joinIn() {
        },
        joinHistory() {
            $router.push({path: '/history', query:{ id: this.$route.query.id}})
        }
    }
}

// detail
var History = {
    template: '#history',
    data() {
        return {
            title: '极拍',
            items: [],
            loadDone: false

        }
    },
    mounted() {
        for (let i = 1; i <= 20; i++) {
            this.items.push({
                time: '2017-01-01 12:11:22',
                name: '张三' + i,
                level: 4 - i,
                mobile: '15210618066',
                joinCode: '123456'
            })
        }
        this.top = 1
        this.bottom = 20
    },
    methods: {
        changeTab: function(index) {
            this.promotionIndex = index
        },
        back() {
            $router.back({path: '/detail', query:{ id: this.$route.query.id}})
        },
        onRefresh(done) {
            done()
        },
        onInfinite(done) {
            setTimeout(() => {
                if (this.infiniteCount < 2) {
                    let start = this.bottom + 1
                    for (let i = start; i < start + 10; i++) {
                        this.items.push({
                            time: '2017-01-01 12:11:22',
                            name: '张三' + i,
                            level: 4 - i,
                            mobile: '15210618066',
                            joinCode: '123456'
                        })
                    }
                    this.bottom = this.bottom + 10;

                    this.infiniteCount++
                } else {
                    this.loadDone = true
                }

                done()
            }, 1000)
        }
    }
}


// filter
Vue.filter('money', function(value) {
    const number = Number(value)
    return '￥'  + number.toFixed(2)
})

// filter
Vue.filter('status', function(value) {
    const number = Number(value)
    if (number === 0) {
        return '进行中'
    } else if (number === 1) {
        return '未开始'
    } else if (number === 2) {
        return '已结束'
    } else {
        return ''
    }
})

// filter
Vue.filter('level', function(value) {
    const number = Number(value)
    if (number === 1) {
        return '一等奖'
    } else if (number === 2) {
        return '二等奖'
    } else if (number === 3) {
        return '三等奖'
    } else {
        return ''
    }
})

// Routes
const drawRoutes = [
    { path: '/', component: Index },
    { path: '/detail', component: Detail },
    { path: '/history', component: History }
]
