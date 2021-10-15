<template>
  <!-- 实验室申请记录表 -->
  <div class="borrow_info">
    <div class="all">
      <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDg7mSN06jLtWSQ_73_86.png"
        style="vertical-align: middle"
      />
      <span style="font-size: 24px; margin-left: 10px">实验室申请记录表</span>
    </div>
    <div class="body">
      <el-date-picker
        v-model="value1"
        class="data"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
      <el-form :inline="true" class="ll" :model="form">
        <el-form-item label="申请实验室名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label=" 实  验 室 编  号 ">
          <el-input v-model="form.number"> </el-input>
        </el-form-item>
        <el-form-item label="实验室课程名称">
          <el-input v-model="form.course"></el-input>
        </el-form-item>
        <el-form-item label="学生班级及人数">
          <el-input v-model="form.people"> </el-input>
        </el-form-item>
        <el-form-item label="活动名称" v-model="form.act">
          <el-date-picker
            v-model="value3"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input style="width: 527px" v-model="form.actor"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input
            type="textarea"
            style="width: 580px"
            v-model="form.ac"
          ></el-input>
        </el-form-item>
        <el-form-item label="指导老师(申请人)">
          <el-input v-model="form.teacher"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button type="primary" style="width: 200px">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form:{
        name:'',
        number:'',
        course:'',
        people:'',
        act:'',
        actor:'',
        ac:'',
        teacher:'',
        mobile:'',
      },
      // 日期
      shortcuts: [
        {
          onClick(picker) {
            picker.$emit("pick", new Date());
          },
        },
      ],
      value1: "",
      //   日期段
      shortcuts1: [
        {
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          },
        },
      ],
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    };
  },
};
</script>
<style scope>
.borrow_info {
  margin: 0 auto;
  min-height: 100px;
  margin-top: 33px;
  width: 1300px;
  height: 600px;
}
.all {
  background: #ffffff;
  text-align: center;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 4px;
  /* box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.18); */
}
.body {
  width: 800px;
  margin: 0 auto;
}
.ll {
  margin-top: 10px;
  /* text-align: center; */
  margin-left: 80px;
}
.data {
  margin-left: 80px;
}
.submit {
  /* width: 1000px; */
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
el-button {
  width: 273px;
  height: 62px;
}
</style>
