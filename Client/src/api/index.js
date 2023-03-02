import axios from 'axios'
import Raven from 'raven-js'
import { getAccessToken, createFormDataObj } from '../utils'
import * as actions from '../actions/auth.actions'
import { store } from '../index'

export const baseInstance = axios.create({
    baseURL: 'http://127.0.0.1:80/api',
})

baseInstance.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Raven.captureException(error)
        return Promise.reject(error)
    },
)

baseInstance.interceptors.response.use(
    (response) => response?.data,
    (error) => {
        Raven.captureException(error)
        if (error?.response?.status === 401) {
            const timer = localStorage.getItem('access_token')
            localStorage.clear()
            localStorage.setItem('access_token', timer)

            store.store.dispatch(actions.signOut())
        } else if (error?.response) {
            // Global path to error message
            throw new Error(error?.response?.data?.message)
        } else {
            throw new Error(error?.message)
        }
    },
)

export const api = {
    // User
    getUserInfo() {
        return baseInstance.get('/user')
    },
    signIn(credentials) {
        return baseInstance.post(
            '/user/login',
            createFormDataObj({ ...credentials, grant_type: 'password' }),
        )
    },
    signUp(userInfo) {
        return baseInstance.post('/user/registration', userInfo)
    },
    inviter(params) {
        return baseInstance.get('/user/inviter', params)
    },
    search(clientCredentials){
        console.log(clientCredentials)
        return baseInstance.post('/user/search', clientCredentials)
    }
}
