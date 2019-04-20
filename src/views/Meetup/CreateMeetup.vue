<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2 class="secondary--text">Create a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="imageURL"
                label="Image URL"
                id="imageURL"
                v-model="imageURL"
                :rules="[rules.required]"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageURL" height="150">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                v-model="description"
                :rules="[rules.required]"
              ></v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                :disabled="!formIsValid"
                class="primary"
                type="submit"
              >
              Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      rules: {
        required: value => !!value || 'Required'
      },
      title: '',
      location: '',
      imageURL: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageURL !== '' && this.description !== ''
    }
  },
  methods: {
    ...mapActions(['createMeetup']),
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageURL: this.imageURL,
        description: this.description,
        date: new Date(),
        id: '123345678'
      }
      this.createMeetup(meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
