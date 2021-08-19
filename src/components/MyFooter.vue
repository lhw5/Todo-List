<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>已完成{{doneTotal}}</span> /
    <span>全部{{total}}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce(
        (pre, todo) => pre + (todo.completed ? 1 : 0),
        0
      );
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        this.$emit("checkAllTodo", value);
      }
    }
  },
  methods: {
    clearAll() {
      confirm("确定清除已完成任务吗?") && this.$emit("clearAllTodo");
    }
  }
};
</script>

<style scoped>
.todo-footer {
  position: relative;
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  margin-top: 5px;
  border-radius: 5px;
}
</style>
