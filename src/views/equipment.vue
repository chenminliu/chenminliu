<template>
  <!-- 设备借用表单 -->
  <div>
    <div class="all">
      <img
        src="https://gitee.com/adya/images/raw/master/img/lALPDh0cQ3PewvlRNA_52_81.png"
        style="vertical-align: middle"
      />
      <span style="font-size: 24px; margin-left: 10px">实验室申请记录表</span>
    </div>
    <div class="body">
      <el-form :inline="true" class="ll">
        <el-form-item label="借用部门">
          <el-input style="width: 400px; margin-left: 25px"></el-input>
        </el-form-item>
        <el-form-item label="借用设备用途">
          <el-input style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item label="借用设备时间">
           <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width:400px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="借 用 人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-table :data="data" border style="width: 520px">
            <el-table-column prop="name" label="设备名称" align="center">
              <template slot-scope="scope">
                <!-- {{scope}} -->
                <el-select v-model="data[scope.$index].value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="number" label="设备型号" align="center">
              <template slot-scope="scope">
                <el-select v-model="data[scope.$index].value" placeholder="请选择">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="mobile" label="数量" align="center">
              <template slot-scope="scope">
                <el-input v-model="data[scope.$index].mobile"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="work" label="附件" align="center">
              <template slot-scope="scope">
                <el-input v-model="data[scope.$index].work"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="caozuo" label="操作" align="center">
              <template slot-scope="scope">
                <el-button @click="deleteRow(scope.$index)" type="danger"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <span style="#606266">注:人员名单需据实增减</span>
        </el-form-item>
        <el-button @click="add" type="primary">添加</el-button>
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
      data: [],
      tableData: [],
      options: [
        {
          value: "选项1",
          label: "酒精灯",
        },
        {
          value: "选项2",
          label: "显微镜",
        },
      ],
      options1: [
        {
          value: "选项1",
          label: "型号1",
        },
        {
          value: "选项2",
          label: "型号2",
        },
      ],
      value:"",
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
      value6: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
