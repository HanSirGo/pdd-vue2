let Mock = require('mockjs')
let arrs = ['王赛军', '小全']
let types = Mock.mock([{
    "text": "推荐",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "食品",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "女装",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "手机",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "男装",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "鞋包",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "电器",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "健康",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "百货",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "母婴",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "数码",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "内衣",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "生鲜",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "洗护",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "美妆",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "运动",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "家装",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "家纺",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "车品",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "图书",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "充值",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "海淘",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
  {
    "text": "品牌",
    "children|15": [{
      "image": "@image('50x50','@color','#fff','@increment')",
      "text": "@cword(4)"
    }]
  },
])
let nav = [
  {
    title: "推荐",
    types: [
      {
        id: "t0",
        title: "限时秒杀",
        img: "https://commimg.pddpic.com/oms_img_ng/2022-05-20/6a5f0152-858f-4871-b0b4-06a80092dd08.gif?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t1",
        title: "断码清仓",
        img: "https://commimg.pddpic.com/oms_img_ng/2022-05-19/4b64083d-637f-41c9-af43-c4753556cec6.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t2",
        title: "发现好货",
        img: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t3",
        title: "多多果园",
        img: "https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t4",
        title: "9块9特卖",
        img: "https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t5",
        title: "多多爱消除",
        img: "https://img.pddpic.com/goods/2020-01-14/37fe68d866cb25a887beeb74699196b9.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t6",
        title: "充值中心",
        img: "https://img.pddpic.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t7",
        title: "医药馆",
        img: "https://img.pddpic.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t8",
        title: "签到",
        img: "https://img.pddpic.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t9",
        title: "多多赚大钱",
        img: "https://commimg.pddpic.com/oms_img_ng/2020-06-05/6709569b-84e6-4556-b82d-4c9f32840257.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t10",
        title: "行家帮你选",
        img: "https://commimg.pddpic.com/oms_img_ng/2020-12-04/c1a20306-bdb3-42c5-b0bb-e4018ce9f4d6.png?imageView2/2/w/117/q/80/format/webp",
      },
      {
        id: "t11",
        title: "省钱月卡",
        img: "https://img.pddpic.com/goods/2020-01-14/54ece7ca8c54cd8925d631323659e42f.png?imageView2/2/w/117/q/80/format/webp",
      },
    ],
    products: [
      {
        id: "nz_0",
        img: "https://commimg.pddpic.com/garner-api/3a2965f8e469df3b595971400a54c8de.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "白色宽松短袖t恤女2022年新款夏季韩版学生半袖体恤韩风chic上衣",
        desc: ["极速退货"],
        price: "5.45",
        pin_sum: "5.1万",
        icon: [
          "https://avatar2.pddpic.com/a/Q05xNHZvMDRsTTBiVVluRjZwM0xpbXg0cnJVclV4bXJpdz09djA0-1633660384?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_1",
        img: "https://commimg.pddpic.com/garner-api/8aa77c30ab5fb6cb4c98c51da7755090.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "啄木鸟正品高端纯棉短袖t恤女装新款潮夏季爆款宽松显瘦上衣体恤",
        desc: ["退货包运费", "极速退货"],
        price: "29.9",
        pin_sum: "2.4万",
        icon: [
          "https:/https://avatar2.pddpic.com/a/Q1BuNTRJR3RPbDVzNStYa2E2cWtHdnBzdjJobksxRlk5Zz09djA0-1634619604?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0FjTHEzODR0RFhWT2xnZjhoejJZVkxVekdhRGlQK3ZIZz09djA0-1559711012?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_2",
        img: "https://img.pddpic.com/mms-material-img/2021-06-05/4af060b5-1960-4291-b775-42bd03a6afe9.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "2件装网红t恤女2021新款印花短袖夏季韩版上衣ins超火宽松体恤衫",
        desc: ["立减9元", "极速退货"],
        price: "12.4",
        pin_sum: "10万+",
        icon: [
          "https://avatar2.pddpic.com/a/Q0RSeHRNdUdGbzdjbHpNVUVSa3RtcVVwM1VNWjk4WGZ1dz09djA0-1637118474?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q05Id05abVcrZ2dZNHlZcklzelR4SmpWYzNOOU5XOVJxdz09djA0-1644540614?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_3",
        img: "https://commimg.pddpic.com/garner-api/e3e4116104bc19ca623f8da1a6b8931b.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title: "2022夏季新款美式高街复古短袖t恤女韩版宽松学生半袖上衣ins",
        desc: null,
        price: "5.75",
        pin_sum: "2.2万",
        icon: [
          "https://avatar2.pddpic.com/a/Q0hHendOTnFWak44RlJjNkxCQTZlR1B5WXM2Y3lwQVEvUT09djA0-1645060097?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0V3dmZEcjFGQVBMWERhOTJ5UXZod3BSNWdJaWVXQzlpZz09djA0-1556347264?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_4",
        img: "https://commimg.pddpic.com/garner-api/2a9d5f07b74b90ff9021f0c8c796cecd.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "妈妈春装韩版格子衬衣40岁50中年女洋气显瘦薄款衬衫百搭外套开衫",
        desc: ["极速退款"],
        price: "2.4",
        pin_sum: "4722",
        icon: [
          "https://avatar2.pddpic.com/a/Q0VlczFadjlrRG1oZlk2TVhnZUZkb2V1TDlUd3drQ2Y3QT09djA0-1646298249?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0grRjhuK25YUktrZXRQNWVDRzQ1blA4YnRVNVF5WEU0QT09djA0-1594121546?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_5",
        img: "https://img.pddpic.com/mms-material-img/2021-07-22/45cca09c-f2b6-424c-b14c-32b1e1170c2e.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "买一送一100%纯棉t恤女夏季短袖女学生韩版宽松大码百搭印花上衣",
        desc: ["旗舰店", "极速退款"],
        price: "12.8",
        pin_sum: "8.2万",
        icon: [
          "https://avatar2.pddpic.com/a/Q01hd3JGc1ZkbzcxS0NnNWtaaWtrNUhxRmdMV1FTQTFqdz09djA0-1638059400?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0NhRjRBYnhYNjhpZ0g4endGYk14UHBCY2ZBUmV2NnBodz09djA0-1595400106?imageMogr2/thumbnail/100x",
        ],
      },
    ],
  },
  {
    title: "女装",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "n0",
        title: "裙装",
        img: "https://commimg.pddpic.com/phone_adx/3873a05c-88a0-11eb-a3ec-0a580a243691.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n1",
        title: "连衣裙",
        img: "https://commimg.pddpic.com/phone_adx/728f20b6-862c-11eb-90c8-be2cffc61501.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n2",
        title: "春夏上新",
        img: "https://img.pddpic.com/mms-material-img/2021-04-28/03fc1a21-1bfb-47c8-98cb-8fb21f9fbdd5.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n3",
        title: "上装",
        img: "https://img.pddpic.com/goods/images/2020-04-16/cf3049c775881d13b7825351840a9ced.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n4",
        title: "套装",
        img: "https://commimg.pddpic.com/phone_adx/2855c73e-d564-11eb-ba9a-0a580a213079.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n5",
        title: "大码女装",
        img: "https://commimg.pddpic.com/phone_adx/8973747c-bdbd-11ea-99ca-ea6ee88bdacf.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n6",
        title: "T恤",
        img: "https://img.pddpic.com/goods/images/2020-03-17/9e44053ba7c04acacd288b41d8c58f78.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n7",
        title: "外套",
        img: "https://img.pddpic.com/goods/images/images/2019-09-24/0d6dc604-99be-49af-9aec-b93ddbb4bfdb.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n8",
        title: "妈妈装",
        img: "https://commimg.pddpic.com/phone_adx/2084909c-ab09-11eb-93a2-f6fb8532bedb.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n9",
        title: "衬衫",
        img: "https://commimg.pddpic.com/phone_adx/0d85fffa-92a7-11eb-ac95-0a580a2168b9.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n10",
        title: "牛仔裤",
        img: "https://img.pddpic.com/goods/images/2019-06-19/aab8b732-17ef-4915-9e17-c591dfcfc5a9.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n11",
        title: "裤装",
        img: "https://img.pddpic.com/mms-material-img/2020-06-02/ea987b5e-286b-4a2e-bd4b-680d69d35091.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n12",
        title: "蕾丝雪纺衫",
        img: "https://img.pddpic.com/goods/images/2020-04-14/bf4070fc9c95fec232c4cc28e9a8f99a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "n13",
        title: "卫衣",
        img: "https://commimg.pddpic.com/phone_adx/13746e04-43cb-11eb-a666-ca586ce089e4.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
    ],
    products: [
      {
        id: "nz_0",
        img: "https://commimg.pddpic.com/garner-api/3a2965f8e469df3b595971400a54c8de.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "白色宽松短袖t恤女2022年新款夏季韩版学生半袖体恤韩风chic上衣",
        desc: ["极速退货"],
        price: "5.45",
        pin_sum: "5.1万",
        icon: [
          "https://avatar2.pddpic.com/a/Q05xNHZvMDRsTTBiVVluRjZwM0xpbXg0cnJVclV4bXJpdz09djA0-1633660384?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_1",
        img: "https://commimg.pddpic.com/garner-api/8aa77c30ab5fb6cb4c98c51da7755090.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "啄木鸟正品高端纯棉短袖t恤女装新款潮夏季爆款宽松显瘦上衣体恤",
        desc: ["退货包运费", "极速退货"],
        price: "29.9",
        pin_sum: "2.4万",
        icon: [
          "https:/https://avatar2.pddpic.com/a/Q1BuNTRJR3RPbDVzNStYa2E2cWtHdnBzdjJobksxRlk5Zz09djA0-1634619604?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0FjTHEzODR0RFhWT2xnZjhoejJZVkxVekdhRGlQK3ZIZz09djA0-1559711012?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_2",
        img: "https://img.pddpic.com/mms-material-img/2021-06-05/4af060b5-1960-4291-b775-42bd03a6afe9.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "2件装网红t恤女2021新款印花短袖夏季韩版上衣ins超火宽松体恤衫",
        desc: ["立减9元", "极速退货"],
        price: "12.4",
        pin_sum: "10万+",
        icon: [
          "https://avatar2.pddpic.com/a/Q0RSeHRNdUdGbzdjbHpNVUVSa3RtcVVwM1VNWjk4WGZ1dz09djA0-1637118474?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q05Id05abVcrZ2dZNHlZcklzelR4SmpWYzNOOU5XOVJxdz09djA0-1644540614?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_3",
        img: "https://commimg.pddpic.com/garner-api/e3e4116104bc19ca623f8da1a6b8931b.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title: "2022夏季新款美式高街复古短袖t恤女韩版宽松学生半袖上衣ins",
        desc: null,
        price: "5.75",
        pin_sum: "2.2万",
        icon: [
          "https://avatar2.pddpic.com/a/Q0hHendOTnFWak44RlJjNkxCQTZlR1B5WXM2Y3lwQVEvUT09djA0-1645060097?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0V3dmZEcjFGQVBMWERhOTJ5UXZod3BSNWdJaWVXQzlpZz09djA0-1556347264?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_4",
        img: "https://commimg.pddpic.com/garner-api/2a9d5f07b74b90ff9021f0c8c796cecd.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "妈妈春装韩版格子衬衣40岁50中年女洋气显瘦薄款衬衫百搭外套开衫",
        desc: ["极速退款"],
        price: "2.4",
        pin_sum: "4722",
        icon: [
          "https://avatar2.pddpic.com/a/Q0VlczFadjlrRG1oZlk2TVhnZUZkb2V1TDlUd3drQ2Y3QT09djA0-1646298249?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0grRjhuK25YUktrZXRQNWVDRzQ1blA4YnRVNVF5WEU0QT09djA0-1594121546?imageMogr2/thumbnail/100x",
        ],
      },
      {
        id: "nz_5",
        img: "https://img.pddpic.com/mms-material-img/2021-07-22/45cca09c-f2b6-424c-b14c-32b1e1170c2e.jpeg.a.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp",
        title:
          "买一送一100%纯棉t恤女夏季短袖女学生韩版宽松大码百搭印花上衣",
        desc: ["旗舰店", "极速退款"],
        price: "12.8",
        pin_sum: "8.2万",
        icon: [
          "https://avatar2.pddpic.com/a/Q01hd3JGc1ZkbzcxS0NnNWtaaWtrNUhxRmdMV1FTQTFqdz09djA0-1638059400?imageMogr2/thumbnail/100x",
          "https://avatar2.pddpic.com/a/Q0NhRjRBYnhYNjhpZ0g4endGYk14UHBCY2ZBUmV2NnBodz09djA0-1595400106?imageMogr2/thumbnail/100x",
        ],
      },
    ],
  },
  {
    title: "鞋包",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "男鞋",
        img: "https://img.pddpic.com/mms-material-img/2020-11-12/0520d3ad-039b-4d9d-8388-4df57109031e.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x2",
        title: "凉鞋",
        img: "https://img.pddpic.com/goods/images/2020-04-03/68f7b2d725ec6a1611761f0af1592385.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x3",
        title: "女鞋",
        img: "https://commimg.pddpic.com/garner-api/50a92492dc77842f41c96dea754841ec.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x4",
        title: "春夏上新",
        img: "https://img.pddpic.com/mms-material-img/2021-08-11/9fe7bd29-675c-455f-bc1f-524267a7505a.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x5",
        title: "运动休闲鞋",
        img: "https://img.pddpic.com/goods/images/2019-04-23/d4559b38-ee1b-4045-9242-a26bc6f9a922.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x6",
        title: "拖鞋雨鞋",
        img: "https://img.pddpic.com/goods/images/2019-09-01/0d9a8e06-f701-4e94-b663-e0395eda4bd3.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x7",
        title: "功能箱包",
        img: "https://img.pddpic.com/mms-material-img/2020-06-08/4e4089bd-4a21-4b78-89ee-18ea25dfa8bd.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x8",
        title: "男包",
        img: "https://commimg.pddpic.com/phone_adx/cb5651c6-37a1-11eb-ba57-9a172f0b18aa.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x9",
        title: "双肩包",
        img: "https://img.pddpic.com/goods/images/2019-12-23/ba4c55c369b1b40f8c7e23bd9403fd24.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x10",
        title: "低帮鞋",
        img: "https://img.pddpic.com/mms-material-img/2020-09-29/40cf00d7-8da5-4214-9845-0c38857d3b45.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x11",
        title: "皮带腰带",
        img: "https://img.pddpic.com/goods/images/2020-05-25/ac542432-7395-4c28-8665-26bec7313026.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x12",
        title: "靴子",
        img: "https://img.pddpic.com/mms-material-img/2020-06-17/b971ae07-929a-4766-bfed-98897ec9b35f.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x13",
        title: "腕表眼镜",
        img: "https://commimg.pddpic.com/phone_adx/43f6472c-8a1c-11eb-9170-0a580a267b42.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
    ],
    products: [],
  },
  {
    title: "手机",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "s0",
        title: "壳膜支架",
        img: "https://img.pddpic.com/mms-material-img/2021-04-24/4a1768cb-7a71-487e-a99e-ee95c16b9f90.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s1",
        title: "数码配件",
        img: "https://commimg.pddpic.com/phone_adx/2a5f0f36-17cc-11ec-8d0c-0a580a258d5f.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s2",
        title: "充电配件",
        img: "https://commimg.pddpic.com/phone_adx/b69ce8c0-13b7-11eb-9486-06ca98676b14.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s3",
        title: "蓝牙耳机",
        img: "https://img.pddpic.com/mms-material-img/2021-10-19/282adab780b9b80a7dfd6489207d412b.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s4",
        title: "充电宝",
        img: "https://commimg.pddpic.com/phone_adx/a5f09704-a342-11eb-8870-0a580a243691.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s5",
        title: "耳机麦克风",
        img: "https://img.pddpic.com/goods/images/2020-02-23/92652d2354e4d8b1f33a0b8cd14b2da9.png?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s6",
        title: "手机",
        img: "https://commimg.pddpic.com/phone_adx/5e567072-8ee2-11eb-af1b-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s7",
        title: "智能设备",
        img: "https://img.pddpic.com/mms-material-img/2022-03-15/b3540e23-2ae2-4588-a142-30984dfb19ef.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s8",
        title: "音响影视",
        img: "https://commimg.pddpic.com/phone_adx/2022-05-08/95c9e289a98264d01370d87b90a415a5.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s9",
        title: "苹果",
        img: "https://commimg.pddpic.com/phone_adx/9d614670-9423-11eb-9b5c-f6fb8532bedb.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s10",
        title: "二手数码",
        img: "https://commimg.pddpic.com/phone_adx/c76d9e92-10e2-11eb-bb34-2ae0296b4f4a.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s11",
        title: "相机",
        img: "https://img.pddpic.com/goods/images/2020-02-28/b27d158fb55c58a2813c3b852c095df8.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s12",
        title: "小米",
        img: "https://commimg.pddpic.com/oms_img_ng/2021-04-15/fbb5a995-3bc3-448c-9bb0-e5b59475cce0.png?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "s13",
        title: "华为/荣耀",
        img: "https://img.pddpic.com/goods/images/2019-09-22/8bee5fa682bd0b2c9bd562d95e272fdd.png?imageView2/2/w/1300/q/80/format/webp",
      },
    ],
    products: [],
  },
  {
    title: "食品",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "f0",
        title: "休闲零食",
        img: "https://commimg.pddpic.com/phone_adx/c891b78c-87f1-11eb-98c4-f6fb8532bedb.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f1",
        title: "粮油速食",
        img: "https://img.pddpic.com/goods/images/2019-04-14/bafe2ee2-e0b9-48a7-8f82-e8e2a24886ae.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f2",
        title: "地方农货",
        img: "https://img.pddpic.com/goods/images/2019-03-28/964f148d-6ca9-4081-8fef-1a6895fc7e4a.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f3",
        title: "饼干糕点",
        img: "https://commimg.pddpic.com/phone_adx/108085e8-7b2a-11eb-a36a-f6fb8532bedb.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f4",
        title: "乳品冲饮",
        img: "https://img.pddpic.com/goods/images/2020-05-26/68196c2b-e325-4d91-a8bf-c6321165bb46.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f5",
        title: "营养保健",
        img: "https://img.pddpic.com/mms-material-img/2021-05-19/92ab5839-9cba-4f70-956d-e0dc98aa7f59.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f6",
        title: "滋补养生",
        img: "https://img.pddpic.com/goods/images/2020-05-15/142d5d74d7e1c25f4db96028c38db104.jpeg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f7",
        title: "坚果蜜饯",
        img: "https://commimg.pddpic.com/phone_adx/58cb13ca-db09-11ea-b2d9-2af05a6efa59.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f8",
        title: "茶叶",
        img: "https://img.pddpic.com/goods/images/2019-04-29/dff3f9fc-7b32-4332-9851-d476eee217f7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "f9",
        title: "中外名酒",
        img: "https://commimg.pddpic.com/phone_adx/91760a42-e22d-11ea-b2a4-42f2ba2e0c1f.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
    ],
    products: [],
  },
  {
    title: "母婴",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "男装",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "百货",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "内衣",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "电器",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "家纺",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "水果",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "家具",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "美妆",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "家装",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "运动",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "车品",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "医药",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "电脑",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "海淘",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "饰品",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
  {
    title: "玩乐",
    top: [
      {
        title: "排行榜",
        title_icon:
          "https://pinduoduoimg.yangkeduo.com/hot_friends/2020-03-20/286b39e3-e06e-4aae-b5c7-0014addbbd72.png?imageView2/2/w/45/q/80/format/webp",
        text: "每日更新",
        imgs: [
          "https://img.pddpic.com/goods/images/2019-11-23/d55a4991-0da6-4d87-a660-c193c7ccdc8c.jpg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/mms-material-img/2022-04-25/a053d372-dea1-4ee1-b301-a3fcb0853512.png.a.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
      {
        title: "小编推荐",
        text: "精选好货",
        imgs: [
          "https://commimg.pddpic.com/auto-image/2022-04-28/1704dd4d49915557b71a9afd12dc1810.jpeg?imageView2/2/w/108/q/80/format/webp",
          "https://img.pddpic.com/gaudit-image/2022-04-22/c0ec24fa95ee27d8c6319b3c63fd9508.jpeg?imageView2/2/w/108/q/80/format/webp",
        ],
      },
    ],
    types: [
      {
        id: "x0",
        title: "女包",
        img: "https://commimg.pddpic.com/phone_adx/b7cdf0c0-8f06-11eb-8dc3-0a580a2598c7.jpg?imageView2/2/w/1300/q/80/format/webp",
      },
      {
        id: "x1",
        title: "",
        img: "",
      },
      {
        id: "x2",
        title: "",
        img: "",
      },
      {
        id: "x3",
        title: "",
        img: "",
      },
      {
        id: "x4",
        title: "",
        img: "",
      },
      {
        id: "x5",
        title: "",
        img: "",
      },
      {
        id: "x6",
        title: "",
        img: "",
      },
      {
        id: "x7",
        title: "",
        img: "",
      },
      {
        id: "x8",
        title: "",
        img: "",
      },
      {
        id: "x9",
        title: "",
        img: "",
      },
      {
        id: "x10",
        title: "",
        img: "",
      },
      {
        id: "x11",
        title: "",
        img: "",
      },
      {
        id: "x12",
        title: "",
        img: "",
      },
      {
        id: "x13",
        title: "",
        img: "",
      },
    ],
    products: [],
  },
]
Mock.mock('/get', 'get', arrs)
Mock.mock('/getnav', 'get', nav)
Mock.mock('/type', 'get', types)
Mock.mock('/login','post',config=>{
  return {
    message:"验证成功",
    token:"hello123"
  }
})