<template>
  <div>
    <!-- 个人信息管理 -->
    <div class="person_imfor">
      <h2 class="infor_title">个人信息管理</h2>
      <!-- 信息展示 -->
      <div>
        <ul class="infor_item">
          <li v-for="(item, index) in information" :key="index">
            <span class="infor_name">{{ item.name }}</span>
            <p>{{ item.content }}</p>
          </li>
        </ul>
      </div>

      <!-- 注意
      <p class="attention">
        (注意:仅电话与密码可修改，若有需要，请联系超级管理员进行修改)
      </p> -->
      <el-button type="primary" @click="changePaw()" class="edit_info"
        >修改密码</el-button
      >
    </div>

    <!-- 修改密码弹框 -->
    <div class="change_paw" v-show="pawshow">
      <h2 class="change_paw_title">请修改您的密码</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="新 密 码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="请再次输入" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="btn_style"
            >确认修改</el-button
          >
          <el-button class="btn_style" @click="hiddenShow()">返 回</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 蒙版 -->
    <div class="mask" v-show="maskshow"></div>
  </div>
</template>

<script>
export default {
  data() {
    // 修改密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      // 个人信息管理
      information: [
        {
          index: 0,
          name: "姓名",
          content: "夜间要去看星星",
        },
        {
          index: 1,
          name: "职位",
          content: "夜间要去看星星",
        },
        {
          index: 2,
          name: "工号",
          content: "夜间要去看星星",
        },
        {
          index: 3,
          name: "邮箱",
          content: "夜间要去看星星",
        },
        {
          index: 4,
          name: "电话",
          content: "夜间要去看星星",
        },
      ],

      // 修改密码
      pawshow: false,
      maskshow: false,
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    hiddenShow: function () {
      var that = this;
      that.pawshow = false;
      that.maskshow = false;
    },
    changePaw: function () {
      var that = this;
      that.maskshow = true;
      that.pawshow = true;
    },
  },
};
</script>

<style scoped>
.person_imfor {
  width: 1000px;
  height: 721px;
  background: #ffffff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 4px;
  box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.18);
}

.infor_title {
  font-size: 22px;
  color: #000;
  letter-spacing: 2px;
  /* height: 120px; */
  font-weight: 400;
  text-align: center;
  line-height: 120px;
}
.infor_item {
  margin-top: -27px;
}
.infor_item li {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: #000;
  height: 70px;
  letter-spacing: 2px;
}

.infor_name {
  margin-right: 30px;
}

/* .attention {
  font-size: 16.5px;
  height: 30px;
  line-height: 30px;
  margin-bottom: -20px;
  text-align: center;
} */

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 937px;
  background-color: rgba(0, 0, 0, 0.2);
}

.change_paw {
  width: 600px;
  height: 410px;
  position: absolute;
  top: 230px;
  left: calc(50% - 200px);
  background-color: #fff;
  z-index: 99;
  padding: 20px 80px;
}

.change_paw_title {
  font-size: 18px;
  color: #000;
  letter-spacing: 2px;
  height: 100px;
  line-height: 100px;
}

.demo-ruleForm >>> .el-form-item__label {
  text-align: left;
  font-size: 16px;
  font-weight: 800;
}

.btn_style {
  width: 98px;
  margin: 50px 20px 0;
}
.edit {
  text-align: center !important;
}
.edit_info {
  margin-left: 400px;
  margin-top: 50px;
}
</style>