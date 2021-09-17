<template>
    <div class="mapDiv">
        <p class="position">当前位置：{{positionText}}</p>
        <hr/>
        <div class="search">
            <span class="city">搜索：</span>
            <input type="text" v-model="searchVal" @input="getLocation" placeholder="请输入地址">
        </div>
        <ul class="area_list">
            <li v-for="(item,index) in tips"
            :key="item.id+index"
            @click="postAddRess(item)">
                <h4>{{item.district}}</h4>
                <p>{{item.name+item.address}}</p>
            </li>
        </ul>
        <p class='btn'>
            <input type="button" @click="close()" value="确认">
            <input type="button" @click="close()" value="取消">
        </p>
    </div>
</template>
 
<script>
    export default {
        props: [],
        watch: {},
        data() {
            return {
                name: "",
                positionText:'正在定位...',//当前所在位置
                tips:[],//搜索框搜索的地址
                searchVal:'',//搜索框值
            }
        },
        watch: {
            positionText() {
                this.$store.state.seat = this.positionText 
            }
        },
        created() {
            this.initGetP();
        },
        methods: {
            close() {
                this.$emit("Close");
            },
            /*
            * 初始化获取你当前的坐标位置
            * */
            initGetP(){
                let _this = this;
                AMap.plugin('AMap.Geolocation', function() {
                    var geolocation = new AMap.Geolocation({
                        // 是否使用高精度定位，默认：true
                        enableHighAccuracy: true,
                        // 设置定位超时时间，默认：无穷大
                        timeout: 10000,
                        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                        buttonOffset: new AMap.Pixel(10, 20),
                        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                        zoomToAccuracy: true,
                        //  定位按钮的排放位置,  RB表示右下
                        buttonPosition: 'RB'
                    })
 
                    geolocation.getCurrentPosition()
                    AMap.event.addListener(geolocation, 'complete', onComplete)
                    AMap.event.addListener(geolocation, 'error', onError)
 
                    function onComplete (data) {
                        // data是具体的定位信息
                        // console.log(data);
                        _this.positionText = data.formattedAddress
                    }
 
                    function onError (data) {
                        // 定位出错
                        // console.log("定位出错")
                        // console.log(data);
                    }
                })
            },
            /**
             * 搜索框搜索城市
             * */
            getLocation(){
                let val = this.searchVal;
                let _this = this;
                AMap.plugin('AMap.Autocomplete', function(){
                    // 实例化Autocomplete
                    var autoOptions = {
                        //city 限定城市，默认全国
                        city: '全国'
                    }
                    var autoComplete= new AMap.Autocomplete(autoOptions);
                    autoComplete.search(val  , function(status, result) {
                        // 搜索成功时，result即是对应的匹配数据
                        _this.tips = result.tips;//拿到搜索的数据回填到页面
                    })
                })
            },
            /**
             * 点击搜索框回填数据
             * */
            postAddRess(data){
                let str = data.district+data.address;
                this.positionText = str;
            }
        },
    }
</script>
 
<style scoped>
    .mapDiv{
        position: fixed;
        top: 1.14rem;
        height: 9.05rem;
        font-size: .28rem;
        z-index: 2;
        border-radius: .48rem;
        color: #fff;
        background: #3190e8;
        width: 85%;
        left: 50%;
        transform: translateX(-50%);
        padding: .26rem .43rem;
    }
    .mapDiv .position{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: .21rem;
    }
    .mapDiv .search {
        margin-top: .31rem;
    }
    .mapDiv .search input {
        color: #656565;
        width: 3.19rem;
        box-sizing: border-box;
        padding: .09rem 0;
        border-radius: .34rem;
        padding-left: .31rem;
        border: none;
        outline: none;
    }
    .mapDiv .area_list{
        margin-top: .34rem;
        height: 5.45rem;
        overflow: auto;
    }
    .mapDiv .area_list li{
        margin: .17rem 0;
    }
    .mapDiv .btn{
        margin-top: .26rem;
    }
    .mapDiv .btn input{
        padding: .12rem .43rem;
        border: none;
        border-radius: .34rem;
        color: #3190e8;
        outline: none;
        margin: 0 .26rem;
        background: #fff;
    }
</style>