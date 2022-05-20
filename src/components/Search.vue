<template>
  <div class="search">
    <van-sticky>
    <van-search
      class="s"
      shape
      v-model="value"
      :placeholder="mess"
      input-align="left"
    />
    <!-- <span class="s-icon"><van-icon name="search" size="20"/></span> -->
    </van-sticky>
  </div>
</template>
<script>
export default {
  name: "search",
  props: ["mess"],
  // props:{
  //   mess:{
  //     type:String
  //   }
  // },
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang="less" scoped>
.search{
  // position:relative;
  .van-search__content{
    // background: red;
    border-radius:10px;
    overflow:hidden;
  }
  // .s-icon{
  //   position:absolute;
  //   top:14px;
  //   left:138px;
  // }
  .van-cell{
    display:flex;
    justify-content: center;
    align-items: center;
    // flex-grow: 0;
    /deep/ .van-cell__value{
      // background: red;
      flex-grow: 0;
      min-width:100px;
    }
    /deep/ .van-field__body{
      // width:100px;
    }
    /deep/.van-field__control{
      // width:100px;
    }
  }
}
</style>