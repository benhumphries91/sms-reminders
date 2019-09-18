<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="column col-12 form-container">
          <h1>Send SMS Reminder</h1>

          <div class="row">
            <div class="column col-6">
              <LabelledInput
                class="enquiry-form__input"
                type="text"
                name="name"
                label="Name"
              />

              <LabelledInput
                class="enquiry-form__input"
                type="text"
                name="telephone-number"
                label="Telephone Number"
              />

              <LabelledInput
                class="enquiry-form__input"
                type="text"
                name="reminder-type"
                label="Reminder Type"
              />
            </div>

            <div class="column col-6">
              <LabelledInput
                class="enquiry-form__input"
                type="textarea"
                name="message"
                label="Reminder Message"
              />
            </div>

            <div class="column col-12">
              <button type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import LabelledInput from "@/components/molecules/labelled-input/LabelledInput.vue";

export default {
  name: "home",
  components: {
    LabelledInput
  }
};
</script>
<style lang="scss">
.form-container {
  background-color: transparentize($color: $secondary, $amount: 0.1);
  border-radius: $border-radius-lg;
  min-height: 80vh;
  text-align: center;
}
</style>
