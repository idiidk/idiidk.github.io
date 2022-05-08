<template>
  <v-form ref="form" v-model="valid">
    <v-expand-transition>
      <div :key="1" v-if="!success && !error">
        <v-text-field
          v-model="name"
          :rules="[(v) => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="[
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ]"
          label="E-mail"
          required
        ></v-text-field>

        <v-textarea
          v-model="message"
          :rules="[(v) => !!v || 'Message is required']"
          label="Message"
        ></v-textarea>
      </div>

      <div :key="2" v-else>
        <v-alert v-if="success" text type="success">
          Your message was sent successfully. I look forward to talking to you!
        </v-alert>
        <v-alert v-else-if="error" text type="error">
          Something went wrong while sending your message.
        </v-alert>
      </div>
    </v-expand-transition>
  </v-form>
</template>

<script>
const web3FormsAccessKey = '8d7ae7a1-d7b7-450f-a1a7-4badb5f1ca52'
const web3FormsApiEndpoint = 'https://api.web3forms.com/submit'

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      valid: false,
      success: false,
      error: false,
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true

        const { status } = await fetch(web3FormsApiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
            access_key: web3FormsAccessKey,
          }),
        })

        if (status === 200) {
          this.success = true
        } else {
          this.error = true
        }

        this.loading = false
      }
    },
    resetState() {
      this.valid = true
      this.success = false
      this.error = false
    },
  },
  watch: {
    loading(loading) {
      this.$emit('loading', loading)
    },
    success(success) {
      this.$emit('success', success)
    },
    error(error) {
      this.$emit('error', error)
    },
  },
}
</script>

<style lang="scss" scoped></style>
