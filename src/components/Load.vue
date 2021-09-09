<template>
    <div class="Load">
        <img src="../../public/images/加载图.gif" alt="">
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
    .Load{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #e9f70a;
        height: 100%;
        z-index: 999;
    }
    .Load img{
        width: 100%;
        height: 100%;
    }
</style>