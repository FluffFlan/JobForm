

<template>
    <v-form style="margin-top: 64px;">
        <v-app-bar 
            app color="primary" dark
            density="compact"
            elevation="3"
            scroll-behavior="collapse"
            rounded="xs"
        >
            <v-app-bar-title class="custom-header">{{ appTitle }}</v-app-bar-title>
        </v-app-bar>

        <v-responsive>

            <v-container class="experience-box">

                <h2>What days can you work?</h2>  
                <v-row>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Sunday"></v-checkbox>
                    </v-col>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Monday"></v-checkbox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Tuesday"></v-checkbox>
                    </v-col>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Wednesday"></v-checkbox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Thursday"></v-checkbox>
                    </v-col>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Friday"></v-checkbox>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6" class="custom-text">
                        <v-checkbox label="Saturday"></v-checkbox>
                    </v-col>
                </v-row>
            </v-container>

        </v-responsive>

        <h1>Questions</h1>  

        <v-responsive>

            <v-radio-group label="Are you able to lift 20 lbs?" class="custom-radio">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
            </v-radio-group>

            <v-radio-group label="Can you work nights?" class="custom-radio">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
            </v-radio-group>

            <v-radio-group label="Do you now, or will you in the future, require sponsorship to work in the country you are applying to?" class="custom-radio">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
            </v-radio-group>

            <v-radio-group label="Are you willing to relocate?" class="custom-radio">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
            </v-radio-group>

            <v-radio-group label="Are you a veteran?" class="custom-radio">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
            </v-radio-group>


        </v-responsive>
    </v-form>


    <v-btn
        class="fixed-next-button"
        variant="outlined"
        size="large"
        density="comfortable"
        rounded="lg"
        elevation="8"
        v-on:click="goConsentPage"
    >
        Next
    </v-btn>

    <v-btn
      class="fixed-previous-button"                        
      variant="outlined" 
      size="large" 
      density="comfortable"
      rounded="lg"
      elevation="8"
      v-on:click="goExperiencePage"
      
    >previous</v-btn>

</template>
  
<script>
export default {
    data() {
        return {
            appTitle: 'UNFinishedBusiness', // Declare this or bind it to props
        };
    },
    methods: {
        goExperiencePage() {
        this.$router.push({ name: "Experience" });
      },

      goConsentPage() {
        this.$router.push({ name: "Consent" });
      },
    }
};
</script>
  
<style scoped>


    .custom-button {
        margin-bottom: 10%;
    }
    .custom-select {
        margin-top: 2%;
        color: black !important; 
    }
    .custom-text {
        font-weight: 600;
    }
    .custom-required {
        font-weight: 600;
        color: red;
    }

    .custom-radio {
        margin-top: 2%;
        color: black !important;
    }

    .custom-text {
        margin-top: 2%;
        color: black !important;
    }


    .custom {
        margin-top: -5%;
        width: 300px;
        color: black; 
    }
    .custom-header {
        font-style: italic;
    }

    .experience-box {
        max-width: 350px; /* Matches the width of other form elements */
        margin-top: 40%;
        padding: 15px;
        border: 3px solid rgba(15, 135, 248, 0.877);
        border-radius: 15px; /* Adjust radius for cleaner look */
        background-color: #ffffff;
    }


    .fixed-next-button {
        bottom: -850px; /* Adjust the distance from the bottom */
        left: -200px;
        z-index: 1000; /* Ensure it stays on top of other content */
        background-color: white; /* Optional: match your theme */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
    }

    .fixed-previous-button {
        bottom: -850px; /* Adjust the distance from the bottom */
        right: 700px;
        z-index: 1000; /* Ensure it stays on top of other content */
        background-color: white; /* Optional: match your theme */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
    }




    h2 {
        margin: 0 0 10px 0; /* Ensure spacing only below */
        font-size: 18px;
    }

    h1 {
        margin-top: 10px; 
        text-align: center; 
        font-size: 36px; 
        font-weight: bold;
        position:absolute; 
        top: 100px; 
        left: 0;
        width: 100%; 
        z-index: 100; 
        background-color: white; 
        padding: 10px 0; 
    }

</style>
