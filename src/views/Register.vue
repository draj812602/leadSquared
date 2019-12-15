<template>
<div class="container">
    <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" 
        v-model="form.first_name"
         @blur="$v.form.first_name.$touch()"
        class="form-control">
        <div v-if="$v.form.first_name.$error" class="form-error">
        <span v-if="!$v.form.first_name.required" class="text-danger">First Name is required</span>
        
        </div>
    </div>

    <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" 
            v-model="form.last_name"
         @blur="$v.form.last_name.$touch()"
        class="form-control">
        <div v-if="$v.form.last_name.$error" class="form-error">
        <span v-if="!$v.form.last_name.required" class="text-danger">Last Name is required</span>
        </div>
    </div>
    <div class="form-group">
        <label for="gender">Gender</label>
        <select name="gender" 
           v-model="form.gender"
            @blur="$v.form.gender.$touch()"
        class="form-control">
        <option value="male">Male</option>
        <option value="demale">Female</option>
        </select>
        <div v-if="$v.form.gender.$error" class="form-error">
        <span v-if="!$v.form.gender.required" class="text-danger">Please select gender</span>
        </div>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" 
        v-model="form.email"
         @blur="$v.form.email.$touch()"
        class="form-control">
        <div v-if="$v.form.email.$error" class="form-error">
        <span v-if="!$v.form.email.required" class="text-danger">Email is required</span>
        <span v-if="!$v.form.email.email" class="text-danger">Email address is not valid</span>
        </div> 
    </div>
    <div class="form-group">
        <label for="phoneNo">Phone No.</label>
        <input type="tel" 
        v-model="form.phoneNo"
         @blur="$v.form.phoneNo.$touch()"
        class="form-control">
        <div v-if="$v.form.phoneNo.$error" class="form-error">
        <span v-if="!$v.form.phoneNo.required" class="text-danger">Phone no is required</span>
         <span v-if="!$v.form.phoneNo.numeric || !$v.form.phoneNo.maxLength ||!$v.form.phoneNo.minLength" class="text-danger">invalid phone no</span>

        </div>
    </div>

    <div class="form-group">
        <label for="address">Address</label>
        <input type="text" 
        v-model="form.address"
         @blur="$v.form.address.$touch()"
        class="form-control">
        <div v-if="$v.form.address.$error" class="form-error">
        <span v-if="!$v.form.address.required" class="text-danger">address is required</span>
        </div>  
    </div>
    <button class="btn btn-primary"
    @click.prevent="register"
    :disabled="isFormInvalid"
    >Register</button>

</div>    
</template>

<script>
import axios from 'axios'
import key from '../../src/Token.json'
import { required, email,numeric,maxLength,minLength } from 'vuelidate/lib/validators'
export default {
    data(){
        return{
            form: {
              first_name:null,
              last_name:null,
              gender:null,
              email:null,
              phoneNo:null,
              address:null
            }
        }
    },
     validations: {
      form: {
          first_name: {
          required
        },
        email: {
          required,
          email
        },
        last_name: {
          required
        },
        address: {
          required
        },
        phoneNo: {
          required,
          numeric,
          maxLength:maxLength(10),
          minLength:minLength(10)

          
        },
        gender:{
            required
        }
        
      }
    },
    methods:{
    register(){
      const token = key.Access_token
     axios.get('https://gorest.co.in/public-api/users?access-token='+token+'',this.form)
     .then((res)=>{
         if(res.data.result.name==='Unauthorized')
         {
             alert(res.data.result.name)
         }
         else{
             alert("")
         }
     
     
     })
     .catch(err=> console.log(err))
            
        }
    },
    computed: {
      isFormInvalid () {
        return this.$v.form.$invalid
      }
    },
    
}
</script>

<style scoped>

</style>