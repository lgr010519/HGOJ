<template>
  <div>
    <el-card>
      <el-form ref="form" label-width="150px" :model="formData" :rules="rules">
        <el-form-item label="Title" prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="Time limit" prop="time">
          <el-input v-model="formData.time"></el-input>
        </el-form-item>
        <el-form-item label="Memory limit" prop="memory">
          <el-input v-model="formData.memory"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <!-- 富文本编辑器组件 -->
          <quill-editor v-model="formData.description" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="Input" prop="input">
          <quill-editor v-model="formData.input" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="Output" prop="output">
          <quill-editor v-model="formData.output" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="Sample input" prop="sampleInput">
          <quill-editor v-model="formData.sampleInput" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="Sample output" prop="sampleOutput">
          <quill-editor v-model="formData.sampleOutput" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="Special judge" prop="spj">
          <el-select placeholder="请选择" v-model="formData.spj">
            <el-option label="N" :value="0">
            </el-option>
            <el-option label="Y" :value="1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Hint" prop="hint">
          <quill-editor v-model="formData.hint" class="quill-editor"></quill-editor>
        </el-form-item>
        <el-form-item label="上传测试数据" prop="fileName">
          <el-upload class="upload-demo" :action="`${$host}${$port}/admin/upload`" :before-remove="beforeRemove" multiple :file-list="fileList" :on-success="uploadSuccess">
            <el-button size="small" type="primary">上传压缩文件（zip压缩文件）</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addProblem">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AddProblems',
  data() {
    return {
      formData: {
        title: '',
        time: 1,
        memory: 128,
        description: '',
        input: '',
        output: '',
        sampleInput: '',
        sampleOutput: '',
        spj: 'N',
        hint: '',
        fileName: '',
      },
      fileList: [],
      rules: {
        title: [{
          required: true,
          message: '请输入title',
          trigger: 'blur'
        }],
        time: [{
          required: true,
          message: '请输入time',
          trigger: 'blur'
        }],
        description: [{
          required: true,
          message: '请输入description',
          trigger: 'blur'
        }],
        input: [{
          required: true,
          message: '请输入input',
          trigger: 'blur'
        }],
        output: [{
          required: true,
          message: '请输入output',
          trigger: 'blur'
        }],
        sampleInput: [{
          required: true,
          message: '请输入sampleInput',
          trigger: 'blur'
        }],
        sampleOutput: [{
          required: true,
          message: '请输入sampleOutput',
          trigger: 'blur'
        }],
        spj: [{
          required: true,
          message: '请输入spj',
          trigger: 'blur'
        }],
        hint: [{
          required: true,
          message: '请输入hint',
          trigger: 'blur'
        }],
        memory: [{
          required: true,
          message: '请输入memory',
          trigger: 'blur'
        }],
        fileName: [{
          required: true,
          message: '请上传文件',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    uploadSuccess(response) {
      this.formData.fileName = response.key + response.fileName
    },
    addProblem() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          let result = await this.$API.addProblems.reqAddProblem(this.formData)
          console.log(result);
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
.quill-editor {
  width: 1500px;
  height: 250px;
  margin-bottom: 60px;
}
</style>
