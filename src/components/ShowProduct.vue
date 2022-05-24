<template>
  <div>
    <div class="item" v-for="(item, index) in products" :key="index">
      <div class="img">
        <img :src="item.img" alt="" />
      </div>
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <div class="desc">
          <span v-for="(value, index) in item.desc" :key="index">{{
            value
          }}</span>
        </div>
        <div class="p_n_icon">
          <div class="text_p">
            <div class="price">
              ￥<span>{{ item.price }}</span>
            </div>
            <div class="pin_sum">已拼{{ item.pin_sum }}件</div>
          </div>
          <div class="img">
            <img
              v-for="(value, index) in item.icon"
              :key="index"
              :src="value"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowProduct",
  props: ["products"],
};
</script>
<style lang="less" scoped>
.item {
  width:100%;
  background: #fff;
  margin-bottom: 3px;
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .text {
    padding: 8px;
    .title {
      font-size: 16px;
      color: #000;
      overflow: hidden;
      height: 18px;
      line-height: 18px;
    }
    .desc {
      font-size: 12px;
      line-height: 14px;
      color: #ccc;
      margin-top: 5px;
      span {
        margin-right: 5px;
      }
    }
    .p_n_icon {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .text_p {
        display: flex;
        align-items: flex-end;
        .price {
          font-size: 12px;
          color: #e02e24;
          font-weight: 900;
          margin-right: 3px;
          span {
            font-size: 18px;
          }
        }
        .pin_sum {
          color: #9c9c9c;
          font-size: 12px;
          white-space: nowrap;
        }
      }
      .img {
        position: relative;
        width: 30px;
        height: 20px;
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          padding: 1px;
          box-sizing: border-box;
          background: #fff;
          border-radius: 50%;
          z-index: 10;
          &:last-child {
            left: 10px;
            z-index: 8;
          }
        }
      }
    }
  }
}
</style>