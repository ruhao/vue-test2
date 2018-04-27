<template>
	<div class="product">
		<div class="product-left">
        <p class="pp" @click="GETONE('1')">A~G</p>
        <br/>
        <br/>
        <p class="pp"  @click="GETONE('2')">H~N</p>
        <br/>
        <br/>
        <p class="pp"  @click="GETONE('3')">O~T</p>
        <br/>
        <br/>
        <p class="pp"  @click="GETONE('4')">U~Z</p>
        <br/>
        <br/>
        <p class="pp"  @click="GETONE('5')">other</p>
		</div>
		<div class="product-right">
			<Input v-model="fliter.name">
			<Button slot="append" icon="ios-search" @click="search"></Button>
			<Button type="success" slot="append" style="width: 120px;margin-left: 2px;background: lightgreen;color: white;" @click="onAdd">Add information</Button>
			<Button type="error" slot="append" style="width: 140px;margin-left: 2px;background: lightcoral;color: white;" @click='onDeletes'>Delete the selected</Button>
			</Input>

			<div class="content-body">
				<Table border :columns="columns7" :data="fliter.data6" @on-selection-change='onSelection'></Table>
			</div>
			<div class="content-foot">
				<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
			</div>
			<Modal v-model="modal6" title="Cooperation brand" :loading="loading" @on-ok="asyncOK">
				<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
					<FormItem label="Brand name">
						<Input v-model="formValidate.name" placeholder="Enter your name"></Input>
					</FormItem>
          <FormItem label="details">
						<Input v-model="formValidate.detail" placeholder="Enter your detail"></Input>
					</FormItem>
          <FormItem label="prioritize">
						<Input v-model="formValidate.isfisrt" placeholder="Enter your isfisrt"></Input>
					</FormItem>
					<Upload multiple type="drag" name='avatar' :action="imgUrl" :on-success="onSuccess">
						<div style="padding: 20px 0">
							<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
							<p>Click or drag the file here to upload.</p>
						</div>
					</Upload>
					<FormItem>
						<div class="madelbox">
							<div v-if="formValidate.imgurl" class="madelbox1">
								<span class="control1" @click="del1">X</span>
								<img :src="formValidate.imgurl">
							</div>
						</div>
					</FormItem>
					<FormItem>
						<div v-if="formValidate.type">
							<Button type="primary" @click="handleUpdate('formValidate')">Modify</Button>
						</div>
						<div v-else>
							<Button type="primary" @click="handleSubmit1('formValidate')">Increased</Button>
						</div>
					</FormItem>
				</Form>
			</Modal>
		</div>
	</div>
</template>

<script>
import Common from "../common/hm.js";
import Formimg from "../common/formimg.js";
export default {
  mixins: [Common, Formimg],
  data() {
    return {
      cateId: '5aa88ff986b9ad13bcd34a0d',
      type: "",
      apimodel: "enbrand",
      columns7: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "Brand name",
          align: "center",
          key: "name"
        },
        {
          title: "Operation",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "Examine"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "Delete"
              )
            ]);
          }
        }
      ],
      fliter: {
        data6: [],
        total: 0,
        limit: 12,
        page: 1,
        name: "",
        type: "",
        cateId: []
      },
      ruleValidate: {},
      formValidate: {
        name: "",
        type:"",
        imgurl:"",
        detail:"",
        isfisrt:""
      }
    };
  },
  methods: {
    onSuccess(res, file) {
      if (this.formValidate.imgurl) {
      } else {
        this.formValidate.imgurl = this.getTest() + "/avatar-" + file.name;
      }
    },
    del1() {
      this.formValidate.imgurl = "";
    },
    gettype(value) {
        let aa = "abcdefg"
        let bb = "hijklmn"
        let cc = "opqrst"
        let dd = "uvwxyz"
        let ff = value.toLowerCase()
        let gg = ff.substr(0, 1)
        if(aa.indexOf(gg)!=-1){
          this.formValidate.type = 1
        }
        if(bb.indexOf(gg)!=-1){
          this.formValidate.type = 2
        }
        if(cc.indexOf(gg)!=-1){
          this.formValidate.type = 3
        }
        if(dd.indexOf(gg)!=-1){
          this.formValidate.type = 4
        }
        if(!this.formValidate.type){
          this.formValidate.type = 5
        }
    },
    GETONE(value){
      this.fliter.type=value
      this.getData()
    },
    handleSubmit1() {
            this.gettype(this.formValidate.name)
            this.formValidate.cateId = this.cateId
            this.formValidate.date = new Date()
            //把cateID,type分类，时间更新等附加上去
            this.$http.post( this.getTest() + "/brand/data", this.formValidate).then(res => {
                this.getData()
                this.modal6 = false;
                this.formValidate.type = "";
            })
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 100%;
  display: flex;
}

.product-left {
  width: 250px;
  border-right: 1px #cccccc solid;
  overflow: scroll;
}

.pp{
  font-weight: 600;
  cursor: pointer;
}

.product-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-body {
  flex: 1;
  margin-top: 20px;
}

.content-foot {
  height: 50px;
  text-align: center;
}

.message-date {
  min-height: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}

.message-date div:nth-of-type(1) {
  text-align: center;
  margin-top: 20px;
  height: 30px;
  font-size: 22px;
  font-weight: 600;
  text-shadow: 1px 1px 1px #999999;
}

.message-date div:nth-of-type(2) {
  text-align: left;
  text-indent: 2em;
  flex: 1;
  margin-top: 30px;
  color: black;
}

.bottom {
  width: 250px;
  margin-left: 300px;
  height: 20px;
  text-align: left;
  margin-top: 5px;
}

.madelbox {
  height: 80px;
  margin-top: 10px;
  display: flex;
  width: 400px;
}

.madelbox img {
  height: 100%;
}

.madelbox1 {
  width: 80px;
  margin-left: 10px;
  position: relative;
  overflow: hidden;
}

.control1 {
  position: absolute;
  right: 5px;
  top: -5px;
  cursor: pointer;
}

.control1:hover {
  color: red;
}
</style>