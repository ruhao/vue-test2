<template>
	<div class="content">
		<Input v-model="fliter.title">
		<Button slot="append" icon="ios-search" @click="search"></Button>
		<Button type="success" slot="append" style="width: 80px;margin-left: 10px;background: lightgreen;color: white;" @click="onAdd">Add information</Button>
		<Button type="error" slot="append" style="width: 80px;margin-left: 10px;background: lightcoral;color: white;" @click='onDeletes'>Delete the selected</Button>
		</Input>

		<div class="content-body">
			<Table border :columns="columns7" :data="fliter.data6" @on-selection-change='onSelection'></Table>
		</div>
		<div class="content-foot">
			<Page :total="fliter.total" show-elevator @on-change="changePage"></Page>
		</div>
		<Modal v-model="modal6" title="留言详情" :loading="loading" @on-ok="asyncOK">
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
				<FormItem label="主题">
					<Input v-model="formValidate.title" placeholder="Enter your title"></Input>
				</FormItem>
				<FormItem label="内容">
					<Input v-model="formValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter your num"></Input>
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
						<Button type="primary" @click="handleSubmit('formValidate')">Increased</Button>
					</div>
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>
<script>
	import Common from '../common/hm.js'
	import Formimg from '../common/formimg.js'
	export default {
		mixins: [Common, Formimg],
		data() {
			return {
				type: "1",
				apimodel: 'enabout',//resful api 接口路径不同处
				cateId: "5aa88fa986b9ad13bcd34a0a",
				columns7: [{
						type: 'selection',
						width: 60,
						align: 'center'
					}, {
						title: 'Title',
						key: 'title'
					},
					{
						title: 'Publish',
						key: 'date'
					},
					{
						title: 'Operation',
						key: 'action',
						width: 150,
						align: 'center',
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'primary',
										size: 'small'
									},
									style: {
										marginRight: '5px'
									},
									on: {
										click: () => {
											this.show(params.index)
										}
									}
								}, 'Examine'),
								h('Button', {
									props: {
										type: 'error',
										size: 'small'
									},
									on: {
										click: () => {
											this.remove(params.index)
										}
									}
								}, 'Delete')
							]);
						}
					}
				],
				fliter: {
					data6: [],
					total: 0,
					limit: 12,
					page: 1,
					title: "",
					type: "1",					
				},
				ruleValidate: {
					
				},
				formValidate: {
					title:"",
					content:"",
					imgurl:"",
					type:"",
					bgimg:this.getTest() + "/avatar-culture5.jpg",
				},
				ids: []
			}
		},
		methods: {
			onSuccess(res, file) {
				if(this.formValidate.imgurl) {
				} else {
					this.formValidate.imgurl = this.getTest() + "/avatar-" + file.name
				}
			},
			del1() {
				this.formValidate.imgurl = ""
			}
		},
		created() {
			this.getData()
		}
	}
</script>
<style scoped>
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