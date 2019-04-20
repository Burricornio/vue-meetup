import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: '12345',
        title: 'Meetup in New York',
        date: '2017-07-17'
      },
      {
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: '6789',
        title: 'Meetup in Paris',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'Lemmy',
      registeredMeetups: [
        '12345'
      ]
    }
  },
  mutations: {
    createMeetup (state, meetup) {
      state.loadedMeetups.push(meetup)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageURL: payload.imageURL,
        description: payload.description,
        date: payload.date,
        id: payload.id
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetupId === meetup.id
        })
      }
    }
  }
})
