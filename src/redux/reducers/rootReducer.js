// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'

const rootReducer = combineReducers({
  auth,
  chat,
  users,
  navbar,
  layout,
  invoice
})

export default rootReducer
