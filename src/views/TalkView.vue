<template>
  <div class="">
    <h3>TalkView</h3>
    <div class="wrapper" style="height:200px;border:1px solid #f00;overflow:hidden" ref="wrapper">
      <div class="content">
        <div v-for="item in pros" :key="item.text">{{item.text}}</div>
      </div>
    </div>
    <tab-bar/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'
import instance from '@/api/api'
import BScroll from 'better-scroll';
export default {
  name:"talk",
  components:{
    TabBar
  },
  data () {
    return {
      pros:[]
    }
  },
  methods:{
    async getdata(){
      let {data} = await instance('/type')
      console.log(data);
      this.pros = data
    }
  },
  watch: {
    pros(){
      this.$nextTick(function () {
        this.scroll.refresh()
      })
    }
  },
  created () {
    this.getdata()
  },
  mounted () {
    this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
  },
}
</script>
<style lang="less" scoped>

</style>