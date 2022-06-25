<!--
 * @Author: Himawari 867415074@qq.com
 * @Date: 2022-06-24 19:57:11
 * @LastEditors: Himawari 867415074@qq.com
 * @LastEditTime: 2022-06-26 01:10:17
 * @FilePath: \vip-web-master\README.md
 * @Description:
 *
 * Copyright (c) 2022 by Himawari 867415074@qq.com, All Rights Reserved.
-->

# vip-web

## 各文件夹作用

-   api：集合了所有页面的 ajax 的请求
-   assets：所有的 css 和 img 等静态资源
-   components：单文件组件
    -   common：公共的组件，包括头、首页布局、事件路由器、侧边栏等
    -   page：各可以跳转的单文件组件
-   config：全局配置文件
-   router：实例化前端路由，包含所有可以在路由中被跳转的地址
-   utils：axios 的封装，供 api 文件夹使用
-   App.vue：其模板是被核心 Vue 挂载的，是整个单页面应用的根模板
-   main.js：核心 Vue 实例的位置，是脚手架中默认启动的入口，是整个应用的核心
