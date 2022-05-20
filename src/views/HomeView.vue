<template>
  <div class="home">
    <Search :mess="mess" />
    <van-tabs sticky offset-top="53px">
      <van-tab v-for="(item, index) in nav" :title="item.title" :key="index">
        内容 {{ index }}
        <div style="height:100vh;background-color:blue"></div>
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
    tabqihuan(a,b){
      console.log(a,b);
    }
  },
};
</script>
<style lang="less" scoped>
.home {
  /deep/ .van-tab{
    font-size:14px;
    color:#444;
    &.van-tab--active{
    color:#f00;
    .van-tab__text{
      font-weight: 900;
    }
  }
  }
  
}
</style>