<template>
  <div class="dashboard-container">
    <el-container>
      <el-aside width="250px">
        <div class="logo">
          <img src alt>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          background-color="#001529"
          text-color="#dddddd"
          @select="selectMenu"
        >
          <dynamic-menu :menus="menus"></dynamic-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="tabs-header">
            <header-tabs :tabs="tabs" ref="tabs"></header-tabs>
          </div>
          <div class="oprations-header">
            <el-row>
              <el-col :span="8">
                <el-button type="text">
                  <i class="fa fa-user"></i>
                </el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="text">
                  <i class="fa fa-cog"></i>
                </el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="text">
                  <i class="fa fa-sign-out"></i>
                </el-button>
              </el-col>
            </el-row>
          </div>
        </el-header>
        <el-main>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderTabs from "@/components/HeaderTabs";
import DynamicMenu from "@/components/DynamicMenu";
import { getMenuObjct } from "@/utils";
export default {
  name: "Dashboard",
  components: { HeaderTabs, DynamicMenu },
  data() {
    return {
      title: "dashboard",
      tabs: [],
      menus: [
        {
          id: "menu1",
          title: "菜单1",
          children: [
            {
              id: "menu2",
              title: "菜单1-1"
            }
          ]
        },
        {
          id: "menu3",
          title: "菜单2"
        }
      ]
    };
  },
  methods: {
    selectMenu(index, path) {
      console.log(index, path);
      let obj = getMenuObjct(index, this.menus);
      this.$refs.tabs.addTab(obj);
      this.$router.push(obj.id);
      console.log(obj);
    }
  }
};
</script>

<style lang="less" scoped>
.dashboard-container {
  .el-aside {
    height: 100vh;
    color: #ffffff;
    background-color: #001529;
    .logo {
      height: 60px;
    }
    .el-menu{
      border: none;
    }
  }
  .el-container {
    background-color: #f0f2f5;
    height: 100vh;
    .el-header {
      padding: 0;
      margin: 0;
      background: #fff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      position: relative;
      display: flex;
      align-items: flex-end;
      .tabs-header {
        width: 0;
        flex: auto;
      }
      .oprations-header {
        width: 200px;
        line-height: 60px;
        flex: none;
      }
    }
  }
}
</style>
