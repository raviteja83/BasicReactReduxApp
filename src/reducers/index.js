import { combineReducers } from 'redux';

import initialState from './initialState';
import {
    GET_STUDENTS_LOADING,
    GET_STUDENTS_ERROR,
    GET_STUDENTS_SUCCESS
} from '../constants/action-types';

const students = (state = initialState.students, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_STUDENTS_LOADING: {
            return {
                ...state,
                loading: payload
            };
        }

        case GET_STUDENTS_ERROR: {
            return {
                ...state,
                error: payload
            };
        }

        case GET_STUDENTS_SUCCESS: {
            return {
                ...state,
                data: payload
            };
        }

        default:
            return state;
    }
};

export default combineReducers({ students });
