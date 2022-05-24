<template>
  <div class="home">
    <Search :mess="mess" />
    <van-tabs @click="onClick">
      <van-tab v-for="(item, index) in nav" :title="item.title" :key="index">
        <div class="content">
          <!-- 推荐 -->
          <div v-if="index == 0">
            <!-- 分类 -->
            <div class="tui-top">
              <van-grid square :border="false" column-num="6">
                <van-grid-item
                  v-for="value in alltypes"
                  :key="value.id"
                  :icon="value.img"
                  :text="value.title"
                />
              </van-grid>
            </div>
            <div class="products">
              <div class="pro-left">
                <ShowProduct :products="products.filter((item,index)=>index%2==0)"/>
              </div>
              <div class="pro-right">
                <ShowProduct :products="products.filter((item,index)=>index%2!=0)"/>
              </div>
            </div>
          </div>
          <!-- 其他的 -->
          <div v-else>
            <!-- 分类 -->
            <div class="grid">
              <van-grid :column-num="5" :border="false">
                <!-- length == 9 有 展开全部 按钮-->
                <template v-if="alltypes.length == 9">
                  <van-grid-item
                    v-for="(item, index) in alltypes"
                    :key="index"
                    :icon="item.img"
                    :text="item.title"
                  />
                  <van-grid-item
                    icon="add-o"
                    text="展开全部"
                    @click="openall"
                  />
                </template>
                <!-- length == 10 无 展开全部 按钮-->
                <template v-else-if="alltypes.length == 10">
                  <van-grid-item
                    v-for="(item, index) in alltypes"
                    :key="index"
                    :icon="item.img"
                    :text="item.title"
                  />
                </template>
                <!-- length > 10 收起 按钮-->
                <template v-else>
                  <van-grid-item
                    v-for="(item, index) in alltypes"
                    :key="index"
                    :icon="item.img"
                    :text="item.title"
                  />
                  <van-grid-item icon="close" text="收起" @click="closesome" />
                </template>
              </van-grid>
            </div>
            <!-- 排行 -->
            <div class="paihang">
              <van-grid direction="horizontal" :column-num="2" :border="false">
                <van-grid-item v-for="(item, index) in paihang" :key="index">
                  <template #default>
                    <div class="text">
                      <div class="title">
                        <img v-if="index == 0" :src="item.title_icon" alt="" />
                        <span>{{ item.title }}</span>
                      </div>
                      <div class="text_n">{{ item.text }}</div>
                    </div>
                    <div
                      class="img"
                      v-for="(el, index) in item.imgs"
                      :key="index"
                    >
                      <img :src="el" alt="" />
                    </div>
                  </template>
                </van-grid-item>
              </van-grid>
            </div>
            <!-- 商品 -->
            <div class="products">
              <div class="pro-left">
                <ShowProduct :products="products.filter((item,index)=>index%2==0)"/>
              </div>
              <div class="pro-right">
                <ShowProduct :products="products.filter((item,index)=>index%2!=0)"/>
              </div>
            </div>
          </div>
        </div>
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
import ShowProduct from '@/components/ShowProduct.vue'
export default {
  name: "HomeView",
  components: {
    TabBar,
    Search,
    ShowProduct
  },
  data() {
    return {
      mess: "首页搜索",
      nav:[],//tabs
      tabindex: 0, //选中 tab 的索引
      alltypes: [], //选中tab 的 分类
      paihang: [], //排行
      products: [], //商品
    };
  },
  created() {
    this.getdata()       
  },
  methods: {
    onClick(index, name) {
      // console.log(index);
      this.tabindex = index;
      this.products = this.nav[index].products;
      if (index != 0) {
        this.paihang = this.nav[index].top;
        if (this.nav[index].types.length > 10) {
          this.alltypes = this.nav[index].types.slice(0, 9);
        } else {
          this.alltypes = this.nav[index].types;
        }
      } else {
        this.alltypes = this.nav[index].types;
      }
    },
    openall() {
      //展开全部
      this.alltypes = this.nav[this.tabindex].types;
    },
    closesome() {
      //收起
      this.alltypes = this.nav[this.tabindex].types.slice(0, 9);
    },
    async getdata(){
      let {data} = await instance.get('/getnav')
      console.log(data);
      this.nav = data
      this.alltypes = this.nav[this.tabindex].types;
      this.products = this.nav[this.tabindex].products; 
    }
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
          scrollbar-width: 120px;
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
            padding: 6px 0;
            background-color: #fff;
            .van-grid-item {
              .van-grid-item__content {
                padding: 0;
                .van-grid-item__icon {
                  width: 40px;
                  height: 40px;
                  .van-icon__image {
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
    .grid {
      .van-grid {
        background-color: #fff;
        padding: 6px 0;
        .van-grid-item {
          .van-grid-item__content {
            padding: 0;
            padding-top: 6px;
            .van-grid-item__icon {
              width: 56px;
              height: 56px;
              &.van-icon-add-o,
              &.van-icon-close {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .van-icon__image {
                width: 100%;
                height: 100%;
              }
            }
            .van-grid-item__text {
              margin: 0;
            }
          }
        }
      }
    }
    .paihang {
      margin: 8px 0;
      .van-grid {
        background: #fff;
        padding: 12px 0;
        .van-grid-item {
          height: 36px;
          &:first-child {
            border-right: 0.5px solid #ddd;
          }
          .van-grid-item__content {
            padding: 0 10px;
            justify-content: space-around;
            .text {
              .title {
                font-size: 14px;
                color: #000;
                img {
                  width: 15px;
                  height: 15px;
                  margin-right: 5px;
                }
              }
              .text_n {
                color: #ddd;
                font-size: 12px;
                margin-top: 5px;
              }
            }
            .img {
              img {
                width: 36px;
                height: 36px;
              }
            }
          }
        }
      }
    }
    .products {
      display: flex;
      justify-content: space-between; 
      .pro-left{     
        flex:1;
        margin-right: 3px;
      }
      .pro-right{
        flex:1;
      }
    }
    .content {
      background-color: #f4f4f4;
    }
  }
}
</style>