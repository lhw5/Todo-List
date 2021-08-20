<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo" />
      <MyList :todos="todos" />
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || []
    };
  },
  methods: {
    //添加一个todo
    addTodo(todoObj) {
      let flag = true;
      this.todos.map(item => {
        if (item.title === todoObj.title) {
          flag = false;
          alert("任务已存在!");
        }
      });
      if (flag) {
        this.todos.unshift(todoObj);
      }
      //this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
      });
    },
    //删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    //全选or取消全选
    checkAllTodo(completed) {
      this.todos.forEach(todo => {
        todo.completed = completed;
      });
    },
    //删除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter(todo => {
        return !todo.completed;
      });
    },
    //更新一个todo
    updateTodo(id, title) {
      this.todos.forEach(todo => {
        if (todo.id === id) {
          let flag = true;
          this.todos.map(item => {
            if (item.title === title) {
              flag = false;
              alert("任务已存在!");
            }
          });
          if (flag) {
            todo.title = title;
          }
        }
      });
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      }
    }
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("updateTodo");
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn-danger {
  position: absolute;
  right: 2px;
  color: #fff;
  background-color: #f56c6c;
  border: 1px solid #f56c6c;
}

.btn-edit {
  position: absolute;
  right: 56px;
  color: #fff;
  margin-right: 2px;
  background-color: #67c23a;
  border: 1px solid #67c23a;
}

.btn-danger:hover {
  color: #fff;
  opacity: 0.9;
}

.btn-edit:hover {
  color: #fff;
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}

.todo-container {
  padding: 10px; 
  color: #606266;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
@media screen and (min-width: 1024px) and (max-width: 1920px) {
  .todo-container {
    margin: 50px auto;
    width: 500px;
  }
}
@media screen and (min-width: 414px) and (max-width: 1023px) {
  .todo-container {
    margin: 50px auto;
    width: 350px;
  }
}
@media screen and (min-width: 320px) and (max-width: 413px) {
  .todo-container {
    margin: 50px auto;
    width: 90%;
  }
}
@media screen and (max-width: 319px) {
  .todo-container {
    margin: 50px auto;
    width: 250px;
  }
}
.todo-wrap{
}

input[type="checkbox"] {
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:after {
  position: absolute;
  top: 0;
  background-color: #fff;
  color: #fff;
  width: 14px;
  height: 14px;
  display: inline-block;
  visibility: visible;
  padding-left: 0;
  text-align: center;
  content: " ";
  border-radius: 2px;
  box-sizing: border-box;
  border: 1px solid #ddd;
}

input[type="checkbox"]:checked:after {
  content: "";
  border-color: #409eff;
  background-color: #409eff;
}

input[type="checkbox"]:checked:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 5px;
  width: 3px;
  height: 8px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  z-index: 1;
}
</style>
