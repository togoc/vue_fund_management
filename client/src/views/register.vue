<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">请注册</span>
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
            <el-input v-model="registerUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="password2">
            <el-input v-model="registerUser.password2" placeholder="请输入密码"></el-input>
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
          <div class="login_tips">
            <span>
              已有账号?请直接
              <router-link to="/login">登录</router-link>
            </span>
          </div>
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
  created: function() {
    delete localStorage.token;
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post("/register", this.registerUser)
            .then(res => {
              this.$message({
                message: "注册成功",
                type: "success"
              });
            });
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>


<style scoped >
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/balloon_dest.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit_btn {
  width: 100%;
}
.login_tips {
  width: 100%;
  text-align: right;
  font-size: 12px;
  letter-spacing: 2px;
  padding-bottom: 5%;
}

.login_tips a {
  color: blue;
  font-size: 14px;
}
</style>
