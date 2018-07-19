<template>
  <div class="input-pass-wrapper">
    <password v-model="password" :toggle="true"></password>
  </div>
</template>

<script>
import Password from './components/PasswordStrengthMeter.vue'

export default {
  name: '.input-pass-wrapper',
  components: {
    Password
  },
  data () {
    return {
      password: null
    }
  }
}
</script>

<style>


</style>
