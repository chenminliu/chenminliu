<template>
  <!-- 开发实验室申请表 -->
  <div>
    <div class="all">
      <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDhYBRim2AB9RUQ_81_81.png"
        style="vertical-align: middle"
      />
      <span style="font-size: 24px; margin-left: 10px">开发实验室申请表</span>
    </div>
    <div class="body">
      <el-form :inline="true" class="ll" :model="form" :data="form">
        <el-form-item label="活 动 名 称">
          <el-input style="width: 400px" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="使 用 原 因">
          <el-input style="width: 400px" v-model="form.reason"></el-input>
        </el-form-item>
        <el-form-item label="使 用 时 间">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 400px"
          >
          </el-date-picker>
          <span style="margin-left: 10px; color: #606266; font-size: 15px"
            >注:每日使用时间为8:20-22:00</span
          >
        </el-form-item>
        <el-form-item label="申请学生名单">
          <el-table :data="data" border v-model="form">
            <el-table-column prop="student_name" label="姓名">
              <el-input></el-input>
            </el-table-column>
            <el-table-column prop="number" label="学号">
              <el-input v-model="form.number"></el-input>
            </el-table-column>
            <el-table-column prop="mobile" label="联系电话">
              <el-input v-model="form.mobile"></el-input>
            </el-table-column>
            <el-table-column prop="work" label="承担工作">
              <el-input v-model="form.work"></el-input>
            </el-table-column>
            <el-table-column prop="caozuo" label="操作">
              <el-button @click="deleteRow()" type="danger">删除</el-button>
            </el-table-column>
          </el-table>
          <span style="#606266">注:人员名单需据实增减</span>
        </el-form-item>
        <el-button @click="add" type="primary">添加</el-button>
      </el-form>
      <span style="text-align: center"
        >疫情特殊时期，我承诺学生进入实验室后第一时间给学生宣讲《实验室疫情个人防护尝试》，并拍照存档。在实验室期间要求同学们隔位而坐。配合实验室中心相关工作安排</span
      >
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
      data: [],
      form: {
        username: "",
        reason: "",
        time: "",
        student_name: "",
        number: "",
        mobile: "",
        work: "",
        caozuo: "",
      },
      hortcuts: [
        {
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          },
        },
      ],
      time: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    };
  },
  methods: {
    add() {
      this.data.push({});
    },
    deleteRow(index) {
      this.data.splice(index, 1);
    },
  },
};
</script>
<style scope>
.all {
  background: #ffffff;
  text-align: center;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 50px;
  border-radius: 4px;
  /* box-shadow: 2px 1px 6px 2px rgba(0, 0, 0, 0.18); */
}
</style>
