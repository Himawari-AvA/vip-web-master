<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-06-24 19:57:11
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-06-25 14:25:10
 * @FilePath: \vip-web-master\src\components\page\404.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved. 
-->
<template>
    <div class="error-page">
        <div class="error-code">4<span>0</span>4</div>
        <div class="error-desc">您所访问的页面不存在</div>
        <div class="error-handle">
            <router-link to="/homepage">
                <el-button type="primary" size="large">返回首页</el-button>
            </router-link>
            <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            //返回上一次打开的页面
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #f3f3f3;
    box-sizing: border-box;
}
.error-code {
    line-height: 1;
    font-size: 250px;
    font-weight: bolder;
    color: #2d8cf0;
}
.error-code span {
    color: #00a854;
}
.error-desc {
    font-size: 30px;
    color: #777;
}
.error-handle {
    margin-top: 30px;
    padding-bottom: 200px;
}
.error-btn {
    margin-left: 100px;
}
</style>
