<template>
  <div class="form">
    <div class="select_add">
      <el-date-picker
        v-model="search_date"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="searchDate"
        default-value="2019-10-01"
      ></el-date-picker>
      <el-button type="primary" class="add" @click="add">添加</el-button>
    </div>

    <el-table
      :data="currentTable"
      v-if="currentTable.length>0"
      style="width: 100%"
      align="center"
      border
      max-height="450"
    >
      <el-table-column label="序号" width="100%" align="center"  type="index"></el-table-column>
      <el-table-column label="创建日期" width="130" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ $moment(scope.row.date).format('YYYY-MM-DD')}}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建类型" width="120" align="center" prop="type"></el-table-column>
      <el-table-column label="创建描述" width="120" align="center" prop="describe"></el-table-column>
      <el-table-column label="收入" width="120" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px ;color:#99FF00">{{ scope.row.income}}</span>
        </template>
      </el-table-column>
      <el-table-column label="支出" width="120" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px ;color:#FF0000">{{ scope.row.expend}}</span>
        </template>
      </el-table-column>
      <el-table-column label="账户现金" width="120" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px ;color:#1F66B7">{{ scope.row.cash}}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" width="180" align="center" prop="remark"></el-table-column>
      <el-table-column label="操作" fixed="right" align="center" min-width="200">
        <template slot-scope="scope" color="red">
          <div class="edit">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="page.currentPage"
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        :total="page.total"
        layout="total, sizes, prev, pager, next, jumper"
        v-if="page.total>0"
      ></el-pagination>
    </div>
    <edit :formData="formData" :dialog="dialog" :title="title" @update="getProfiles"></edit>
  </div>
</template>

<script>
import edit from "./editForm";
export default {
  data() {
    return {
      search_date: null,
      page: {
        currentPage: 1,
        pageSizes: [5, 10, 15],
        pageSize: 5,
        total: 11
      },
      currentTable: [],
      tableData: [],
      filterData: [],
      formData: {},
      dialog: {
        dialogTableVisible: false,
        dialogFormVisible: false
      },
      title:""
    };
  },
  methods: {
    handleEdit(index, row) {
      this.title= "编辑"
      this.formData = {
        type: row.type,
        describe: row.describe,
        income: row.income,
        expend: row.expend,
        cash: row.cash,
        remark: row.remark,
        id: row._id
      };
      this.dialog = {
        dialogTableVisible: true,
        dialogFormVisible: true
      };
    },
    handleDelete(index, row) {
      this.$http.get("/vuepro/profiles/delete/" + row._id).then(res => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.getProfiles();
      });
    },
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.currentTable = this.filterData.filter((item, index) => {
        return index < this.page.pageSize;
      });
    },
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.currentTable = this.filterData.filter((item, index) => {
        return index < this.page.pageSize * val && index >= 5 * (val - 1);
      });
    },
    setPage() {
      this.page.currentPage = 1;
      this.page.total = this.filterData.length;
      this.currentTable = this.filterData.filter((item, index) => {
        return index < this.page.pageSize;
      });
    },
    getProfiles() {
      this.$http.get("/vuepro/profiles").then(res => {
        this.tableData=this.filterData = res.data;
         this.$store.dispatch("formData", res.data)
        this.setPage();
      });
    },
    searchDate() {
      let start = this.search_date[0].getTime()
      let end =this.search_date[1].getTime()
      this.filterData = this.tableData.filter(val => {
        return val.date > start && val.date < end;
      });
      this.setPage()
    },
    add() {
      this.title= "添加"
      this.formData = {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: ""
      };
      this.dialog = {
        dialogTableVisible: true,
        dialogFormVisible: true
      };
    }
  },
  created() {
    this.getProfiles();
  },
  components: {
    edit
  }
};
</script>


<style  scoped>
.form {
  position: relative;
  background-color: aliceblue;
  padding: 16px;
  padding-right: 150px;
}
.select_add {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.add {
  margin-right: 2%;
}
.edit {
  white-space: nowrap;
}
.page {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 850px) {
  .form {
    padding-right: 0px;
  }
}
</style>