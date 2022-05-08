<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn @click="dialog = true" icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </template>

    <v-card class="dialog">
      <v-card-title> Contact Me </v-card-title>

      <v-card-text>
        <span class="leave-a-message">
          Please leave a message and I will get in contact as soon as possible,
          thanks!
        </span>

        <br />
        <br />

        <ContactForm
          @loading="onLoading"
          @success="onSuccess"
          @error="onError"
          ref="contactForm"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="loading" color="primary" text @click="dialog = false">
          close
        </v-btn>
        <v-btn
          v-if="!error && !success"
          :disabled="loading"
          color="primary"
          text
          @click="submitForm"
        >
          submit
        </v-btn>
        <v-btn
          v-else-if="!success"
          color="primary"
          text
          @click="resetFormState"
        >
          back
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'AppBarContactModal',
  mounted() {
    console.log(this.$refs.contactForm)
  },
  data() {
    return {
      dialog: false,
      valid: false,
      loading: false,
      success: false,
      error: false,
    }
  },
  methods: {
    submitForm() {
      this.$refs.contactForm.submit()
    },
    resetFormState() {
      this.$refs.contactForm.resetState()
    },
    onLoading(loading) {
      this.loading = loading
    },
    onSuccess(success) {
      this.success = success
    },
    onError(error) {
      this.error = error
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  overflow-y: hidden;
}
</style>
