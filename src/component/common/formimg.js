export default {
    data() {
        return {
            imgUrl: this.getTest() + "/upload/upload",//上传模块的地址
        }
    },
    methods: {
        handleUpdate() {//修改操作
            this.formValidate.date = new Date()//更新时  吧时间也顺带更新了
            this.$http.put(this.getTest() + `/${this.apimodel}/data/` + this.formValidate._id, this.formValidate).then(res => {
                this.getData()
                this.modal6 = false;
            })
        },
        onSelection(rows) {
            var ids = [];
            var idLen = rows.length;
            for (var i = 0; i < idLen; i++) {
                ids.push(rows[i]._id);
            }
            this.ids = ids;
        },
        onDeletes() {
            this.$Modal.confirm({//进行一个确认框操作，以免误删
                title: "确认删除",
                content: "<p>确定删除吗</p>",
                onOk: () => {
                    this.$http
                        .post(this.getTest() + `/${this.apimodel}/deletes`, {
                            ids: this.ids.toString()
                        })
                        .then(res => {
                            this.$Message.info

                                ("删除成功");
                            this.getData();
                        });
                }
            });
        },

    }
}