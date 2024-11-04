
<template>


    <v-form>
        <v-app-bar 
            app color="primary" dark
            density='compact'
            elevation="3"
            scroll-behavior='collapse'
            rounded="xs"
        ><v-app-bar-title class="custom-header">{{ appTitle }}</v-app-bar-title>
        </v-app-bar>



    </v-form>

</template>






<script>
    export default {
        data() {
            return {
                appTitle: 'UNFinishedBusiness'
                
            };
        }
    };
</script>

  
<style scoped>


    .custom-header{
        font-style: italic;
    }


    
</style>