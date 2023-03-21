import { createStore, Store, useStore as baseUseStore, ActionTree, GetterTree } from 'vuex'
import { InjectionKey } from 'vue'
import axios from 'axios'

export type Category = { id: number, libelle: string, user_id: number, createdAt?: string, updatedAt?: string }
export type Concert = { id: number, nom: string, description?: string, image?: string, date: string, heure: string, categorie_id: number, user_id: number, createdAt?: string, updatedAt?: string }
export type User = { id: number, login: string, password: string, role: string, createdAt?: string, updatedAt?: string }
export type State = { categories: Category[], concerts: Concert[], users: User[] }

const state: State = {
    categories: [],
    concerts: [],
    users: []
}

const URL_API = "http://localhost:8082/api";

const getters: GetterTree<State, State> = {
    getAllConcerts: (state) => {
        return state.concerts
    },
    getAllCategories: (state) => {
        return state.categories
    },
    getAllUsers: (state) => {
        return state.users
    },
    getConcertsById: (state) => (id: number) => {
        return state.concerts.filter(concert => concert.id === id)
    },
    getCategoryById: (state) => (id: number) => {
        return state.categories.filter(category => category.id === id)
    },
    getUserById: (state) => (id: number) => {
        return state.users.filter(user => user.id === id)
    }
}

const actions : ActionTree<State, State> = {
    login(username, password) {
        return axios.post(`${URL_API}/user/login`, { username, password })
    },
    getUsers(context) {
        return axios.get(`${URL_API}/user`)
            .then(response => {
                context.commit('setUsers', response.data)
            })
    },
    logout() {
        return axios.post(`${URL_API}/user/logout`)
    },
    deleteUser(context,userId) {
        return axios.delete(`${URL_API}/user/${userId}`)
    },
    getCategories(context) {
        return axios.get(`${URL_API}/categories`)
            .then(response => {
                context.commit('setCategories', response.data)
            })
    },
    getCategory(context,categoryId) {
        return axios.get(`${URL_API}/categories/${categoryId}`)
    },
    addCategory(context,newCategory) {
        return axios.post(`${URL_API}/categories`, newCategory)
    },
    updateCategory(context,category) {
        return axios.put(`${URL_API}/categories/${category.id}`, category)
    },
    deleteCategory(context,categoryId) {
        return axios.delete(`${URL_API}/categories/${categoryId}`)
    },
    addConcert(context,newConcert) {
        return axios.post(`${URL_API}/concerts`, newConcert)
    },
    updateConcert(context,concert) {
        return axios.put(`${URL_API}/concerts/${concert.id}`, concert)
    },
    deleteConcert(context,concertId) {
        return axios.delete(`${URL_API}/concerts/${concertId}`)
    },
    async getConcerts(state) {
        const concerts = await axios.get(`${URL_API}/concerts`)
        state.commit('setConcerts', concerts.data)
    }
}

export const store = createStore<State>({ state, actions })

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
    return baseUseStore(key);
}
    