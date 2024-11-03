<template>
    

    <v-form>
        <v-app-bar 
        app color="primary" dark
        density='compact'
        elevation="3"
        scroll-behavior='collapse'
        rounded="xs"
        ><v-app-bar-title>UNFinishedBusiness</v-app-bar-title>
        </v-app-bar>

        <h1>My Information</h1>
        <v-container>

            <v-col cols="12" sm="10">

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
                                    label="Enter your name"
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
                                    label="Enter your name"
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
                                    :rules="[basicRules.required]"
                                    label="Enter ZIP code"
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
                            <span class="custom-text">E-mail</span>
                            <span class="custom-required">*</span>
                            <span class="custom-text">:</span>
                        </v-col>
                            <!-- Text field on the right side -->
                        <v-col>
                                <v-text-field
                                    class="custom"
                                    :rules="[basicRules.required]"
                                    label="Enter your E-mail"
                                    density="compact"
                                    variant="outlined"
                                    type="Email"
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
                                    class="custom"
                                    :rules="[basicRules.required]"
                                    label="Enter your Phone Number"
                                    density="compact"
                                    variant="outlined"
                                    type="text"
                                ></v-text-field>
                            </v-col>
                    </v-row>
                </v-responsive>

            </v-col>
        </v-container>
    </v-form>

    
  </template>
  
  <script>
  export default {
    data: () => ({
      basicRules: {
        required: value => !!value || 'Field is required',
      },
    }),
  };
  </script>
  
  <style scoped>
    .custom-text{
        font-weight:600;
    }
    .custom-required{
        font-weight:600;
        color: red;
    }
    .custom {
        width: 300px;
        color: black; /* Set your desired width here */
    }
  </style>
  