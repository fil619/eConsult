<template>
<div>

  <div class="item rounded-full" style="padding:1.5px" @click="EmitEvent">
    <div
      class="rounded-full h-5 w-5 flex items-center justify-center border-2 cursor-pointer"
      :class="val ? 'checkbox-gradient' : 'bg-white'"
    >
      <svg
      
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
        viewBox="0 0 9 9"
      >
        <path
          fill="none"
          stroke="#fff"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
    </div>
  </div>

</div>
</template>

<script>
export default {
  props: {
    val: {
      default: true,
      type: Boolean,
    },
  },
  methods: {
    EmitEvent() {
      this.$emit("UpdateTodo");
    },
  },
};
</script>

<style scoped>
.checkbox-gradient {
  background: linear-gradient(to bottom right, #57ddff 0%, #c058f3 100%);
}

.item:hover {
  background: linear-gradient(to bottom right, #57ddff 0%, #c058f3 100%);
}
</style>
