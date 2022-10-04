<template>
  <div>
    <!-- //div1用来承载富文本编辑器 -->
    <div id="div1"></div>
    <!-- //按钮用来数据的转换 -->
    <!-- <button @click='syncHTML'>同步内容</button> -->
    <!-- //展示被富文本编辑器编辑后的结果，用于存入数据库 -->
    <!-- <textarea cols="170" rows="20" readonly v-model="textvalue"></textarea> -->
    <!-- //再次展示时应该按富文本展示 -->
    <!-- <div v-html="textvalue"> -->
    <!-- </div> -->
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'WangEdit',
  data() {
    return {
      editor: null,
      textvalue: ''
    }
  },
  mounted() {
    this.editor = new E('#div1')
    this.editor.config.onchange = (newHtml) => {
      this.textvalue = newHtml
    }
    this.editor.create()
  },
  methods: {
    syncHTML() {
      console.log(this.textvalue)
      this.showHtml(this.textvalue)
    },
    showHtml(str) {
      return str
        .replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'")
        .replace(/&amp;nbsp;/g, '\u3000')
    }
  }
}
</script>
