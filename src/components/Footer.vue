<template>
  <div>
    <!-- <div>{{$route}}</div> -->
    <ul id="footer" v-show="$route.meta.isturn">
        <li>
            <router-link to='/takeaway'>
                <span class="iconfont icon-eliaomo"></span>
                <div>外卖</div>
            </router-link>
        </li>
        <li>
            <router-link to="/search">
                <span class="iconfont icon-sousuo"></span>
                <div>搜索</div>
            </router-link>
        </li>
        <li>
            <router-link to="/indent">
                <span class="iconfont icon-icon-"></span>
                <div>订单</div>
            </router-link>
        </li>
        <li>
            <router-link to="/">
                <span class="iconfont icon-mine-active"></span>
                <div>我的</div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
data() {
    return {

}
},
methods:{

},
computed:{

},
mounted() {

},
}
</script>

<style scoped>
    #footer{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: .1rem;
        background-color: #fff;
        z-index: 99;
    }
    a{
        text-decoration: none;
        color: #666666;
        font-size: .2rem;
    }
</style>