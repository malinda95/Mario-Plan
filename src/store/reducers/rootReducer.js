import authReducer from './authReducer'
import projectRducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectRducer,
    firestore: firestoreReducer
})
export default rootReducer