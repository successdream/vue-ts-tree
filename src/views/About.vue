<template>
  <div class="about">
    <h1>{{add}}</h1>
  </div>
</template>
<style>


</style>
<script lang='ts'>
   import { Component, Vue } from "vue-property-decorator";
   import {State,Getter,Action,Mutation,namespace} from 'vuex-class';
   @Component
   export default class About extends Vue {

    
    get add(){
        return this.$store.state.login
    }


     async created(){
        
         try{
           await this.$axios.get('/user/user/'); 
         }catch(err){
             
         }
     }

   }

</script>


