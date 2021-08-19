<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入任务名称，敲回车键确认！" v-model="title" autofocus maxlength="15" @keyup.enter="add" />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    add() {
      if (!this.title.trim()) return alert("输入不能为空!");
      const todoObj = {
        id: nanoid(),
        title: this.title.trim(),
        completed: false
      };
      this.$emit("addTodo", todoObj);
      this.title = "";
    }
  }
};
</script>

<style scoped>
.todo-header {
  width: 100%;
}
.todo-header input {
  box-sizing: border-box;
  width: inherit;
  height: 28px;
  font-size: 14px;
  outline: none;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  padding: 4px 8px;
  transition: border-color .5s cubic-bezier(.645, .045, .355, 1);
}

.todo-header input:focus {
  outline: none;
  border-color: #409EFF;
}
</style>
