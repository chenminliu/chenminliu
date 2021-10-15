<template>
  <div>
    <el-container class="box">
      <!-- 头部 -->
      <el-header class="header">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <img src="../assets/images/sc_logo.png" alt="" />
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <p class="logout">退出登录</p>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="200px">
          <!-- 用户头像 -->
          <div class="user f_s">
            <div class="user_img">
              <img src="../assets/images/login_set_icon.png" alt="" />
            </div>
            <div class="user_name">学生负责人</div>
          </div>

          <el-col :span="12" class="left_nav">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo item-ul"
              @open="handleOpen"
              @close="handleClose"
              background-color="#8cc5ff"
              text-color="#fff"
              active-text-color="#000"
              router
            >
              <el-menu-item index="/index">
                <i class="iconfont icon-shouye"></i>
                <span slot="title" class="nav_font">首 页</span>
              </el-menu-item>

              <el-menu-item index="/person">
                <i class="iconfont icon-geren"></i>
                <span slot="title" class="nav_font">个人信息</span>
              </el-menu-item>

              <el-menu-item index="administration">
                <i class="iconfont icon-biaodanguanli"></i>
                <span slot="title" class="nav_font">表单管理</span>
              </el-menu-item>

              <el-submenu index="4">
                <template slot="title">
                  <i class="iconfont icon-biaodanzujian-biaoge"></i>
                  <span class="nav_font">表单填写</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/working" class="tow_font"
                    >实验室运行记录表</el-menu-item
                  >
                  <el-menu-item index="borrow" class="tow_font"
                    >实验室申请记录表</el-menu-item
                  >
                  <el-menu-item index="development" class="tow_font"
                    >开发实验室申请表</el-menu-item
                  >
                  <el-menu-item index="equipment" class="tow_font"
                    >设备借用表单</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <!-- 主体部分 -->
        <el-main>
          <!-- 路由占位符 -->
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return{}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  min-width: 1515px;
}

.el-header,
.el-footer {
  background-color: #4091ff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #8cc5ff;
  color: #000;
  text-align: center;
  line-height: 200px;
  height: 862px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center;
  line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.left_nav {
  width: 100%;
}

.item-ul {
  text-align: left !important;
}

.f_s {
  display: flex;
  align-items: center;
}

.user {
  height: 40px;
  width: 200px;
  margin-top: 20px;
  padding: 0 20px;
}

.user_img {
  width: 30px;
  height: 30px;
}

.user_name {
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
  letter-spacing: 1px;
}

.nav_font {
  font-size: 16px;
  letter-spacing: 3px;
}

.icon-shouye,
.icon-geren,
.icon-biaodanguanli,
.icon-biaodanzujian-biaoge {
  color: #fff;
  font-size: 20px;
  margin-right: 13px;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.header {
  height: 75px !important;
  padding: 12.5px 20px;
}

.grid-content {
  height: 50px;
  width: 220px;
}

.logout {
  position: absolute;
  right: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1px;
  height: 50px;
  line-height: 50px;
}

.tow_font {
  font-size: 17px;
}

.el-menu-item.is-active {
  background-color: #fff !important;
  color: #fff;
}

.el-menu-item.is-active i {
  color: #239ddd;
}
</style>
