(function (t) {
  function e(e) {
    for (var n, s, l = e[0], a = e[1], c = e[2], u = 0, f = []; u < l.length; u++) s = l[u], Object.prototype.hasOwnProperty.call(i, s) && i[s] && f.push(i[s][0]), i[s] = 0;
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    d && d(e);
    while (f.length) f.shift()();
    return r.push.apply(r, c || []), o()
  }

  function o() {
    for (var t, e = 0; e < r.length; e++) {
      for (var o = r[e], n = !0, l = 1; l < o.length; l++) {
        var a = o[l];
        0 !== i[a] && (n = !1)
      }
      n && (r.splice(e--, 1), t = s(s.s = o[0]))
    }
    return t
  }
  var n = {},
    i = {
      app: 0
    },
    r = [];

  function s(e) {
    if (n[e]) return n[e].exports;
    var o = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(o.exports, o, o.exports, s), o.l = !0, o.exports
  }
  s.m = t, s.c = n, s.d = function (t, e, o) {
    s.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    })
  }, s.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, s.t = function (t, e) {
    if (1 & e && (t = s(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var o = Object.create(null);
    if (s.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var n in t) s.d(o, n, function (e) {
        return t[e]
      }.bind(null, n));
    return o
  }, s.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return s.d(e, "a", e), e
  }, s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, s.p = "";
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
    a = l.push.bind(l);
  l.push = e, l = l.slice();
  for (var c = 0; c < l.length; c++) e(l[c]);
  var d = a;
  r.push([0, "chunk-vendors"]), o()
})({
  0: function (t, e, o) {
    t.exports = o("56d7")
  },
  "034f": function (t, e, o) {
    "use strict";
    o("85ec")
  },
  "0aea": function (t, e, o) {},
  "0bbb": function (t, e, o) {},
  "1e81": function (t, e, o) {
    "use strict";
    o("0bbb")
  },
  "381c": function (t, e, o) {},
  "56d7": function (t, e, o) {
    "use strict";
    o.r(e);
    o("e260"), o("e6cf"), o("cca6"), o("a79d");
    var n = o("2b0e"),
      i = function () {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("div", {
          staticClass: "todo-container"
        }, [o("div", {
          staticClass: "todo-wrap"
        }, [o("MyHeader", {
          on: {
            addTodo: t.addTodo
          }
        }), o("MyList", {
          attrs: {
            todos: t.todos
          }
        }), o("MyFooter", {
          attrs: {
            todos: t.todos
          },
          on: {
            checkAllTodo: t.checkAllTodo,
            clearAllTodo: t.clearAllTodo
          }
        })], 1)])
      },
      r = [],
      s = (o("d81d"), o("159b"), o("4de4"), function () {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("div", {
          staticClass: "todo-header"
        }, [o("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.title,
            expression: "title"
          }],
          attrs: {
            type: "text",
            placeholder: "请输入任务名称，敲回车键确认！",
            autofocus: "",
            maxlength: "17"
          },
          domProps: {
            value: t.title
          },
          on: {
            keyup: function (e) {
              return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.add.apply(null, arguments)
            },
            input: function (e) {
              e.target.composing || (t.title = e.target.value)
            }
          }
        })])
      }),
      l = [],
      a = (o("498a"), o("e1bd")),
      c = {
        name: "MyHeader",
        data: function () {
          return {
            title: ""
          }
        },
        methods: {
          add: function () {
            if (!this.title.trim()) return alert("输入不能为空!");
            var t = {
              id: Object(a["a"])(),
              title: this.title.trim(),
              completed: !1
            };
            this.$emit("addTodo", t), this.title = ""
          }
        }
      },
      d = c,
      u = (o("ffb9"), o("2877")),
      f = Object(u["a"])(d, s, l, !1, null, "572c8d35", null),
      p = f.exports,
      h = function () {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("ul", {
          staticClass: "todo-main"
        }, [o("transition-group", {
          attrs: {
            name: "todo",
            appear: ""
          }
        }, t._l(t.todos, (function (t) {
          return o("MyItem", {
            key: t.id,
            attrs: {
              todo: t
            }
          })
        })), 1)], 1)
      },
      m = [],
      v = function () {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("li", [o("label", [o("input", {
          attrs: {
            type: "checkbox"
          },
          domProps: {
            checked: t.todo.completed
          },
          on: {
            change: function (e) {
              return t.handleCheck(t.todo.id)
            }
          }
        }), o("span", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !t.todo.isEdit,
            expression: "!todo.isEdit"
          }]
        }, [t._v(t._s(t.todo.title))]), o("input", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.todo.isEdit,
            expression: "todo.isEdit"
          }],
          ref: "inputTitle",
          attrs: {
            type: "text",
            maxlength: "17"
          },
          domProps: {
            value: t.todo.title
          },
          on: {
            blur: function (e) {
              return t.handleBlur(t.todo, e)
            }
          }
        })]), o("button", {
          staticClass: "btn btn-danger",
          on: {
            click: function (e) {
              return t.handleDelete(t.todo.id)
            }
          }
        }, [t._v("删除")]), o("button", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !t.todo.isEdit,
            expression: "!todo.isEdit"
          }],
          staticClass: "btn btn-edit",
          on: {
            click: function (e) {
              return t.handleEdit(t.todo)
            }
          }
        }, [t._v("编辑")])])
      },
      b = [],
      y = {
        name: "MyItem",
        props: ["todo"],
        methods: {
          handleCheck: function (t) {
            this.$bus.$emit("checkTodo", t)
          },
          handleDelete: function (t) {
            confirm("确定删除吗?") && this.$bus.$emit("deleteTodo", t)
          },
          handleEdit: function (t) {
            t.hasOwnProperty.call("isEdit") ? t.isEdit = !0 : this.$set(t, "isEdit", !0), this.$nextTick((function () {
              this.$refs.inputTitle.focus()
            }))
          },
          handleBlur: function (t, e) {
            if (t.isEdit = !1, !e.target.value.trim()) return alert("输入不能为空!");
            this.$bus.$emit("updateTodo", t.id, e.target.value.trim())
          }
        }
      },
      T = y,
      g = (o("97cd"), Object(u["a"])(T, v, b, !1, null, "617262c5", null)),
      $ = g.exports,
      k = {
        name: "MyList",
        components: {
          MyItem: $
        },
        props: ["todos"]
      },
      _ = k,
      w = (o("9f87"), Object(u["a"])(_, h, m, !1, null, "2d848a94", null)),
      x = w.exports,
      A = function () {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o("div", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.total,
            expression: "total"
          }],
          staticClass: "todo-footer"
        }, [o("label", [o("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: t.isAll,
            expression: "isAll"
          }],
          attrs: {
            type: "checkbox"
          },
          domProps: {
            checked: Array.isArray(t.isAll) ? t._i(t.isAll, null) > -1 : t.isAll
          },
          on: {
            change: function (e) {
              var o = t.isAll,
                n = e.target,
                i = !!n.checked;
              if (Array.isArray(o)) {
                var r = null,
                  s = t._i(o, r);
                n.checked ? s < 0 && (t.isAll = o.concat([r])) : s > -1 && (t.isAll = o.slice(0, s).concat(o.slice(s + 1)))
              } else t.isAll = i
            }
          }
        })]), o("span", [t._v("已完成" + t._s(t.doneTotal))]), t._v(" / "), o("span", [t._v("全部" + t._s(t.total))]), o("button", {
          staticClass: "btn btn-danger",
          on: {
            click: t.clearAll
          }
        }, [t._v("清除已完成任务")])])
      },
      E = [],
      O = {
        name: "MyFooter",
        props: ["todos"],
        computed: {
          total: function () {
            return this.todos.length
          },
          doneTotal: function () {
            return this.todos.reduce((function (t, e) {
              return t + (e.completed ? 1 : 0)
            }), 0)
          },
          isAll: {
            get: function () {
              return this.doneTotal === this.total && this.total > 0
            },
            set: function (t) {
              this.$emit("checkAllTodo", t)
            }
          }
        },
        methods: {
          clearAll: function () {
            confirm("确定清除已完成任务吗?") && this.$emit("clearAllTodo")
          }
        }
      },
      M = O,
      j = (o("1e81"), Object(u["a"])(M, A, E, !1, null, "5d1735c6", null)),
      C = j.exports,
      P = {
        name: "App",
        components: {
          MyHeader: p,
          MyList: x,
          MyFooter: C
        },
        data: function () {
          return {
            todos: JSON.parse(localStorage.getItem("todos")) || []
          }
        },
        methods: {
          addTodo: function (t) {
            var e = !0;
            this.todos.map((function (o) {
              o.title === t.title && (e = !1, alert("任务已存在!"))
            })), e && this.todos.unshift(t)
          },
          checkTodo: function (t) {
            this.todos.forEach((function (e) {
              e.id === t && (e.completed = !e.completed)
            }))
          },
          deleteTodo: function (t) {
            this.todos = this.todos.filter((function (e) {
              return e.id !== t
            }))
          },
          checkAllTodo: function (t) {
            this.todos.forEach((function (e) {
              e.completed = t
            }))
          },
          clearAllTodo: function () {
            this.todos = this.todos.filter((function (t) {
              return !t.completed
            }))
          },
          updateTodo: function (t, e) {
            var o = this;
            this.todos.forEach((function (n) {
              if (n.id === t) {
                var i = !0;
                o.todos.map((function (t) {
                  t.title === e && (i = !1, alert("任务已存在!"))
                })), i && (n.title = e)
              }
            }))
          }
        },
        watch: {
          todos: {
            deep: !0,
            handler: function (t) {
              localStorage.setItem("todos", JSON.stringify(t))
            }
          }
        },
        mounted: function () {
          this.$bus.$on("checkTodo", this.checkTodo), this.$bus.$on("deleteTodo", this.deleteTodo), this.$bus.$on("updateTodo", this.updateTodo)
        },
        beforeDestroy: function () {
          this.$bus.$off("checkTodo"), this.$bus.$off("deleteTodo"), this.$bus.$off("updateTodo")
        }
      },
      S = P,
      N = (o("034f"), Object(u["a"])(S, i, r, !1, null, null, null)),
      I = N.exports;
    n["a"].config.productionTip = !1, new n["a"]({
      render: function (t) {
        return t(I)
      },
      beforeCreate: function () {
        n["a"].prototype.$bus = this
      }
    }).$mount("#app")
  },
  "85ec": function (t, e, o) {},
  "97cd": function (t, e, o) {
    "use strict";
    o("0aea")
  },
  "9f87": function (t, e, o) {
    "use strict";
    o("381c")
  },
  cf5d: function (t, e, o) {},
  ffb9: function (t, e, o) {
    "use strict";
    o("cf5d")
  }
});
//# sourceMappingURL=app.7210c5e2.js.map