<template>
  <div class="home">
    <Search :mess="mess" />
    <van-tabs>
      <van-tab v-for="(item, index) in nav" :title="item.title" :key="index">
        <template>
          <div v-if="index == 0">
            <div class="tui-top">
              <van-grid square :border="false" column-num="6">
                <van-grid-item
                  v-for="value in item.types"
                  :key="value.id"
                  :icon="value.img"
                  :text="value.title"
                />
              </van-grid>
            </div>
            <p>222</p>
          </div>
          <div v-else>
            <h3>111111111</h3>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <TabBar />
  </div>
</template>

<script>
// @ is an alias to /src
import instance from "@/api/api";
import TabBar from "@/components/TabBar.vue";
import Search from "@/components/Search.vue";
export default {
  name: "HomeView",
  components: {
    TabBar,
    Search,
  },
  data() {
    return {
      mess: "首页搜索",
      nav: [
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
          products: [],
        },
        { title: "女装", types: [], products: [] },
        { title: "鞋包", types: [], products: [] },
        { title: "手机", types: [], products: [] },
        { title: "食品", types: [], products: [] },
        { title: "母婴", types: [], products: [] },
        { title: "男装", types: [], products: [] },
        { title: "百货", types: [], products: [] },
        { title: "内衣", types: [], products: [] },
        { title: "电器", types: [], products: [] },
        { title: "家纺", types: [], products: [] },
        { title: "水果", types: [], products: [] },
        { title: "家具", types: [], products: [] },
        { title: "美妆", types: [], products: [] },
        { title: "家装", types: [], products: [] },
        { title: "运动", types: [], products: [] },
        { title: "车品", types: [], products: [] },
        { title: "医药", types: [], products: [] },
        { title: "电脑", types: [], products: [] },
        { title: "海淘", types: [], products: [] },
        { title: "饰品", types: [], products: [] },
        { title: "玩乐", types: [], products: [] },
      ],
    };
  },
  methods: {
    tabqihuan(a, b) {
      console.log(a, b);
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  /deep/ .van-tabs {
    height: calc(100vh - 104px);
    .van-tabs__wrap {
      border-bottom: 1px solid #ccc;
      .van-tab {
        &.van-tab--active {
          .van-tab__text {
            font-weight: 900;
            color: #f00;
          }
        }
      }
    }
    .van-tabs__content {
      // background-color:blue;
      height: calc(100% - 43px);
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      .van-tab__pane {
        // padding-top:10px;
        // height:800px;
        // background-color:pink;
        .tui-top {
          width: 100vw;
          overflow-x: scroll;
          scrollbar-width:120px;
          &::-webkit-scrollbar {
            // display:none;
            // width:120px;
            height: 3px;
            background-color: #f5f5f5;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 3px;
            background-color: #f00//滚动条的颜色;
          }
          //内层滚动槽
          &::-webkit-scrollbar-track-piece {
            background-color: #ccc;
          }
          .van-grid {
            width: 120%;
            .van-grid-item {
              .van-grid-item__content {
                padding-left: 0;
                padding-right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>