<template>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>

  <el-form-item label="描述">
    <el-input type="textarea" v-model="form.info"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
</template>

<script>

import * as API from '@/api/video/'
export default {
    data() {
      return {
        form: {
          name: '',
          info:'',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('11')
        API.postVideo(this.form).then((res)=>{
            if (res.status > 0) {
                this.$notify({
                title:'投稿失败',
                message:res.msg
                })
            } else {
                this.$notify({
                title:'投稿成功',
                message:`您投稿的ID为${res.data.id}`,
                type:'success'
                })
            }
        }).catch((error)=>{
                    this.$notify({
                        title:'网络错误或服务器宕机',
                        message:error
                    })
                })
      }
    }
}
</script>