
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

        <h1>My Information</h1>
        <v-container>

            <v-col cols="12" sm="10">
                <div>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">Country</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                    </v-row>
                    <v-select 
                        class="custom-select"
                        v-model="selectedCountry"
                        :items="countryNames"
                        :rules="[basicRules.required]"
                        variant="outlined"
                        label="Country"
                        density="compact"
                        :color="'rgb(15, 136, 248)'" 
                        @update:model-value="filterStates"


                    ></v-select>
                    <v-menu>
                        <v-list v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.tilte }}</v-list-item-title>
                        </v-list>
                    </v-menu>

                </div>


                <v-responsive>
                    
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">First Name</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    class="custom"
                                    :rules="[basicRules.required]"
                                    label="Enter your First Name"
                                    density="compact"
                                    variant="outlined"
                                    type="text"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>
                <v-responsive>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">Last Name</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    class="custom"
                                    :rules="[basicRules.required]"
                                    label="Enter your Last Name"
                                    density="compact"
                                    variant="outlined"
                                    type="text"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>
                <v-responsive>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">Address</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    class="custom"
                                    :rules="[basicRules.required]"
                                    label="Enter your Address"
                                    density="compact"
                                    variant="outlined"
                                    type="text"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>
                <v-responsive>
                    <v-row align="center">
                        <v-col cols="12">
                            <span class="custom-text">City<span class="custom-text">:<span class="custom-required">*</span></span></span>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                class="custom"
                                :rules="[basicRules.required]"
                                label="Enter your city"
                                density="compact"
                                variant="outlined"
                                type="text"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                
                </v-responsive>
                <div>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">State</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                    </v-row>
                    <v-select 
                        class="custom-select"
                        v-model="selectedState"
                        :items="filteredStates"
                        :rules="[basicRules.required]"
                        variant="outlined"
                        label="State"
                        density="compact"
                        :color="'rgb(15, 136, 248)'" 
                    ></v-select>
                    <v-menu>
                        <v-list v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.tilte }}</v-list-item-title>
                        </v-list>
                    </v-menu>
                </div>
                <v-responsive>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">Postal Code</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    class="custom"
                                    v-model="zip"
                                    :rules="zipRule"
                                    label="Enter ZIP code"
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>

                <v-responsive>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">E-mail</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    v-model="email"
                                    class="custom"
                                    :rules="emailRules"
                                    label="Enter your E-mail"
                                    density="compact"
                                    variant="outlined"
                                    
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>
                <v-responsive>
                    <v-row align="center">
                    <!-- Text on the left side -->
                        <v-col cols="auto">
                            <span class="custom-text">Phone Number</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    v-model="phone"
                                    class="custom"
                                    :rules="phoneRule"
                                    label="Enter your Phone Number"
                                    density="compact"
                                    variant="outlined"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>

            </v-col>
        </v-container>

        <v-container>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn
                        
                        variant="outlined" 
                        size="large" 
                        density="comfortable"
                        rounded="lg"
                        elevation="8"
                        v-on:click="goToInfoPage"
                    >Next</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>

</template>
  
<script>
import statesData from "./states.json";
//console.log(statesData);

export default {
  data() {
    return {
      appTitle: 'UNFinishedBusiness', 
      countryNames: [],
      stateNames: [],         // Store all state data from JSON
      filteredStates: [],     // Stores states filtered by selected country
      selectedState: '',
      selectedCountry: '',
      basicRules: {
        required: (value) => !!value || 'Field is required',
      },
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      phone:'',
      phoneRule:[
        value =>{
            if (value) return true

            return 'Phone number is required.'
        },
        value => {
            if (/^[0-9-]{10,15}$/.test(value)) return true

            return 'Phone number needs to be at least 10-15 digits.'
        },

      ],
      zip:'',
      zipRule:[
        value =>{
            if (value) return true

            return 'ZIP code is required.'
        },
        value => {
            if (/^[0-9-]{4,10}$/.test(value)) return true

            return 'ZIP code needs to be at least 4-10 digits.'
        },

      ],
    };
  },
  mounted() {
    // Fetch country names from the REST Countries API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        this.countryNames = data
          .map(country => country.name.common)
          .sort();
      })
      .catch(error => console.error('Error fetching countries:', error));

    // Set stateNames from imported JSON file
    this.stateNames = statesData;
  },
  methods: {
    filterStates() {
      // Filter states based on the selected country
      this.filteredStates = this.stateNames
        .filter(state => state.country_name === this.selectedCountry)
        .map(state => state.name); // Extract just the state names
        //console.log(this.filteredStates);
        
    },
    
    goToInfoPage() {
      this.$router.push({ name: "Experience" });
    },
  },
};
</script>

  
<style scoped>
    .custom-button{
        margin-bottom: 10%;
    }
    .custom-select{
        margin-top: 2%;
        color: black !important; /* Sets the selected text to black */
    }
    .custom-text{
        font-weight:600;
    }
    .custom-required{
        font-weight:600;
        color: red;
    }
    .custom {
        margin-top: -5%;
        width: 300px;
        color: black; /* Set your desired width here */
    }
    .custom-header{
        font-style: italic;
    }
</style>
