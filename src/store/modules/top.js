
import { login, CheckInvitationCode } from '@/api/api'

const state = {	// 要设置的全局访问的state对象
	count: 2,
	isShow: true,
	token: 'okhgsb2jwsssfcbu2fsd'
}
const getters = {
		getStateCount: (state) => {
      return state.count + 1
		},
		getShow (state) {
			return state.isShow
		}

}
const mutations = {
	COUNT_ADD: (state, n) => {
		state.count = state.count + n
	},
	COUNT_REDUCE: (state) => {
		state.count = state.count - 1
	}
}
const actions = {
	addFun: ({commit, dispatch}, n) => {
		commit('COUNT_ADD', n)
		dispatch('request')
	},
	reducFunc: ({commit}) => {
		commit('COUNT_REDUCE')
	},
	request: () => {
		login({clinic_note: 'jjj', id: 1, userId: 2, token: 'sssss'}).then(res => {
			console.log(res)
		})
		CheckInvitationCode({token: 'sssss', a: 2}).then(res => {
			console.log(res)
		})
	}
}
export default {
  namespaced: true, // 用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
