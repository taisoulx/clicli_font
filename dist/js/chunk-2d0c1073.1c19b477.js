(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1073"],{"43fd":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"标题"}},[o("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"描述"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.info,callback:function(e){t.$set(t.form,"info",e)},expression:"form.info"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即创建")])],1)],1)},i=[],l=o("76e5"),a={data:function(){return{form:{name:"",info:""}}},methods:{onSubmit:function(){var t=this;console.log("11"),l["b"](this.form).then(function(e){e.status>0?t.$notify({title:"投稿失败",message:e.msg}):t.$notify({title:"投稿成功",message:"您投稿的ID为".concat(e.data.id),type:"success"})}).catch(function(e){t.$notify({title:"网络错误或服务器宕机",message:e})})}}},r=a,s=o("2877"),f=Object(s["a"])(r,n,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c1073.1c19b477.js.map