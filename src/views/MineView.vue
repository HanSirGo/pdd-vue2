<template>
  <div class="">
    <h3>MineView</h3>
    <button @click="fn">验证token</button>
    <lazy-component>
      <img v-for="img in imageList" :key="img" v-lazy="img" />
    </lazy-component>
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
export default {
  name:"mine",
  components:{
    TabBar
  },
  data () {
    return {
      imageList: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  methods:{
    fn(){}
  }
}
</script>
<style lang="less" scoped>

</style>