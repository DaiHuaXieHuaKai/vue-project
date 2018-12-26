<template>
  <div class="header-tabs-container">
    <span class="el-icon-arrow-left" :class="arrowshow?'show':'hide'" @click="scroll('left')"></span>
    <span class="el-icon-arrow-right" :class="arrowshow?'show':'hide'" @click="scroll('right')"></span>
    <div class="tabsbar-scroll">
      <ul class="tabs-ul" ref="tabsbar">
        <li
          class="tab-li"
          v-for="item in tabsArray"
          :key="item.id"
          :class="item.id===activeId?'active':''"
          @click="selectTab(item)"
        >
          {{item.title}}
          <i class="el-icon-close" @click.stop="removeTab(item)"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-tabs",
  props: { tabs: Array },
  data() {
    return {
      arrowshow:false,//左右箭头
      activeId: "",
      tabsArray: []
    };
  },
  mounted() {
    this.tabsArray = this.tabs;
  },
  methods: {
    addTab(obj) {
      // let hasSelectTabs = this.tabsArray.filter(tab => tab.id === obj.id);
      // hasSelectTabs.length ? "" : this.tabsArray.push(obj);

      this.tabsArray.push(obj);
      this.activeId = obj.id;
      this.caclTabWidth();
    },
    removeTab(tab) {
      let tabs = this.tabsArray;
      let active = this.activeId;
      if (active === tab.id) {
        tabs.forEach((t, index) => {
          if (t.id === tab.id) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              active = nextTab.id;
            }
          }
        });
      }
      this.activeId = active;
      this.tabsArray = tabs.filter(t => t.id !== tab.id);
      this.caclTabWidth();
    },
    selectTab(tab) {
      this.activeId = tab.id;
    },
    caclTabWidth() {
      const offsetWidth = this.$refs.tabsbar.offsetWidth;
      const scrollWidth = this.$refs.tabsbar.scrollWidth;
      if (scrollWidth > offsetWidth) {
        this.arrowshow = true;
        var tranX = scrollWidth - offsetWidth;
        this.$refs.tabsbar.style.transform = `translateX(-${tranX}px)`;
      } else {
        this.arrowshow = false;
        this.$refs.tabsbar.style.transform = `translateX(0px)`;
      }
    },
    scroll(dirc) {
      const offsetWidth = this.$refs.tabsbar.offsetWidth;
      const scrollWidth = this.$refs.tabsbar.scrollWidth;
      const diff = Math.abs(scrollWidth - offsetWidth);
      if (dirc === "left") {
        this.$refs.tabsbar.style.transform = `translateX(0px)`;
      } else {
        this.$refs.tabsbar.style.transform = `translateX(-${diff}px)`;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header-tabs-container {
  overflow: hidden;
  position: relative;
  padding: 0 30px;
  box-sizing: border-box;
  .show{
    opacity: 1;
  }
  .hide{
    opacity: 0;
  }
  > span:nth-child(1) {
    position: absolute;
    left: 5px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  > span:nth-child(2) {
    position: absolute;
    top: 10px;
    right: 5px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
  .tabsbar-scroll {
    overflow: hidden;
    .tabs-ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      display: flex;
      align-items: flex-start;
      white-space: nowrap;
      transition: all 0.3s;
      .tab-li {
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border: 1px solid #989898;
        box-sizing: border-box;
        margin-left: 5px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        transition: all 0.3s;
        cursor: pointer;
        &.active {
          color: #fff;
          background-color: #409eff;
        }
        &:not(.active):hover {
          color: #409eff;
        }
        i {
          margin-left: 10px;
          &:hover {
            background: #c0c4cc;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
