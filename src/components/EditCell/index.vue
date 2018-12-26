<template>
  <div class="edit-cell">
    <div v-if="edit" class="eidt-cell-input">
      <el-input :value="value" @change="handleChange" @blur="check" autofocus="true"></el-input>
    </div>
    <div v-else class="eidt-cell-value" @click.stop="editCell">
      <el-input :value="value" readonly="readonly"></el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-cell",
  props: ['text'],
  data() {
    return {
      value: this.text,
      edit: false
    };
  },
  methods: {
    handleChange(value) {
      this.value = value;
    },
    check() {
      this.edit = false;
      this.$emit("change", this.value);
    },
    editCell() {
      this.edit = true;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
