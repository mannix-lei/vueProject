import {INCREMETN_REQUEST} from './mutationType'
let mutations = {
  [INCREMETN_REQUEST] (state, payload) {
    state.count += payload.mount
  }
}

export default mutations
