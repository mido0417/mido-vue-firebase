import Vue from 'Vue'
import Vuex from 'Vuex'
// 在這裡宣告例項一個Vue 去引用Vuex狀態管理外掛
// 這樣就可以減少在main.js裡面的程式碼量了
Vue.use(Vuex)
// 返回store例項物件
export default new Vuex.Store({
})