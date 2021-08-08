<!-- =========================================================================================
  File Name: MainPage.vue
  Description: Image Background with Todo Mounted
========================================================================================== -->

<template>
  <div class="flex flex-col justify-center items-center h-screen w-full mx-auto">
    <div :style="{'background-image': `url(${require(`../assets/${BackGroundImage}`)})`}" class="bg-gray-300 h-64 w-full  flex-none shadow-md bg-cover bg-center"
    ></div>
    <div class="w-11/12 sm:w-4/6 md:w-5/12 -mt-56 rounded-lg flex-grow overflow-hidden">
      <todo-layout />
    </div>
      <div class="flex-none flex justify-center h-16 text-gray-600 dark:text-white">
    <div class="self-center" >Drag and drop to reorder list</div>
  </div>
  </div>
</template>

<script>
import TodoLayout from "./TodoLayout.vue";
export default {
  name :"MainPage",
  components: { TodoLayout },
  computed:{
    BackGroundImage(){
      return this.$store.state.IsDark ? 'bg-desktop-dark.jpg' : 'bg-desktop-light.jpg'
    }
  }
};
</script>