<template>
  <div class="Password">
    <div class="Password__group">
      <input
        :type="inputType"
        ref="input"
        v-bind:value="value"
        v-on:input="emitValue($event.target.value)"
        :class="[defaultClass]"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :required="required"
      >
      <div class="Password__icons">
        <div
          v-if="toggle"
          class="Password__toggle">
            <button
              class="btn-clean"
              :aria-label="showPasswordLabel"
              @click.prevent="togglePassword()">

              <svg  v-if="this.$data._showPassword" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="12" viewBox="0 0 20 12">
                  <defs>
                      <title>Hide Password</title>
                      <path id="7tipa" d="M618 462c-.4-.45.66-2.15 0-2.15-1.23 0-2.22.96-2.22 2.15s1 2.15 2.22 2.15c1.23 0 2.22-.96 2.22-2.15 0-.55-1.87.38-2.22 0zm0 4.3a4.38 4.38 0 0 1-4.45-4.3c0-2.38 2-4.3 4.45-4.3a4.38 4.38 0 0 1 4.44 4.3c0 2.38-1.99 4.3-4.44 4.3zm0-9.9c-6.56 0-10 4.83-10 5.6 0 .77 3.44 5.6 10 5.6 6.56 0 10-4.83 10-5.6 0-.77-3.44-5.6-10-5.6z"/>
                  </defs>
                  <g><g transform="translate(-608 -456)"><use fill="#c5d0de" xlink:href="#7tipa"/></g></g>
              </svg>

              <svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="18" viewBox="0 0 20 18">
                  <defs>
                      <title>Show Password</title>
                      <path id="d8kya" d="M756.9 458.32l-2.57 2.56c.07.3.11.61.11.94a4.38 4.38 0 0 1-5.27 4.22l-1.2 1.2c.64.1 1.31.18 2.03.18 6.56 0 10-4.84 10-5.6 0-.43-1.06-2.1-3.1-3.5zm-13.8 7l2.57-2.57c-.07-.3-.12-.61-.12-.93a4.38 4.38 0 0 1 5.29-4.23l1.2-1.2c-.65-.1-1.32-.17-2.04-.17-6.56 0-10 4.83-10 5.6 0 .42 1.06 2.09 3.1 3.5zm15.42-12.03a1 1 0 0 0-1.41 0l-15.63 15.63a1 1 0 1 0 1.41 1.42l15.63-15.63a1 1 0 0 0 0-1.42z"/>
                  </defs>
                  <g><g transform="translate(-740 -453)"><use fill="#c5d0de" xlink:href="#d8kya"/></g></g>
              </svg>

            </button>
        </div>
      </div>
    </div>

    <div class="password-strength">
        <p>Password strength</p>
        <div class="password-strength-wrapper">
            <div class="password-strength-indicator">
                <div v-bind:class="[strengthMeterClass]">
                  <div v-bind:class="[strengthMeterFillClass]" :data-score="passwordStrength"></div>
                </div>
            </div>
        </div>
    </div>


  </div>
</template>

<script>
  import zxcvbn from 'zxcvbn'

  export default {
    props: {
      /**
       * Input field id
       * @type {String}
       */
      id: {
        type: String,
        default: 'password'
      },
      /**
       * Input field placeholder text
       * @type {String}
       */
      placeholder: {
        type: String,
        default: 'Please enter your password'
      },
      /**
       * Binded value
       * @type {Object}
       */
      value: {
        type: String
      },
      /**
       * Input field name
       * @type {String}
       */
      name: {
        type: String,
        default: 'password'
      },
      /**
       * Input field required attribute
       * @type {Boolean}
       */
      required: {
        type: Boolean,
        default: true
      },
      /**
       * Password min length.
       * Right now only visual for the badge
       * @type {Number}
       */
      secureLength: {
        type: Number,
        default: 7
      },
      /**
       * Display badge:
       * The badge shows your
       * password character count
       * up to the defined secureLength
       * @type {Boolean}
       */
      badge: {
        type: Boolean,
        default: true
      },
      /**
       * Show password toggle:
       * Show icon to toggle
       * the password visibility
       */
      toggle: {
        type: Boolean,
        default: false
      },
      /**
       * Prop to toggle the
       * cleartext password if
       * toggle is disabled
       */
      showPassword: {
        type: Boolean,
        default: false
      },
      /**
       * CSS Class for the Input field
       * @type {String}
       */
      defaultClass: {
        type: String,
        default: 'Password__field'
      },
      /**
       * CSS Class for the badge
       * if a password does not match
       * the secureLength. Later for errors
       * @type {String}
       */
      errorClass: {
        type: String,
        default: 'Password__badge--error'
      },
      /**
       * CSS Class for the badge
       * if a password does match
       * the secureLength. Later for
       * success messages possible.
       * @type {String}
       */
      successClass: {
        type: String,
        default: 'Password__badge--success'
      },
      /**
       * CSS class for styling the
       * strength meter bars.
       * @type {String}
       */
      strengthMeterClass: {
        type: String,
        default: 'Password__strength-meter'
      },
      /**
       * strengthMeterFillClass sets the
       * individual strength width and fill
       * color of the strength meter bars.
       * @type {String}
       */
      strengthMeterFillClass: {
        type: String,
        default: 'Password__strength-meter--fill'
      }
    },
    data () {
      return {
        password: null,
        _showPassword: false
      }
    },

    methods: {
      /**
       * Emit passowrd value to parent component
       * @param  {String} value password typed in
       */
      emitValue (value) {
        this.password = value
        this.$emit('input', value)
      },
      togglePassword () {
        if (this.$data._showPassword) {
          this.$emit('hide')
          this.$data._showPassword = false
        } else {
          this.$emit('show')
          this.$data._showPassword = true
        }
      }
    },

    computed: {
      /**
       * passwordStrength is the score calculated by zxcvbn
       * @return {Number} Password Strength Score
       */
      passwordStrength () {
        return this.password ? zxcvbn(this.password).score : null
      },

      /**
       * isSecure checks if the length of the password is longer then
       * the defined `secureLength`
       * @return {Boolean} Password length longer then minLength
       */
      isSecure () {
        return this.password ? this.password.length >= this.secureLength : null
      },

      /**
       * isActive checks if a password is entered.
       * It's required for the password count badge.
       * @return {Boolean} Password entered
       */
      isActive () {
        return this.password && this.password.length > 0
      },

      /**
       * passwordCount holds the character count of the
       * current password. It shows the count up to the `secureLength`.
       * @return {Number} Password Character Count
       */
      passwordCount () {
        return this.password && (this.password.length > this.secureLength ? `${this.secureLength}+` : this.password.length)
      },
      /**
       * Changing the input type from password to text
       * based on the local _showPassword data or the showPassword prop
       */
      inputType () {
        return this.$data._showPassword || this.showPassword ? 'text' : 'password'
      },

      showPasswordLabel () {
        return this.$data._showPassword || this.showPassword ? 'Hide password' : 'Show password'
      }
    },

    watch: {
      passwordStrength (score) {
        this.$emit('score', score)
        this.$emit('feedback', zxcvbn(this.password).feedback)
      }
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }

  .Password {
    max-width:  400px;
    margin:  0 auto;
  }

  .password-strength {
      display: flex;
      justify-content: space-between;
  }

  p {
      padding: 0;
      margin: 0;
      color: #8f96a1;
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
  }

  .password-strength-wrapper {
      width: 140px
  }

  .Password__group {
    position: relative;
  }

  .Password__strength-meter {
    position: relative;
    height: 4px;
    background: #c5d0de;
    margin: 0px auto 18px;
    border-radius: 2px;
}

  .Password__strength-meter:before, .Password__strength-meter:after {
    content: '';
    height: inherit;
    background: transparent;
    display: block;
    border-color: #e8edf2;
    border-style: solid;
    border-width: 0 2px;
    position: absolute;
    width: 31px;
    z-index: 10;
  }

  .Password__strength-meter:before {
    left: 84px;
  }

  .Password__strength-meter:after {
    right: 82px;
  }

  .Password__strength-meter--fill {
    background: transparent;
    height: inherit;
    position: absolute;
    width: 0;
    border-radius: inherit;
    transition: width 0.5s ease-in-out, background 0.25s;
  }

  .Password__strength-meter--fill[data-score='0'] {
    background: darkred;
    width: 20%;
  }

  .Password__strength-meter--fill[data-score='1'] {
    background: orangered;
    width: 40%;
  }

  .Password__strength-meter--fill[data-score='2'] {
    background: orange;
    width: 60%;
  }

  .Password__strength-meter--fill[data-score='3'] {
    background: yellowgreen;
    width: 80%;
  }

  .Password__strength-meter--fill[data-score='4'] {
    background: green;
    width: 100%;
  }

  .Password__field {
      position: relative;
      margin-bottom: 10px;
      width: 100%;
      padding: 14px 45px 10px 12px;
      border-radius: 4px;
      border: 1px solid #c5d0de;
      background-color: #ffffff;
      color: #333f52;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
      box-sizing: border-box;
  }

  .Password__icons {
    position: absolute;
    top: -2px;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .Password__toggle {
    line-height: 1.1;
    margin-right: 13px;
  }

  .Password__badge {
    position: relative;
    color: white;
    border-radius: 6px;
    padding: 3px;
    width: 30px;
    height: 15px;
    font-size: 14px;
    line-height: 1.1;
    margin-right: 13px;
  }

  .Password__badge--error {
    background: red;
  }

  .Password__badge--success {
    background: #1bbf1b;
  }

  .btn-clean {
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    color: #777777;
    padding: 0;

    svg {
      fill: currentColor;
    }

    &:hover, &:focus {
      color: #404B69;
    }
  }

</style>
