<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-pie-chart"></i> 数据统计 </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="schart-box">
                <div class="content-title">会员性别数据统计</div>
                <schart v-if="loading" class="schart" canvasId="pie" :options="options1"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">会员生日数据统计</div>
                <schart v-if="loading" class="schart" canvasId="line" :options="options3"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">会员生日数据统计</div>
                <schart v-if="loading" class="schart" canvasId="bar" :options="options2"></schart>
            </div>
        </div>
    </div>
</template>

<script>
import Schart from 'vue-schart';
import { memberData } from '../../api/index';
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
            memberData: [],
            birthdayData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            birthdayMaleData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            birthdayFemaleData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            male: 0,
            female: 0,
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
                        // label: '男',
                        label: '总计',
                        data: []
                    }
                    // {
                    //     label: '男',

                    //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                    // },
                    // {
                    //     label: '女',

                    //     data: [12, 11, 10, 9, 8, 9, 10, 11, 12, 5, 6, 3]
                    // }
                ]
            },
            options3: {
                type: 'bar',
                title: {
                    text: '会员生日月份统计'
                },
                bgColor: '#fbfbfb',
                labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                datasets: [
                    // {
                    //     label: '总计',
                    //     data: []
                    // }
                    {
                        label: '男',
                        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                        data: []
                    },
                    {
                        label: '女',
                        // data: [12, 11, 10, 9, 8, 9, 10, 11, 12, 5, 6, 3]
                        data: []
                    }
                ]
            }
        };
    },
    created() {
        // this.schart1Data();
        this.getMemberData();
    },
    methods: {
        getMemberData() {
            memberData(this.query).then(res => {
                this.memberData = res.data.list;
                this.pageTotal = res.data.pageTotal || 50;
                this.loading = true;
                this.handleData();
            });
        },
        handleData() {
            // console.log('拿到数据了！！！！！！');
            // // this.male = 20;
            // console.log(this.memberData[0].sex);
            // console.log(this.memberData.length);
            // for (let i = 0; i < 10; i++) {
            //     this.male++;
            //     this.female++;
            // }
            for (let i = 0; i < this.memberData.length; i++) {
                if (this.memberData[i].sex == '男') this.male++;
                if (this.memberData[i].sex == '女') this.female++;
                // console.log(this.memberData[i].birthday.includes('-04-'));
                if (this.memberData[i].birthday.includes('-01-')) {
                    this.birthdayData[0]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[0]++;
                    else this.birthdayFemaleData[0]++;
                }
                if (this.memberData[i].birthday.includes('-02-')) {
                    this.birthdayData[1]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[1]++;
                    else this.birthdayFemaleData[1]++;
                }
                if (this.memberData[i].birthday.includes('-03-')) {
                    this.birthdayData[2]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[2]++;
                    else this.birthdayFemaleData[2]++;
                }
                if (this.memberData[i].birthday.includes('-04-')) {
                    this.birthdayData[3]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[3]++;
                    else this.birthdayFemaleData[3]++;
                }
                if (this.memberData[i].birthday.includes('-05-')) {
                    this.birthdayData[4]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[4]++;
                    else this.birthdayFemaleData[4]++;
                }
                if (this.memberData[i].birthday.includes('-06-')) {
                    this.birthdayData[5]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[5]++;
                    else this.birthdayFemaleData[5]++;
                }
                if (this.memberData[i].birthday.includes('-07-')) {
                    this.birthdayData[6]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[6]++;
                    else this.birthdayFemaleData[6]++;
                }
                if (this.memberData[i].birthday.includes('-08-')) {
                    this.birthdayData[7]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[7]++;
                    else this.birthdayFemaleData[7]++;
                }
                if (this.memberData[i].birthday.includes('-09-')) {
                    this.birthdayData[8]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[8]++;
                    else this.birthdayFemaleData[8]++;
                }
                if (this.memberData[i].birthday.includes('-10-')) {
                    this.birthdayData[9]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[9]++;
                    else this.birthdayFemaleData[9]++;
                }
                if (this.memberData[i].birthday.includes('-11-')) {
                    this.birthdayData[10]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[10]++;
                    else this.birthdayFemaleData[10]++;
                }
                if (this.memberData[i].birthday.includes('-12-')) {
                    this.birthdayData[11]++;
                    if (this.memberData[i].sex == '男') this.birthdayMaleData[11]++;
                    else this.birthdayFemaleData[11]++;
                }
                // this.female = this.female + 1;
            }

            this.putInData();
        },
        putInData() {
            this.options1.datasets[0].data[0] = this.male;
            this.options1.datasets[0].data[1] = this.female;
            this.options2.datasets[0].data = this.birthdayData;
            this.options3.datasets[0].data = this.birthdayMaleData;
            this.options3.datasets[1].data = this.birthdayFemaleData;
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
