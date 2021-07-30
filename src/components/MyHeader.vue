<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入任务名称，敲回车键确认!" v-model="title" autofocus @keyup.enter="add" />
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
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
