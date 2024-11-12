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
  
    <h1>Experience</h1>  
  
    <v-form>
      <!-- Work Experience Section -->
      <v-container style="max-height: 600px; overflow-y: auto;">
        <v-col cols="12" sm="10">
          <h2>Work Experience</h2>
          <div 
            v-for="(experience, index) in experiences" 
            :key="index" 
            class="experience-box"
          >
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Job Title</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="experience.jobTitle"
                    :rules="[basicRules.required]"
                    label="Job Title"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Company Name</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="experience.companyName"
                    :rules="[basicRules.required]"
                    label="Company Name"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">From</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-date-input
                    label="Start Date"
                    variant="outlined"
                    v-model="experience.startDate"
                    class="custom-datebox"
                  ></v-date-input>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">To</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-date-input
                    label="End Date"
                    variant="outlined"
                    v-model="experience.endDate"
                    class="custom-datebox"
                  ></v-date-input>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-checkbox
              v-model="experience.currentlyWorking"
              label="Currently work here"
              class="custom-checkbox"
            ></v-checkbox>
  
            <v-btn 
              @click="removeExperience(index)" 
              color="error" 
              icon="mdi-minus" 
              class="mt-3"
            ></v-btn>
          </div>
  
          <v-btn 
            @click="addExperience" 
            class="mt-5" 
            icon="mdi-plus" 
            color="primary"
          ></v-btn>
        </v-col>
      </v-container>
  
      <!-- Education Section -->
      <v-container style="max-height: 600px; overflow-y: auto;">
        <v-col cols="12" sm="10">
          <h2>Education</h2>
          <div 
            v-for="(education, index) in education" 
            :key="index" 
            class="education-box"
          >
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">University Name</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="education.schoolName"
                    :rules="[basicRules.required]"
                    label="School Name"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Degree</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="education.degreeType"
                    :rules="[basicRules.required]"
                    label="Degree"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Field</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="education.fieldType"
                    :rules="[basicRules.required]"
                    label="Field"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">GPA</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-text-field
                    class="custom"
                    v-model="education.gpa"
                    :rules="[basicRules.required]"
                    label="GPA"
                    density="compact"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Started</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-date-input
                    label="Start Date"
                    variant="outlined"
                    v-model="education.startDate"
                    class="custom-datebox"
                  ></v-date-input>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-responsive>
              <v-row align="center">
                <v-col cols="auto">
                  <span class="custom-text">Graduated</span>
                  <span class="custom-required">*</span>
                  <span class="custom-text">:</span>
                </v-col>
                <v-col>
                  <v-date-input
                    label="End Date"
                    variant="outlined"
                    v-model="education.endDate"
                    class="custom-datebox"
                  ></v-date-input>
                </v-col>
              </v-row>
            </v-responsive>
  
            <v-checkbox
              v-model="education.current"
              label="Attending"
              class="custom-checkbox"
            ></v-checkbox>
  
            <v-btn 
              @click="removeEducation(index)" 
              color="error" 
              icon="mdi-minus" 
              class="mt-3"
            ></v-btn>
          </div>
  
          <v-btn 
            @click="addEduction" 
            class="mt-5" 
            icon="mdi-plus" 
            color="primary"
          ></v-btn>
        </v-col>
      </v-container>

      <v-container class="next-button-container">
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn
                        variant="outlined"
                        size="large"
                        density="comfortable"
                        rounded="lg"
                        elevation="8"
                        v-on:click="goToInfoPage"
                    >
                        Next
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
  
    <!-- Fixed Next Button -->

  </template>
    
  <script>
  export default {
    data() {
      return {
        appTitle: 'UNFinishedBusiness',
        basicRules: {
          required: (value) => !!value || 'Field is required',
        },
        experiences: [
          {
            jobTitle: '',
            companyName: '',
            startDate: null,
            endDate: null,
            currentlyWorking: false,
          },
        ],
        education: [
          {
            schoolName: '',
            degreeType: '',
            fieldType: '',
            gpa: '',
            startDate: null,
            endDate: null,
            current: false,
          },
        ],
      };
    },
    methods: {
      addExperience() {
        this.experiences.push({
          jobTitle: '',
          companyName: '',
          startDate: null,
          endDate: null,
          currentlyWorking: false,
        });
        
      },

      addEduction() {
        this.education.push({
            schoolName: '',
            degreeType: '',
            fieldType: '',
            gpa: '',
            startDate: null,
            endDate: null,
            current: false,
        });
      },

      removeExperience(index) {
        this.experiences.splice(index, 1);
      },

      removeEducation(index) {
        this.education.splice(index, 1);
      },


    },
  };
  </script>
  
  <style scoped>
  .custom-header {
    font-style: italic;
  }
  
  .custom-checkbox {
    margin-top: 2%;
    color: black;
  }
  
  .custom-datebox {
    color: black;
  }
  
  .custom-text {
    font-weight: 600;
  }
  
  
  .custom-required {
    font-weight: 600;
    color: red;
  }
  
  .custom {
    margin-top: 2%;
    width: 300px;
    color: black;
  }
  
  .custom-pageTitle {
    margin-top: 10%;
    font-style: italic;
  }
  
  .experience-box {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position:relative;
    overflow:visible;
    z-index: 1;
  }


  .education-box {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position:relative;
    overflow:visible;
    z-index: 1;
  }    

  .v-overlay-container{
    z-index: index 2000 !important;
  }

  .fixed-next-button {
    position: fixed;
    bottom: 20px; /* Adjust the distance from the bottom */
    z-index: 1000; /* Ensure it stays on top of other content */
    background-color: white; /* Optional: match your theme */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
  }




</style>
  