import {combineReducers} from 'redux'
import camperReducer from './reducer_bootcampers'

const rootReducer =combineReducers({
    name: camperReducer
})
export default rootReducer