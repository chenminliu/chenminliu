<template>
  <div class="background"
       :style="height">
    <div class="logo">
      <img src="../assets/images/sc_logo.png"
           alt="">
    </div>
    <h1 class="title">成都东软学院实训实验管理系统</h1>
    <div class="main">

      <!-- 图标大 -->
      <div class="login_icon">
        <img src="../assets/images/login_img.png"
             alt="">
      </div>

      <!-- 登录表单部分 -->
      <div class="login_set">
        <div class="f_s login_title">
          <div class="login_title_icon">
            <img src="../assets/images/login_set_icon.png"
                 alt="">
          </div>
          <h2 class="login_title_font">普通管理员</h2>
        </div>

        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">

          <!-- 用户 -->
          <el-form-item label="用户名"
                        class="login_name"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      class="login_name_input"
                      placeholder="请输入密码"></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item label="密码"
                        class="login_paw"
                        prop="pass">
            <el-input type="password"
                      class="login_paw_input"
                      v-model="ruleForm.pass"
                      autocomplete="off"
                      placeholder="请输入密码"></el-input>
          </el-form-item>

          <el-form-item class="login_form_btn">
            <el-button type="primary"
                       class="login_btn"
                       @click="submitForm('ruleForm')">登录</el-button>
            <el-button type="primary"
                       class="login_btn">注册</el-button>
          </el-form-item>
        </el-form>

        <!-- <button class="login_btn">登录</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {


    // 用户名密码表单
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      height: {
        height: ''
      },
      // 表单
      ruleForm: {
        pass: '',
        name: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    // 表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    hh () {
      // this.height.height = window.innerHeight + 'px';
      this.height.height = 937 + 'px'
    },

  },
  created () {
    this.hh()
  },
}
</script>

<style scoped>
.background {
  width: 100%;
  min-width: 1515px;
  height: 100%;
  padding: 20px 30px;
  background-image: url(../assets/images/login_bj.png);
  background-size: 100% 100%;
}

.logo {
  width: 255px;
  height: 60px;
}

.title {
  font-size: 35px;
  color: #fff;
  text-align: center;
  margin: 55px auto 65px;
  letter-spacing: 3px;
}

.main {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-width: 1200px;
  max-width: 1600px;
  padding: 0 60px;
  margin-bottom: 87px;
}

.login_icon {
  width: 570px;
  height: 570px;
  margin-right: 30px;
}

.login_set {
  height: 570px;
  width: 670px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 50px 80px;
  text-align: center;
  border-radius: 10px;
}

.f_s {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login_title {
  width: 203px;
  height: 50px;
  margin: 0 auto;
}

.login_title_icon {
  height: 47px;
  width: 45px;
}

.login_title_font {
  font-size: 26px;
  color: #fff;
  font-weight: 400;
  width: 155px;
  text-align: center;
  letter-spacing: 1.5px;
}

.login_name,
.login_paw {
  width: 100%;
  align-content: center;
}

.login_name {
  margin: 50px auto 60px;
}

.login_paw {
  margin: 45px auto 20px;
}

.login_name_input,
.login_paw_input {
  width: 403px;
  height: 60px;
  background-color: #fff;
  outline: none;
  border: 1px solid #33d2dc;
  border-radius: 10px;
}

.login_name input::placeholder,
.login_paw input::placeholder {
  font-size: 19px;
  color: #c5c8d0;
}

.login_btn {
  width: 120px;
  height: 55px;
  background-color: #fff;
  border: 1px solid #33d2dc;
  outline: none;
  border-radius: 7px;
  font-size: 18px;
  color: #000;
  margin: 78px 60px;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.login_form_btn {
  margin-left: -100px;
}

.demo-ruleForm >>> .el-form-item__label {
  color: #fff;
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  width: 20px;
  letter-spacing: 3px;
}

.demo-ruleForm >>> .el-input__inner {
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 13px;
  font-size: 19px;
  line-height: 60px;
  overflow: hidden;
}

.demo-ruleForm >>> .el-form-item__error {
  color: #fff;
  font-size: 14px;
  margin-top: 7px;
  margin-left: 8px;
}
</style>
