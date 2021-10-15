<template>
  <div>
    <el-row>
      <el-col :span="18">
        <!-- 有无审批下拉框 -->
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <!-- 搜索查询 -->
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search">查询</el-button>
        </el-input></el-col
      >
    </el-row>
    <!-- <el-button type="primary" @click="addDialogVisible = true" class="bb"
      >查询</el-button
    >
    <el-select
      v-model="value9"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
      class="aa"
    >
      <el-option
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
    <!-- 表单信息 -->
    <el-table
      :data="tableData"
      class="form"
      style="width: 100%; top: 20px"
      :header-cell-style="{ background: '#E4E7ED', color: '#606266' }"
      border:none
    >
      <el-table-column prop="number" label="编号" align="center">
      </el-table-column>
      <el-table-column prop="username" label="表单名称" align="center">
      </el-table-column>
      <el-table-column prop="data" label="申请日期" align="center">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        align="center"
      ></el-table-column>
      <el-table-column prop="caozuo" label="操作" align="center">
        <!-- 查看按钮 -->
        <!-- scope.rwo.id：获取用户的id -->
        <!-- @click="showEditDialog()" -->
        <el-button type="primary" size="mini">查看</el-button>
        <!-- 修改按钮 -->
        <el-button type="warning" size="mini" @click="edit()">修改</el-button>
        <!--删除按钮  -->
        <el-button type="danger" size="mini" @click="removeUserById()"
          >删除</el-button
        >
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->

    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
    <!-- 查看按钮 -->

    <!-- 修改按钮以及对话框 -->
    <!-- @click="editDialogClosed" -->
    <el-dialog
      title="实验室运行记录表"
      :visible.sync="editDialogVisible"
      width="50%"
      style="text-align: center"
    >
      <el-form ref="editFormRef" label-width="70px">
        <!-- <el-form-item label="时间">
          disabled：禁用
          <el-input v-model="tableData.date" disabled></el-input>
        </el-form-item> -->
        <el-table
          :data="editForm"
          style="width: 100%; top: 20px"
          :header-cell-style="{ background: '#E4E7ED', color: '#606266' }"
          border:none
        >
          <el-table-column prop="number" label="编号" align="center">
            <el-input v-model="editForm.number"></el-input>
          </el-table-column>
          <el-table-column prop="week" label="周次" align="center">
            <el-input v-model="editForm.week"></el-input>
          </el-table-column>
          <el-table-column prop="class" label="专业班级(综合班)" align="center">
            <el-input v-model="editForm.class"></el-input>
          </el-table-column>
          <el-table-column prop="username" label="学生姓名" align="center">
            <el-input v-model="editForm.username"></el-input>
          </el-table-column>
          <el-table-column prop="people" label="人数" align="center">
            <el-input v-model="editForm.people"></el-input>
          </el-table-column>
          <el-table-column
            prop="exper"
            label="课程名称/实验项目"
            align="center"
          >
            <el-input v-model="editForm.exper"></el-input>
          </el-table-column>
          <el-table-column prop="type" label="课程类型" align="center">
            <el-input v-model="editForm.type"></el-input>
          </el-table-column>
          <el-table-column prop="teacher" label="任课老师" align="center">
            <el-input v-model="editForm.teacher"></el-input>
          </el-table-column>
          <el-table-column prop="state" label="设备运行情况" align="center">
            <el-input v-model="editForm.state"></el-input>
          </el-table-column>
          <el-table-column prop="beizhu" label="备注" align="center">
            <el-input v-model="editForm.beizhu"></el-input>
          </el-table-column>
        </el-table>
        <div class="esc">
          <hr />
          <span
            >填写说明:1.周次∶本学期第几周；2.时间：日期和具体时间；3.专业班级：实轴室课靖专业班或综合班名称，开放实验填学生本专业名称；4.学生姓名：实验课不填；5.人数:实验课填具体人数，开放实验不填；6.课程名称：开放实验只填实验项目名称；7.课程类型:“必移、选修、开放”；8.设备运行情况：正常、报修，报修电话:648880413
            ;9.备注。</span
          >
          <br />
        </div>
      </el-form>
      <span slot="footer">
        <!-- @click="editUserInfo" -->
        <el-button type="primary">修改</el-button>
        <el-button @click="editDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取用户列表的参数对象
      queryInfo: {
        query: "",
        // 当前的页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2,
      },
      // 是否通过下拉框
      options: [
        {
          value: "选项1",
          label: "已通过",
        },
        {
          value: "选项2",
          label: "未通过",
        },
        {
          value: "选项3",
          label: "未审批",
        },
        {
          value: "选项4",
          label: "全部",
        },
      ],
      value: "",
      editDialogVisible: false,
      // 用户信息
      tableData: [
        {
          number: "1",
          username: "王小虎",
          data: "2021年10月11日",
          state: "已通过",
        },
      ],
      editForm: [{
        number: "1",
        week: "1",
        class: "1",
        username: "1",
        people: "1",
        exper: "1",
        type: "1",
        teacher: "1",
        state: "1",
        beizhu: "1",
      }],
    };
  },
  methods: {
    // 监听pagesize改变的事件,发起数据请求
    handleSizeChange(newSize) {
      console.log(newSize);
      // 把监听到的值保存到queryInfo的pagesize身上
      this.queryInfo.pagesize = newSize;
      // newSize发生了变化，就应该根据最新的newSize从新发起数据请求来获取这一页的数据
      this.getUserList();
    },
    // 监听页码值改变的事件
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.queryInfo.pagenum = newPage;
      this.getUserList();
    },
    removeUserById(index) {
      this.tableData.splice(index, 1);
    },
    edit() {
      // 隐藏添加用户的对话框
      this.editDialogVisible = true;
    },
  },
};
</script>
<style>
.bb {
  float: right;
}
.aa {
  float: right;
  /* margin-left: 500px; */
}
* {
  background-color: none;
}
/* el-pagination {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
} */
</style>
