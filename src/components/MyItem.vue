<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)" />&nbsp;
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input
        type="text"
        maxlength="15"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    //删除
    handleDelete(id) {
      if (confirm("确定删除吗?")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
    //编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty.call("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function() {
        this.$refs.inputTitle.focus();
      });
    },
    //失去焦点回调
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空!");
      this.$bus.$emit("updateTodo", todo.id, e.target.value.trim());
    }
  }
};
</script>

<style scoped>
li {
  position: relative;
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #DCDFE6;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-left: 6px;
  position: relative;
  top: -1px;
}

li button {
  display: none;
  margin-top: 3px;
  border-radius: 3px;
}

li:before {
  content: normal;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: rgb(244, 244, 245);
}

li:hover button {
  display: block;
}
</style>
