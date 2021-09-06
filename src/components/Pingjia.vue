<template>
    <div class="box">
        <div class="pingfen">
            <div class="pf-left">
                <h3>4.7</h3>
                <h5>综合评价</h5>
                <p>高于周边商家76.9%</p>
            </div>
            <div class="pf-right">
                <p>服务态度<img src="../../public/images/xingxing.jpg"><span>4.7</span></p>
                <p>菜品评价<img src="../../public/images/xingxing.jpg"><span>4.8</span></p>
                <p>送达时间<span class="min">分钟</span></p>
            </div>
        </div>
        <div class="biaoqian">
            <ul>
                <li class="bq-sum">全部(473)</li>
                <li>满意(353)</li>
                <li class="bq-no">不满意(20)</li>
                <li>有图(2)</li>
                <li>味道好(47)</li>
                <li>送货快(32)</li>
                <li>份量足(18)</li>
                <li>包装精美(15)</li>
                <li>干净卫生(15)</li>
                <li>食材新鲜(15)</li>
                <li>服务不错(11)</li>
            </ul>
        </div>
        <div class="pinglun">
            <div class="pl-box">
                <div class="pl-tx"><img src="../../public/images/touxiang2.jpeg" ></div>
                <div class="pl-text">
                    <p>面如霜下雪<span>2021-8-23</span></p>
                    <p class="pl-xx"><img src="../../public/images/wuxing.jpg"> 按时送达</p>
                    <div class="pl-img"><img src="../../public/images/doufuc.jpg"><img src="../../public/images/fuzhu.jpg"></div>
                    <p><span>豆腐串...</span><span>炸腐竹...</span></p>
                </div>
            </div>
        </div>
        <div class="pinglun">
            <div class="pl-box">
                <div class="pl-tx"><img src="../../public/images/touxiang1.jpg" ></div>
                <div class="pl-text">
                    <p>最后的土狗<span>2021-8-22</span></p>
                    <p class="pl-xx"><img src="../../public/images/wuxing.jpg"> 按时送达</p>
                    <div class="pl-img"><img src="../../public/images/lsf.jpg"><img src="../../public/images/yufeiyan.png"></div>
                    <p><span>螺丝粉...</span><span>水煮鱼...</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.box{
    background-color: #f5f5f5;
}
.pingfen{
    width: 100%;
    height: 1.7rem;
    background-color: #fff;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.pf-left{
    width: 40%;
    height: 100%;
}
.pf-left h3{
    color: #ff6600;
    font-size: .45rem;
    margin: .2rem 0 0 0;
}
.pf-left h5{
    font-size: .27rem;
    margin: .1rem 0 0 0;
}
.pf-left p{
    color: gray;

}
.pf-right{
    width: 60%;
    height: 100%;
    text-align: left;
}
.pf-right p{
    font-size: .23rem;
    margin-top: .15rem;
}
.pf-right p>img{
    margin: 0 .3rem;
    vertical-align: middle;
}
.pf-right p>span{
    color: #ffa339;
    margin-left: .1rem;
}
.pf-right .min{
    color: gray;
    font-size: .2rem;
    margin-left: .3rem;
}
.biaoqian{
    margin-top: .2rem;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    font-size: .23rem;
}
.biaoqian ul{
    width: 90%;
    overflow: hidden;
    margin:0 5%;
    padding: 0;
    padding-bottom: .3rem;
    padding-top: .1rem;
    border-bottom: 1px solid #f1f1f1;
}
.biaoqian>ul>li{
    float: left;
    padding: .1rem;
    margin-left: 3%;
    margin-top: .15rem;
    background-color: #ebf5ff;
    border-radius: 5px;
    letter-spacing: 1px;
}
.biaoqian ul .bq-sum{
    background-color: #3190e8;
    color: white;
}
.biaoqian .bq-no{
    background-color: #f5f5f5;
    color: #b1aaaa;
}
.pinglun{
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    padding-top: .2rem;
}
.pl-box{
    width: 90%;
    height: 3.7rem;
    margin-left: 5%;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: .2rem;
}
.pl-box .pl-tx{
    float: left;
    width: 15%;  
}
.pl-box .pl-tx>img{
    width: 100%;
    border-radius:50% ; 
}
.pl-box .pl-text{
    float: right;
    width: 80%;
    height: 100%;
    text-align: left;
}
.pl-box .pl-text>p{
    margin:.1rem 0;
    font-size: .23rem;
}
.pl-box .pl-text>p:first-child{
    font-weight: bold;
}
.pl-box .pl-text>p:first-child>span{
    font-weight: 200;
    float: right;
    color: gray;
}
.pl-xx{
    color: gray;
}
.pl-xx img{
    vertical-align: middle;
}
.pl-img{
    width: 100%;
    overflow: hidden;
    margin-top: .15rem;
}
.pl-img img{
    width: 1.8rem;
    height: 1.8rem;
    margin-right: .2rem;
}
.pl-box .pl-text>p:last-child{
    margin-top: .15rem;
}
.pl-box .pl-text>p:last-child>span{
    padding: .05rem;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: .15rem;
    display: inline-block;
}
</style>