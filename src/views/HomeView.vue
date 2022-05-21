<template>
  <div class="home">
    <Search :mess="mess" />
    <van-tabs>
      <van-tab v-for="(item, index) in nav" :title="item.title" :key="index">
        <template>
          <div>1111111111111111</div>
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
        { title: "推荐", router: "" },
        { title: "女装", router: "" },
        { title: "鞋包", router: "" },
        { title: "手机", router: "" },
        { title: "食品", router: "" },
        { title: "母婴", router: "" },
        { title: "男装", router: "" },
        { title: "百货", router: "" },
        { title: "内衣", router: "" },
        { title: "电器", router: "" },
        { title: "家纺", router: "" },
        { title: "水果", router: "" },
        { title: "家具", router: "" },
        { title: "美妆", router: "" },
        { title: "家装", router: "" },
        { title: "运动", router: "" },
        { title: "车品", router: "" },
        { title: "医药", router: "" },
        { title: "电脑", router: "" },
        { title: "海淘", router: "" },
        { title: "饰品", router: "" },
        { title: "玩乐", router: "" },
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
  /deep/ .van-tabs{
    height: calc( 100vh - 104px );
    .van-tabs__wrap{
      border-bottom:1px solid #ccc;
      .van-tab{
        &.van-tab--active{
          .van-tab__text{
            font-weight: 900;
            color:#f00;
          }
        }
      }
    }
    .van-tabs__content {
      // background-color:blue;
      height:calc(100% - 43px);
      overflow: scroll;
      &::-webkit-scrollbar{
        display:none;
      }
      .van-tab__pane{
        // padding-top:10px;
        // height:800px;
        // background-color:pink;
      }
    }
  }
}
</style>