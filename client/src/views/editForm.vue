<template>
  <div class="e">
    <el-dialog title="收货地址" :visible.sync="dialog.dialogFormVisible">
      <el-form ref="form" :model="formData" label-width="120px" style="margin:10px;width:auto">
        <el-form-item label="收支类型:">
          <el-select v-model="formData.type" placeholder="收支类型">
            <el-option
              v-for="(formtype,index) in format_type_list"
              :key="index"
              :label="formtype"
              :value="formtype"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="describe" label="收支描述:">
          <el-input type="describe" v-model="formData.describe"></el-input>
        </el-form-item>
        <el-form-item prop="incode" label="收入:">
          <el-input type="incode" v-model="formData.income" placeholder="数字"></el-input>
        </el-form-item>
        <el-form-item prop="expend" label="支出:">
          <el-input type="expend" v-model="formData.expend" placeholder="数字"></el-input>
        </el-form-item>
        <el-form-item prop="cash" label="账户现金:" >
          <el-input type="cash" v-model="formData.cash" placeholder="数字"></el-input>
        </el-form-item>
        <el-form-item prop="remark" label="备注:">
          <el-input type="remark" v-model="formData.remark" placeholder="默认:xxx@xxx.com"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialog: Object,
    formData: Object
  },
  data() {
    return {
      format_type_list: [
        "提现",
        "提现手续费",
        "充值",
        "优惠券",
        "充值礼券",
        "转账"
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          if (this.formData.id) {
            this.$http
              .post("/api/profiles/edit/" + this.formData.id, this.formData)
              .then(res => {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
              });
          } else {
            console.log(this.formData);
            this.$http.post("/api/profiles/add",this.formData).then(res => {
              console.log(res);
              this.$message({
                message: "添加成功",
                type: "success"
              });
            });
          }
        }
      });
      this.dialog.dialogFormVisible = false;
      this.$emit("update");
    }
  }
};
</script>