<template>
  <v-container>
    <v-layout row wrap v-for="(meetup, i) in meetups" :key="i" class="mb-4">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                  :src="meetup.imageURL"
                  height="130px"
                />
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h2 class="white--text mb-0">{{ meetup.title }}</h2>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="`/meetups/${meetup.id}`">
                    <v-icon left light>arrow_forward</v-icon>
                    View meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      meetups: 'loadedMeetups'
    })
  }
}
</script>
