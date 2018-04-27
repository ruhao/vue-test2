<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}

.layout-rightbody {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.layout-content {
  flex: 1;
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
  height: 100%;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
}

.ivu-row-flex {
  height: 100%;
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.layout-hide-text .layout-text {
  height: 100%;
  display: none;
}

.ivu-col {
  transition: width 0.2s ease-in-out;
}

.titlestyle {
  text-align: center;
  flex: 1;
  line-height: 60px;
  font-size: 36px;
  font-weight: bold;
}

.submit {
  height: 100%;
  width: 100%;
  text-align: center;
  padding-top: 450px;
  background: rgba(0, 0, 0, 0.2);
}

.allweb {
  height: 100%;
  width: 100%;
  background: url("http://47.98.51.142:80/avatar-bici.png") center -250px no-repeat;
  background-color: black;
}

.allbody {
  height: 100%;
  width: 100%;
}

.systembody {
  height: 100%;
  width: 100%;
}
</style>
<template>
	<div class="allbody">
		<div v-if="login" class="systembody">
			<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
				<Row type="flex">
					<i-col :span="spanLeft" class="layout-menu-left">
						<Menu active-key="1" theme="dark" width="auto">
							<div class="layout-logo-left"></div>
							<div v-if="login=='all'">
								<Submenu name="9">
									<template slot="title">
										<Icon type="magnet"></Icon>
										关于我们

									</template>
									<MenuItem name="9-1">
									<Icon type="android-people"></Icon>
									<router-link to='/about/aboutculture' tag='span'>企业文化</router-link>
									</MenuItem>
									<MenuItem name="9-3">
									<Icon type="android-people"></Icon>
									<router-link to='/about/enaboutculture' tag='span'>Culture</router-link>
									</MenuItem>
									<MenuItem name="9-2">
									<Icon type="android-people"></Icon>
									<router-link to='/about/abouthonor' tag='span'>企业荣誉</router-link>
									</MenuItem>
									<MenuItem name="9-4">
									<Icon type="android-people"></Icon>
									<router-link to='/about/enabouthonor' tag='span'>Honor</router-link>
									</MenuItem>
								</Submenu>
								<Submenu name="2">
									<template slot="title">
										<Icon type="lock-combination"></Icon>
									   	产品业务
									  </template>
								<Menu-item name="2-1">
									<Icon type="ios-navigate"></Icon>
									<router-link to='/product' tag='span'>产品模块</router-link>
								</Menu-item>
								<Menu-item name="2-2">
									<Icon type="ios-navigate"></Icon>
									<router-link to='/enproduct' tag='span'>Product</router-link>
								</Menu-item>
								<Menu-item name="2-3">
									<Icon type="lock-combination"></Icon>
									<router-link to='/brand' tag='span'>合作品牌</router-link>
								</Menu-item>
								<Menu-item name="2-4">
									<Icon type="lock-combination"></Icon>
									<router-link to='/enbrand' tag='span'>Brand</router-link>
								</Menu-item>
								</Submenu>
								<Submenu name="10">
									<template slot="title">
										<Icon type="ios-world-outline"></Icon>
									   	营销网络
									  </template>
								<Menu-item name="10-1">
									<Icon type="ios-world-outline"></Icon>
									<router-link to='/intmarket' tag='span'>营销网络</router-link>
								</Menu-item>
								<Menu-item name="10-2">
									<Icon type="ios-world-outline"></Icon>
									<router-link to='/enintmarket' tag='span'>Marketing network</router-link>
								</Menu-item>
								</Submenu>
								<Submenu name="3">
									<template slot="title">
										<Icon type="ios-reverse-camera"></Icon>
										最新新闻
									</template>
									<MenuItem name="3-1">
									<Icon type="ios-copy-outline"></Icon>
									<router-link to='/news/companynews' tag='span'>公司新闻</router-link>
									</MenuItem>
									<MenuItem name="3-5">
									<Icon type="ios-copy-outline"></Icon>
									<router-link to='/ennews/encompanynews' tag='span'>Company news</router-link>
									</MenuItem>
									<MenuItem name="3-2">
									<Icon type="videocamera"></Icon>
									<router-link to='/news/industrydynamics' tag='span'>行业动态</router-link>
									</MenuItem>
									<MenuItem name="3-6">
									<Icon type="videocamera"></Icon>
									<router-link to='/ennews/enindustrydynamics' tag='span'>Industry dynamic</router-link>
									</MenuItem>
									<MenuItem name="3-3">
									<Icon type="images"></Icon>
									<router-link to='/news/companyphotos' tag='span'>公司照片</router-link>
									</MenuItem>
									<MenuItem name="3-7">
									<Icon type="images"></Icon>
									<router-link to='/ennews/encompanyphotos' tag='span'>The company photos</router-link>
									</MenuItem>
									<MenuItem name="3-4">
									<Icon type="ios-color-wand"></Icon>
									<router-link to='/news/marketing' tag='span'>营销活动</router-link>
									</MenuItem>
									<MenuItem name="3-8">
									<Icon type="ios-color-wand"></Icon>
									<router-link to='/ennews/enmarketing' tag='span'>Marketing activities</router-link>
									</MenuItem>
								</Submenu>
									<Submenu name="4">
									<template slot="title">
										<Icon type="ios-reverse-camera"></Icon>
										上传模块
									</template>
									<Menu-item name="4-1">
									<Icon type="edit"></Icon>
									<router-link to='/upload' tag='span'>上传图片</router-link>
									</Menu-item>
									<Menu-item name="4-2">
									<Icon type="edit"></Icon>
									<router-link to='/jsonupload' tag='span'>上传物流</router-link>
									</Menu-item>
									<Menu-item name="4-3">
									<Icon type="edit"></Icon>
									<router-link to='/jsonupload' tag='span'>上传仓储</router-link>
									</Menu-item>
								</Submenu>
								<Menu-item name="5">
									<Icon type="ios-copy-outline"></Icon>
									<router-link to='/kind' tag='span'>分类模块</router-link>
								</Menu-item>
								<Submenu name="7">
									<template slot="title">
										<Icon type="ios-people"></Icon>
										人力资源

									</template>
									<MenuItem name="7-1">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/strategy' tag='span'>人才战略</router-link>
									</MenuItem>
									<MenuItem name="7-4">
									<Icon type="android-people"></Icon>
									<router-link to='/enhr/enstrategy' tag='span'>Talent strategy</router-link>
									</MenuItem>
									<MenuItem name="7-5">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/train' tag='span'>人才培训</router-link>
									</MenuItem>
									<MenuItem name="7-2">
									<Icon type="android-people"></Icon>
									<router-link to='/enhr/entrain' tag='span'>Personnel training</router-link>
									</MenuItem>
									<MenuItem name="7-7">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/advertises' tag='span'>人才招聘</router-link>
									</MenuItem>
									<MenuItem name="7-3">
									<Icon type="android-people"></Icon>
									<router-link to='/enhr/enadvertises' tag='span'>Recruitment</router-link>
									</MenuItem>
								</Submenu>
								<Submenu name="8">
									<template slot="title">
										<Icon type="ios-email-outline"></Icon>
										在线留言
									</template>
								<Menu-item name="8-1">
									<Icon type="ios-email-outline"></Icon>
									<router-link to='/message' tag='span'>留言模块</router-link>
								</Menu-item>
								<Menu-item name="8-2">
									<Icon type="ios-email-outline"></Icon>
									<router-link to='/enmessage' tag='span'>Message</router-link>
								</Menu-item>
								</Submenu>
							</div>
							<!-- <div v-if="login=='news'">
								<Submenu name="3">
									<template slot="title">
										<Icon type="ios-reverse-camera"></Icon>
										最新新闻
									</template>
									<MenuItem name="3-1">
									<Icon type="ios-copy-outline"></Icon>
									<router-link to='/news/companynews' tag='span'>公司新闻</router-link>
									</MenuItem>
									<MenuItem name="3-2">
									<Icon type="videocamera"></Icon>
									<router-link to='/news/industrydynamics' tag='span'>行业动态</router-link>
									</MenuItem>
									<MenuItem name="3-3">
									<Icon type="images"></Icon>
									<router-link to='/news/companyphotos' tag='span'>公司照片</router-link>
									</MenuItem>
									<MenuItem name="3-4">
									<Icon type="ios-color-wand"></Icon>
									<router-link to='/news/marketing' tag='span'>营销活动</router-link>
									</MenuItem>
								</Submenu>
								<Menu-item name="6">
									<Icon type="ios-world-outline"></Icon>
									<router-link to='/internet' tag='span'>网络营销</router-link>
								</Menu-item>
							</div>
							<div v-if="login=='hr'">
								<Submenu name="7">
									<template slot="title">
										<Icon type="ios-people"></Icon>
										人力资源

									</template>
									<MenuItem name="7-1">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/strategy' tag='span'>人才战略</router-link>
									</MenuItem>
									<MenuItem name="7-2">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/train' tag='span'>人才培训</router-link>
									</MenuItem>
									<MenuItem name="7-3">
									<Icon type="android-people"></Icon>
									<router-link to='/hr/advertises' tag='span'>人才招聘</router-link>
									</MenuItem>
								</Submenu>
								<Menu-item name="8">
									<Icon type="ios-email-outline"></Icon>
									<router-link to='/message' tag='span'>留言模块</router-link>
								</Menu-item>
							</div>
							<div v-if="login=='product'">
								<Menu-item name="2">
									<Icon type="ios-navigate"></Icon>
									<router-link to='/product' tag='span'>产品模块</router-link>
								</Menu-item>
								<Menu-item name="4">
									<Icon type="edit"></Icon>
									<router-link to='/upload' tag='span'>上传模块</router-link>
								</Menu-item>
							</div> -->
						</Menu>
					</i-col>
					<i-col :span="spanRight">
						<div class="layout-rightbody">
							<div class="layout-header">
								<i-button type="text" @click="toggleClick">
									<Icon type="navicon" size="32"></Icon>
								</i-button>
								<p class="titlestyle">老外仓信息管理</p>
							</div>

							<div class="layout-content">
								<div class="layout-content-main">
									<router-view></router-view>
								</div>
							</div>
							<div class="layout-copy">
								2011-2016 &copy; TalkingData
							</div>
						</div>
					</i-col>
				</Row>

			</div>

		</div>
		<div v-else class="allweb">
			<div class="submit">
				<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
					<FormItem prop="user">
						<Input type="text" v-model="formInline.user" placeholder="Username" style="width: 250px;">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<br />
					<FormItem prop="password">
						<Input type="password" v-model="formInline.password" placeholder="Password" style="width: 250px;">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<br />
					<FormItem>
						<Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      spanLeft: 4,
      spanRight: 20,
      formInline: {
        user: "",
        password: ""
      },
      testData: [],
      testLength: "",
      testSta: 0,
      fliter: {
        data6: [],
        total: 0,
        limit: 300,
        page: 1,
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(["login"]),
    iconSize() {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {
    ...mapActions(["checkLogin"]),
    toggleClick() {
      if (this.spanLeft === 4) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 4;
        this.spanRight = 20;
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$http.post(this.getTest() + "/admin/list").then(res => {
            let ii = res.data.rows.length;
            for (let i = 0; i < ii; i++) {
              if (
                this.formInline.user == res.data.rows[i].reg &&
                this.formInline.password == res.data.rows[i].password
              ) {
                this.checkLogin(res.data.rows[i].workarea);
                this.$Message.success("Success!");
                if (this.login == "news") {
                  this.$router.push({
                    path: "/news/companynews"
                  });
                }
                if (this.login == "hr") {
                  this.$router.push({
                    path: "/message"
                  });
                }
                if (this.login == "market") {
                  this.$router.push({
                    path: "/internet"
                  });
                }
                if (this.login == "all") {
                  this.$router.push({
                    path: "/"
                  });
                }
                if (this.login == "product") {
                  this.$router.push({
                    path: "/product"
                  });
                }
              }
            }
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  //   Changeurl(index) {
  //     if (index < this.testLength) {
  //       let obj = {
  //         bgimg: this.testData[index].bgimg
  //           .replace(/http:/, "https:")
  //           .replace(/47.98.51.142:80/, "www.laowaicang.com"),
  //       };
  //       console.log(obj);
  //       this.$http
  //         .put(this.getTest() + "/about/data/" + this.testData[index]._id, obj)
  //         .then(res => {
	// 					this.$http.post(this.getTest() + "/about/list").then(data => {
	// 						console.log(data)
	// 					})
	// 				});
  //       this.testSta = this.testSta + 1;
  //       this.Changeurl(this.testSta);
  //     }
  //   }
  // },
  // created() {
  //   this.Changeurl();
  //   this.$http.post(this.getTest() + "/about/list", this.fliter).then(res => {
  //     this.testData = res.data.rows;
  //     this.testLength = res.data.rows.length;
  //     this.Changeurl(this.testSta);
  //   });
   }
};
</script>