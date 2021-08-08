<!-- =========================================================================================
  File Name: TodoCount.vue
  Description: Count Number of Active Todos remaining
========================================================================================== -->

<template functional >
    <span>{{props.Count}} items left</span>
</template>

<script>
export default {
    name: 'TodoCount',
    props : {
        Count :{
            type : Number,
            default : 0
        }
    }
}
</script>