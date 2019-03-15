<template>
  <div>
    <el-dialog title='提示' :visible.sync='dialogVisible' width='30%' :before-close='handleClose' :modal-append-to-body='false'>
      <div>
        <el-form :model='formData' status-icon ref='formData' label-width='100px' class='demo-ruleForm'>
          <el-form-item label='姓名 :' prop='name'>
            <el-input type='text' :disabled='readonly' v-model='formData.name' autocomplete='off'></el-input>
          </el-form-item>
          <el-form-item label="描述 :" prop="label">
            <el-input type="text" :disabled="readonly" v-model="formData.label" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="标签 :" prop="description">
            <el-input type="text" :disabled="readonly" v-model.number="formData.description"></el-input>
          </el-form-item>
          <el-form-item v-if="!readonly">
            <el-button type='primary' @click="submitForm('formData')" id='btn'>提交</el-button>
            <el-button @click="resetForm('formData')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<style>
</style>
<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ElButton } from 'element-ui/types/button';
import { ElForm } from 'element-ui/types/form';
@Component({
  components: {}
})
export default class TagController extends Vue {
  dialogVisible = false;
  readonly = false;
  formData = {
    name: '',
    label: '',
    description: '',
    index: '',
    Id: '',
    parentId: ''
  };

  public async mounted() {}

  created() {}

  show(data:any) {
    if (!data.row) {
      data.row = { name: '', label: '', description: '', Id: '', parentId: '' };
    }
    this.dialogVisible = true;
    this.formData.name = data.row.name;
    this.formData.label = data.row.label;
    this.formData.description = data.row.description;
    this.formData.Id = data.row.Id;
    this.formData.parentId = data.row.parentId;
    this.formData.index = data.index;
    if (data.readonly) {
      this.readonly = true;
    } else {
      this.readonly = false;
    }
  }

  handleClose(done:any) {
    done();
  }

  resetForm(formName:any) {
    const formData = this.formData;
    for (var k in formData) {
      (this as any).formData[k] = '';
    }
  }
  
  submitForm(formName:any) {
    (this.$refs[formName] as ElForm).validate(valid => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
    this.$emit('echo', this.formData);
    this.dialogVisible = false;
  }
}
</script>


