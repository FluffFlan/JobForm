<template>
    <div class="home-container">
        <v-app-bar 
            app color="primary" dark
            density="compact"
            elevation="3"
            scroll-behavior="collapse"
            rounded="xs"
        >
            <v-app-bar-title class="custom-header">{{ appTitle }}</v-app-bar-title>
        </v-app-bar>
  
        <v-container class="home-content" fluid>
          <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
              <h1>Welcome!</h1>
              <p>
                Please enter in where you which to apply and the position.
              </p>
  
              <v-text-field
                class="custom" 
                label="Company" 
                density="compact"
                variant="outlined"
                :rules="[basicRules.required]"
            ></v-text-field>
            <v-text-field
                class="custom" 
                label="Job Position" 
                density="compact"
                variant="outlined"
                :rules="[basicRules.required]"
            ></v-text-field>


            <v-btn
                class="fixed-next-button"
                variant="outlined"
                size="large"
                density="comfortable"
                rounded="lg"
                elevation="8"
                v-on:click="goInfoPage"
            >
                Next
            </v-btn>



            </v-col>
          </v-row>
        </v-container>
  
        <v-footer app color="primary" dark>
          <v-col class="text-center white--text">
            © 2024 UNFinishedBusiness
          </v-col>
        </v-footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    data(){
        return{
            appTitle: 'Welcome to UNFinishedBusiness',
            basicRules: {
                required: (value) => !!value || 'Field is required',
            } 
        }

    },

    methods:{
        goInfoPage() {
            this.$router.push({ name: "Info" });
        },
    },

  };
  </script>
  
  <style scoped>
  .home-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .home-content {
    margin-top: 20px;
    text-align: center;
  }

  .custom-header{
        font-style: italic;
  }

  .custom {
        margin-top: 5%;
        width: 300px;
        color: black; /* Set your desired width here */
    }


    .fixed-next-button {
        bottom: -50px; /* Adjust the distance from the bottom */

        z-index: 1000; /* Ensure it stays on top of other content */
        background-color: white; /* Optional: match your theme */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
    }

  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  </style>
  