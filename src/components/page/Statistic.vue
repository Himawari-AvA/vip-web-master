<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-pie-chart"></i> 数据统计 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="schart-box">
                <div class="content-title">会员性别统计数据</div>
                <schart v-if="loading" class="schart" canvasId="pie" :options="options1"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">会员生日统计数据</div>
                <schart v-if="loading" class="schart" canvasId="line" :options="options2"></schart>
            </div>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import { getSchart1Data } from '../../api/index';
import { getSchart2Data } from '../../api/index';
import { getSchart3Data } from '../../api/index';

export default {
    name: 'basecharts',
    components: {
        Schart
    },
    data() {
        return {
            loading: false,
            options1: {
                type: 'pie',
                title: {
                    text: '会员性别统计'
                },
                bgColor: '#fbfbfb',
                labels: ['男', '女'],
                datasets: [
                    {
                        data: [234, 278]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '会员生日月份统计'
                },
                bgColor: '#fbfbfb',
                labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                datasets: [
                    {
                        label: '男',

                        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    },
                    {
                        label: '女',

                        data: [12, 11, 10, 9, 8, 9, 10, 11, 12, 5, 6, 3]
                    }
                ]
            }
        };
    },
    created() {
        this.schart1Data();
    },
    methods: {
        schart1Data() {
            getSchart1Data().then(res => {
                if (res.status == 200) {
                    // this.options1.datasets[0].data = res.data.consume;
                    // this.options1.datasets[1].data = res.data.recharge;
                    this.loading = true;
                }
            });
        }
    }
};
</script>

<style scoped>
.schart-box {
    display: inline-block;
    margin: 20px;
    /* float: left; */
}
.schart {
    width: 600px;
    height: 400px;
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
</style>
