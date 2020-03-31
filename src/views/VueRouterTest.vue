<template lang="pug">
    el-select(v-model="value" multiple filterable remote reserve-keyword placeholder="请输入关键词" 
    :remote-method="remoteMethod" :loading="loading" style="margin-top: 100px;" :default-first-option="true")
      el-option(v-for="item in options" :key="item.value" :label="item.label" :value="item.value")
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import API from '../api';
import { Upload } from 'element-ui';

@Component({
})
export default class VueRouterTest extends Vue {
  //按钮点击
  /* 
   formData用于上传图片
   content-type:'multipart/form-data'
   formData对象append值之后，打印不出来，可以在发送请求的时候，体现
   axios如果没有传data,则content-type，设置无效，同时content-type.length=0；
   axios设置content-type,使用axios.defaults.headers.post['Content-Type],不起作用，具体原因不太清楚
   可以使用下面的方法设置
   因为权限控制，设置Authorization,
   随图片一起上传到的数据，可以一起appendforData里面
  */
  // async btnClick(){
  //   const fileItem = document.querySelector('#fileElem');
  //   if( fileItem === null) return;
  //   const formData  = new FormData();
  //   formData.append("file", fileItem && (fileItem as any).files ? (fileItem as any).files[0] : '');
  //   formData.append("tagIds",'[]');
  //   formData.append("creatorId", '5c984456d488e2004988a986');
  //   axios.defaults.headers.common['Authorization'] = 'Bearer 575a71fa30685232fc3f3dc99ee7ef5f6d087028';
  //   const res = axios.post('main/upload',formData,{headers: {'Content-Type': 'multipart/form-data'}})
  //   // // const res = await axios({
  //   // //   method:'post',
  //   // //   url:'/main/123',
  //   // //   params:{'a':1},
  //   // //   data:{
  //   // //     'a':1
  //   // //   }
  //   // // })
  //   // console.log(res);
  // }
  //文件点击
  // fileSelect(e){
  //   const fileElem = document.getElementById("fileElem");
  //   if (fileElem) {
  //    fileElem.click();
  //  }
  //  e.preventDefault(); // 避免导航到 "#"
  // }
  // anniuTIjiao(){
  //   alert(666)
  //   const from = document.getElementById('form');
  //   console.dir(from)
  // }
 //处理文件
//  handFile(data){
//   const filesList = data.target.files;
//   const content = document.querySelector('#content');
//   if(content === null) return;
//   if(filesList.length<=0) return;
//   for(let a = 0; a < filesList.length; a++){
//     const file = filesList[a];
//     const fileReader = new FileReader();
//     const img = document.createElement('img');
//     // img.file = file;
//     // fileReader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//     // fileReader.readAsDataURL(file);
//     // img.classList.add('obj');
//     // content.appendChild(img);
//     img.src = window.URL.createObjectURL(file);
//     img.height = 60;
//     img.onload = function() {
//         window.URL.revokeObjectURL(this.src);
//      }
//       content.appendChild(img);

//   }
//  }
  private value = '';
  private loading = false;
  private options: any[] = [];
  private list: any[] = [];
  private states: string[] =  
    ["Alabama", "Alaska", "Arizona",
    "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida",
    "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana",
    "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas",
    "Utah", "Vermont", "Virginia",
    "Washington", "West Virginia", "Wisconsin",
    "Wyoming"];
  private mounted(){
    this.first();
  }
  
  private first() {
    this.list = this.states.map(item => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  }

  private remoteMethod(query: string) {
    console.log(query, '666')
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
}
</script>

<style lang='scss'>
.obj{
  width: 100px;
  height: 100px;
}
</style>