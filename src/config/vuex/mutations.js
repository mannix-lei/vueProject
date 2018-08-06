import Store from './store'

let mutations = {
  increment () {
    Store.state.count++
  }
}

export default mutations
