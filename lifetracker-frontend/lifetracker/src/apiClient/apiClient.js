import axios from "axios"

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
    this.token = null
    this.tokenName = "lifetracker_token"
  }

  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : "",
    }

    try {
      const res = await axios({ url, method, data, headers })
      return { data: res.data, error: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error:")
      console.error({ errorResponse: error.response })
      const message = error?.response?.data?.error?.message
      return { data: null, error: message || String(error) }
    }
  }

  async createNutrition(nutrition) {
    return await this.request({ endpoint: `nutrition`, method: `POST`, data: { nutrition } })
  }

  async createExercise(exercise) {
    return await this.request({ endpoint: `exercise`, method: `POST`, data: { exercise } })
  }

  async createSleep(sleep) {
    return await this.request({ endpoint: `sleep`, method: `POST`, data: { sleep } })
  }

  async fetchUserActivity() {
    return await this.request({ endpoint: `activity`, method: `GET` })
  }

  async fetchUserExercise() {
    return await this.request({ endpoint: `exercise`, method: `GET` })
  }

  async fetchUserNutrition() {
    return await this.request({ endpoint: `nutrition`, method: `GET` })
  }

  async fetchUserSleep() {
    return await this.request({ endpoint: `sleep`, method: `GET` })
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` })
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    console.log(this.token)
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
  }

  async logoutUser() {
    this.setToken(null)
    localStorage.setItem(this.tokenName, "")
  }
}

const API = new ApiClient("http://localhost:3003")

export default API
