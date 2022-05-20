<template>
  <div class="type">
    <Search :mess="mess" />
    <!-- 分类页面 -->
    <div class="tree">
      <van-tree-select
        :items="types"
        height="100%"
        :main-active-index="activeindex"
        :active-id="rightid"
        @click-nav="leftfn"
      >
        <template #content>
          <div v-for="(item, index) in contentsright" :key="index">
            <h3>{{ item.text }}</h3>
            <img :src="item.image" alt="" />
          </div>
        </template>
      </van-tree-select>
    </div>
    <tab-bar />
  </div>
</template>
<script>
import instance from "@/api/api";
import TabBar from "@/components/TabBar.vue";
import Search from "@/components/Search.vue";
export default {
  name: "type",
  components: {
    TabBar,
    Search,
  },
  data() {
    return {
      mess: "分类搜索",
      types: [], //存放请求的数据
      activeindex: 0, //左侧默认选中的字段
      rightid: "", //右侧选中的id
      contentsright: [], //右侧数据
    };
  },
  methods: {
    async gettypes() {
      //请求数据的函数
      let { data } = await instance.get("/type");
      // console.log(data);
      this.types = data;
      this.contentsright = this.types[this.activeindex].children;
    },
    leftfn(item) {
      //点击左侧导航触发
      // console.log(item);//点击左侧导航 返回的索引
      this.activeindex = item;
      this.contentsright = this.types[item].children;
      //获取右侧元素
      // let reight = this.$refs.reight
      // console.log(reight);
      // reight.clientTop = 0
      var xx = document.getElementsByClassName("van-tree-select__content");
      xx[0].scrollTop = 0;
      console.log(xx[0].scrollTop);
    },
  },
  created() {
    this.gettypes();
  }
};
</script>
<style lang="less" scoped>
.type {
  height: 100vh;
  // background: red;
  .tree {
    height: calc(100% - 104px);
    &::-webkit-scrollbar {
      display: none;
    }
    /deep/ .van-tree-select {
      .van-tree-select__nav {
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .van-tree-select__content {
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>