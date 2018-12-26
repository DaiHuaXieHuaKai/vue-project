<template>
  <div>
    <label v-for="menu in menus" :key="menu.id">
      <el-submenu :index="menu.id" v-if="menu.children&&menu.children.length">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{menu.title}}</span>
        </template>
        <dynamic-menu :menus="menu.children"></dynamic-menu>
      </el-submenu>
      <el-menu-item :index="menu.id" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: "dynamic-menu",
  props: { menus: Array },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
</style>
