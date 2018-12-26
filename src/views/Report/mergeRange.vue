<template>
  <div class="mearge-container">
    <el-form :inline="true" :model="form" label-position="right" label-width="100px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="合并范围编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合并范围描述">
            <el-input v-model="form.des"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="顶层合并代码">
            <el-input v-model="form.top"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="创建人">
            <el-input v-model="form.creator"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-input v-model="form.status"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-form-item>
          <el-button type="primary" @click="show">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <edit-cell :text="scope.row.date" @change="changeValue($event,scope.$index,'date')"></edit-cell>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import EditCell from "@/components/EditCell";
export default {
  components: {
    EditCell
  },
  data() {
    return {
      form: {
        code: "",
        des: "",
        top: "",
        creator: "",
        status: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    changeValue(value, index, key) {
      this.tableData[index][key] = value;
    },
    show(){
          console.log(this.tableData)
    }
  }
};
</script>

<style scoped lang='less'>
</style>
