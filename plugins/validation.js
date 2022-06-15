import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, min, email, confirmed, ext } from 'vee-validate/dist/rules'
//? Another Solution For Vee-validate import it like that
//? .umd.js --- add that after rules
extend('required', {
  ...required,
  message: 'This field is required',
})
extend('min', {
  ...min,
  params: ['length'],
  message: 'This field must be at least {length} characters',
})
extend('email', {
  ...email,
  message: 'Write a valid email',
})
extend('confirmed', {
  ...confirmed,
  message: 'You must write the same password',
})
extend('ext', {
  ...ext,
  message: 'This field must a valid file like png, jpg, png',
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
