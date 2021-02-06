import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Комбинация редюсеров (пока один но мы ж на большой рынок стремимся:D)
const appReducers = combineReducers({
  tasks: reducers.tasks
})

// Композиция разных добавочек, например мидлвара thunk для асинхронных экшенов,
// потому что изначально редакс экшены только синхронные
const enhancer = compose(applyMiddleware(thunk))

// криейтим стор с нашими редюсерами и доплнительной ебалой
export default createStore(appReducers, enhancer)
