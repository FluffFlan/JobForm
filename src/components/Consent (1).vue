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
    <p>
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
    <label for ="consent">I consent to the list stated above</label><br><br>
    <input type="checkbox" id="consent" name="consent" value="Consent">
    <v-btn>Submit</v-btn>
    </v-form>
</template>

<script>
export default {
  methods: {
    handleSubmit() 
    {
      this.$router.push('/done'); 
    },
  },
};
</script>