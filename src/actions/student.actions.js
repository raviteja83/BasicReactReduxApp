import { createAction } from 'redux-actions';
import {
    GET_STUDENTS_SUCCESS,
    GET_STUDENTS_LOADING
} from '../constants/action-types';
import data from '../data';

export const getStudents = () => dispatch => {
    dispatch(getStudentsLoading(true));
    setTimeout(() => {
        dispatch(getStudentsSuccess(data));
        dispatch(getStudentsLoading(false));
    }, 2000);
};

export const getStudentsSuccess = createAction(GET_STUDENTS_SUCCESS);
export const getStudentsLoading = createAction(GET_STUDENTS_LOADING);
