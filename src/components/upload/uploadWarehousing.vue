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
      imgUrl: this.getTest() + "/upload/upload",
      jsonurl: "",
      alldata: [],
      UpdatedContent: [],
      fliter: {
        total: 0,
        limit: 12,
        page: 1,
        SerialNumber: []
      }
    };
  },
  methods: {
    onSuccess(res, file) {
      this.$http.get(`/api/avatar-work.json`).then(res => {
        this.alldata = res.data;
        this.AddNewData(this.alldata);
        this.Updated(this.alldata);
      });
    },
    AddNewData(allData) {
      let ii = allData.length;
      let Number = [];
      this.$http.post(this.getTest() + `/xlsx/list`).then(res => {
        let oo = res.data.rows.length;
        let uu = ii - oo;
        if (uu > 0) {
          for (let i = 0; i < uu; i++) {
            Number.push(allData[oo + i]);
          }
          let yy = Number.length;
          for (let i = 0; i < yy; i++) {
            this.$http
              .post(this.getTest() + `/xlsx/data`, Number[i])
              .then(res => {});
          }
        }
      });
    },
    Updated(allData) {
      this.UpdatedContent = [];
      let ii = allData.length;
      for (let i = 0; i < ii; i++) {
        if (allData[i].iSupdate == "是") {
          this.fliter.SerialNumber.push(allData[i].SerialNumber.toString());
          this.UpdatedContent.push(allData[i]);
        }
      }
      this.$http.post(this.getTest() + "/xlsx/list", this.fliter).then(res => {
        let uu = res.data.rows.length;
        for (let i = 0; i < uu; i++) {
          this.$http
            .put(
              this.getTest() + "/xlsx/data/" + res.data.rows[i]._id,
              this.UpdatedContent[i]
            )
            .then(res => {
            });
        }
      });
    }
  },
  created() {
  }
};
</script>