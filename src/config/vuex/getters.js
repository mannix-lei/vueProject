
let getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
export default getters
