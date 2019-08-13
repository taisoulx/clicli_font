<template>
    <div class="home">
        <!-- <HelloWorld msg="welcome to your world"/>  -->
        <h1>这是首页</h1>
        <!-- <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, index) in videos" :key="index">
                        <el-card :body-style="{ padding: '0px' }" class="card-content">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            <div style="padding: 14px;">
                                <span>{{item.title}}</span>
                                <div class="bottom clearfix">
                                    <span>{{item.info}}</span>
                                    <time class="time">{{ currentDate }}</time>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
            
                </el-row> -->
    
        <el-row :gutter="20">

                <VideoCard v-for="item in videos" v-bind:key="item.id" v-bind:title="item.title" v-bind:info="item.info"></VideoCard>

        </el-row>
    
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import * as API from '@/api/video/index.js'
import VideoCard from '@/components/VideoCard.vue';


export default {
    data() {
        return {
            videos: []
        }
    },
    name: 'home',
    components: {
        // HelloWorld
        VideoCard
    },
    methods: {
        load() {
            API.getVideos().then(res => {
                this.videos = res.data
            })
        }
    },
    beforeMount() {
        this.load()
    },

}
</script>

<style lang="css">
.card-content {
    margin: 0 auto;
}
</style>