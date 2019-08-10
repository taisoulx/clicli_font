<template>
    <div class="home">
        <!-- <HelloWorld msg="welcome to your world"/>  -->
    <h1>这是首页</h1>
    
    </div>
  
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue';
import * as API from '@/api/video/index.js'

export default {
    data() {
        return {
            videos:[]
        }
    },
    name:'home',
    components:{
        // HelloWorld
    },
    methods: {
        load(){
            API.getVideos().then(res=>{
            this.videos = res.data
        })
        }
    },
    beforeMount() {
        this.load()
    },

}
</script>
