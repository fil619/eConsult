<!-- =========================================================================================
  File Name: TodoDragLayout.vue
  Description: Draggable Library to Drag Todo Item
  Library : vuedraggable
========================================================================================== -->

<template>
  <draggable
    class="list-group"
    tag="ul"
    v-model="FilteredNames"
    v-bind="dragOptions"
    @start="isDragging = true"
    @end="isDragging = false"
  >
    <transition-group type="transition" name="flip-list">
      <div
        v-for="todo in FilteredNames"
        :key="todo.id"
        class="p-3 cursor-pointer border-b border-gray-200 dark:bg-dark-desaturated-blue bg-white"
      >
        <todo-item :todo="todo" />
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import { mapMutations  } from 'vuex'
import TodoItem from './TodoItem.vue'

export default {
  name: "TodoDragLayout",
  components: {
    draggable,
    TodoItem
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
    TodoList:{
    get: function () {
        return this.$store.getters.FilteredTodoList
      },
      set: function (newValue) {
          this.UpdateTodoList(newValue)
      },

    },
    FilteredNames: {
      get: function () {
        var SelectedList = this.$store.state.ToDoFilter
        if (SelectedList == "All") {
          return this.TodoList;
        } else {
          var IsComplete = SelectedList == "Completed";
          return this.TodoList.filter((el) => el.IsComplete == IsComplete);
        }
      },
      set: function (newValue) {
          this.TodoList = newValue
      },
    },
  },
  data() {
    return {
      
    };
  },
  methods: {
     ...mapMutations (['UpdateTodoList']),
  },
};
</script>

<style scoped>

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
