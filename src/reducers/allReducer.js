
import {nameReducer, emailReducer, passwordReducer} from './usersReducer'

import {combineReducers} from 'redux'

const allReducers = combineReducers ({
    nameReducer, emailReducer, passwordReducer
})

export default allReducers;