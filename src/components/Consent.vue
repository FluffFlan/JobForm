<style>
p {text-align: center;}
h1 {text-align: center}
</style>



<template>

<v-form>
      <v-app-bar 
        app 
        color="primary" 
        dark
        density="compact"
        elevation="3"
        scroll-behavior="collapse"
        rounded="xs"
      >
        <v-app-bar-title class="custom-header">{{ appTitle }}</v-app-bar-title>
      </v-app-bar>
    </v-form>


    <v-form>
    <br>
    <h1>Consent Form</h1> <br><br>
    <p class="custom">
        By applying for a job at Unfinished Business, I understand that:
        <ol>
            <li>Employment: Sending this application does not confirm that I will be hired. If I am hired, my job can end by either my choice or the companies at any time, without notice or reason. This can be changed with a written note signed by the general manager.</li>
            <li>Changes in Policies: The company can change its policies and benefits at any time. This may lower current benefits.</li>
            <li>Application Checking: I allow the company to check the information provided. If I lied or did not provide important information, I could be fired. I also give the company permission to reach out to references.</li>
            <li>Drug and Alcohol Policy: The company tests for drugs and alcohol before and during employment. I must agree to this to be hired and to keep my job. I may also need to pass a physical exam related to the job.</li>
            <li>Background Checks: The company might request a report about my credit history and personal information from a reporting agency. If I ask, they will tell me more about this report that is required by law.</li>
            <li>Probationary Period: If I get this job, I will be on a probationary period for 60 days. During this time, either I or the company can end the employment for any reason.</li>
        </ol>
    </p> <br><br>
    <v-checkbox label="I consent to the list stated above" class="custom-text"></v-checkbox>
    <v-btn>Submit</v-btn>
    </v-form>
</template>

<script>
export default {
  name: "HomePage",
  data(){
      return{
          appTitle: 'Welcome to UNFinishedBusiness',

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
        margin-top: -20%;
        color: rgb(0, 0, 0); 
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


    h1 {
        margin-top: 10px; 
        text-align: center; 
        font-size: 36px; 
        font-weight: bold;
        position:absolute; 
        top: 100px; 
        left: 0;
        width: 118%; 
        z-index: 100; 
        background-color: white; 
        padding: 10px 0; 
    }

</style>