<template lang="pug">
  div#app
    v-header(:seller="seller")
    div.tab.border-1px
      router-link.tab-item(to="goods", tag="div") 商品
      router-link.tab-item(to="ratings",tag="div") 评论
      router-link.tab-item(to="seller",tag="div") 商家
    keep-alive
      router-view(:seller="seller") 
</template>

<script type="ecmascript-6">
import {urlParse} from 'common/js/util'
import vHeader from 'components/header/vHeader'
const   ERR_OK = 0

export default {
  data() {
    return {
      seller: {
        id: (()=> {
          let queryParam = urlParse()
          console.log(queryParam)
          return queryParam.id
        })
      }
    }
  },
  created() {
    this.$http.get('/api/seller?id='+this.seller.id).then((response) => {
      response = response.body;
      if(response.errno === ERR_OK){
         this.seller = Object.assign({}, this.seller, response.data)
         
      }
    })
  },
  name: 'app',
  components: {
    vHeader
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
     @import 'common/stylus/mixin.styl'
     .tab
       display: flex
       width: 100%
       height: 40px
       line-height: 40px
       border-1px(rgba(7,17,27,0.1))
       .tab-item
          flex: 1
          text-align: center
          display:block
          font-size:14px
          color:rgb(77,85,93)
          &.router-link-exact-active
            color:rgb(240,20,20)
</style>
