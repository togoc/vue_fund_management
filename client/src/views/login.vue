<template>
  <div class="login">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">请使用邮箱登录</span>
        <el-form
          :model="loginUser"
          :rules="rules"
          ref="loginForm"
          label-width="100px"
          class="loginForm"
        >
          <el-form-item label="邮箱" type="email" prop="email">
            <el-input v-model="loginUser.email" placeholder="请输入email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginUser.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <div class="login_tips">
            <span>
              没有账号?请先
              <router-link to="/register">注册</router-link>
            </span>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<script>
import jwt from "jwt-decode";
export default {
  name: "login",
  data() {
    return {
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
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
        ]
      }
    };
  },
  created: function() {
    delete localStorage.token;
    this.$store.dispatch("clearCurrentState")
  },
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post("/vuepro/users/login", this.loginUser)
            .then(res => {
              this.$message({
                message: "登录成功",
                type: "success"
              });
              let { token } = res.data;
              localStorage.setItem("token", token);
              //解析token
              let decode = jwt(token);
              this.$store.dispatch("setAuthenticated", !this.isEmpty(decode));
              this.$store.dispatch("setUser", decode);
              this.$router.push("/index");
            })
            .catch(err => {
              console.log(err);
              this.$message({
                message: "邮箱或密码错误",
                type: "error"
              });
            });
        }
      });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>


<style scoped >
.submit_btn {
  width: 100%;
}
.login {
  background-image: url("../assets/balloon_dest.jpg");
  width: 100%;
  background-position: 100% 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form_container {
  background-color: aliceblue;
  width: 315px;
  /* height: 230px; */
  display: flex;
  justify-content: center;
  border-radius: 20px;
}
.manage_tip {
  width: 300px;
  /* height: 200px; */
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}

.loginForm {
  display: flex;
  padding-right: 10%;
  flex-direction: column;
  justify-content: center;
}
.loginUser {
  width: 100%;
  height: 100%;
  display: flex;
}
.title {
  width: 100%;
  margin: 10px 0px 20px 0px;
  text-align: center;
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

