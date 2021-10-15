<template>
  <!-- 实验室运行记录表 -->
  <div class="working_info">
    <div class="all">
      <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDg7mSN06jLtWSQ_73_86.png"
        style="vertical-align: middle"
      />
      <span style="font-size: 24px; margin-left: 10px">实验室运行记录表</span>
      <el-table
        :data="tableData"
        style="width: 100%; top: 20px"
        :header-cell-style="{ background: '#E4E7ED', color: '#606266' }"
        border:none
      >
        <el-table-column prop="number" label="编号" align="center">
          <el-input v-model="tableData.number" placeholder="编号"></el-input>
        </el-table-column>
        <el-table-column prop="week" label="周次" align="center">
          <el-input v-model="tableData.week" placeholder="周次"></el-input>
        </el-table-column>
        <el-table-column prop="class" label="专业班级(综合班)" align="center">
          <el-input
            v-model="tableData.class"
            placeholder="专业班级(综合班)"
          ></el-input>
        </el-table-column>
        <el-table-column prop="username" label="学生姓名" align="center">
          <el-input
            v-model="tableData.username"
            placeholder="学生姓名"
          ></el-input>
        </el-table-column>
        <el-table-column prop="people" label="人数" align="center">
          <el-input v-model="tableData.people" placeholder="人数"></el-input>
        </el-table-column>
        <el-table-column prop="exper" label="课程名称/实验项目" align="center">
          <el-input
            v-model="tableData.exper"
            placeholder="课程名称/实验项目"
          ></el-input>
        </el-table-column>
        <el-table-column prop="type" label="课程类型" align="center">
          <el-input v-model="tableData.type" placeholder="课程类型"></el-input>
        </el-table-column>
        <el-table-column prop="teacher" label="任课老师" align="center">
          <el-input
            v-model="tableData.teacher"
            placeholder="任课老师"
          ></el-input>
        </el-table-column>
        <el-table-column prop="state" label="设备运行情况" align="center">
          <el-input
            v-model="tableData.state"
            placeholder="设备运行情况"
          ></el-input>
        </el-table-column>
        <el-table-column prop="beizhu" label="备注" align="center">
          <el-input v-model="tableData.beizhu" placeholder="备注"></el-input>
        </el-table-column>
      </el-table>
    </div>
    <div class="esc">
      <hr />
      <span
        >填写说明:1.周次∶本学期第几周；2.时间：日期和具体时间；3.专业班级：实轴室课靖专业班或综合班名称，开放实验填学生本专业名称；4.学生姓名：实验课不填；5.人数:实验课填具体人数，开放实验不填；6.课程名称：开放实验只填实验项目名称；7.课程类型:“必移、选修、开放”；8.设备运行情况：正常、报修，报修电话:648880413
        ;9.备注。</span
      >
      <br />
    </div>
    <div class="submit">
      <el-button type="primary" style="width: 200px">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "",
          week: "",
          class: "",
          username: "",
          people: "",
          exper: "",
          type: "",
          teacher: "",
          state: "",
          beizhu:"",
        },
      ],
    };
  },
};
</script>
<style scoped>
.working_info {
  /* width: 1000px; */
  min-height: 100px;
}
.all {
  text-align: center;
  margin-top: 33px;
  width: 1300px;
  height: 600px;
  background: #ffffff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 4px;
  /* box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.18); */
}
.esc {
  margin: 0 auto;
  width: 1000px;
  /* padding-bottom: 0; */
}
.submit {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
el-button {
  width: 273px;
  height: 62px;
}
</style>
