<template lang="">
    <div class="page" id="admin">
        <sites/>
    </div>
</template>
<script>
import sites from '@/components/Sites.vue'
export default {
components:{
    sites
}
}
</script>
<style scoped>
 #admin {
    justify-content: center;
    align-items: center;
 }
</style>