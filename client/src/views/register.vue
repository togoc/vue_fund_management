<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">在线后台管理系统</span>
        <el-form
          :model="registerUser"
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="registerForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" type="email" prop="email">
            <el-input v-model="registerUser.email" placeholder="请输入email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input type="password" v-model="registerUser.password2" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="用户类型">
            <el-select v-model="registerUser.identity" placeholder="请选择身份">
              <el-option label="管理员" value="manager"></el-option>
              <el-option label="员工" value="employee"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        identity: "",
        password: "",
        password2: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在3到15之间",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 4,
            max: 15,
            message: "长度在4到15之间",
            trigger: "blur"
          }
        ],
        password2: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 4,
            max: 15,
            message: "长度在4到15之间",
            trigger: "blur"
          },
          {
            validator: validatePass2
          }
        ]
      }
    };
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style  scoped>
.submit_btn {
  width: 100%;
}
</style>