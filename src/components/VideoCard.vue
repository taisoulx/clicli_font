<template>
    <div class="video-card">
        <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }" class="card-content">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>{{title}}</span>
                    <div class="bottom clearfix">
                        <span>{{info}}</span>
                        <time class="time">{{ currentDate }}</time>
                    </div>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script>
export default {
    name: 'VideoCard',
    props: {
        videos: []
    }
}
</script>