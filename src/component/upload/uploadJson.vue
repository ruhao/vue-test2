<template>
	<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
		<div style="padding: 20px 0">
			<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
			<p>点击或将文件拖拽到这里上传</p>
		</div>
	</Upload>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: this.getTest() + '/upload/upload',
      jsonurl: ''
    };
  },
  methods: {
    onSuccess(res, file) {
      this.jsonurl = this.getTest() + '/avatar-'+file.name
      console.log(file)
      this.$http.get(this.jsonurl).then(res => {
        console.log(res)
      })
    }
  }
};
</script>