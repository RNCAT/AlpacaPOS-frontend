import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  admin: null,
  employee: null,
}

const store = new Vuex.Store({
  state,
  getters: {
    admin: (state) => state.admin,
    employee: (state) => state.employee,
  },
  actions: {
    admin(context, admin) {
      context.commit('admin', admin)
    },
    employee(context, employee) {
      context.commit('employee', employee)
    },
  },
  mutations: {
    admin(state, admin) {
      state.admin = admin
    },
    employee(state, employee) {
      state.employee = employee
    },
  },
})

export default store
