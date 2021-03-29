import { Alert } from 'react-native';
import {ADD_TRANSACTION, DELETE_TRANSACTION} from './types';

export const addTransaction = ({ id, title, price }) => (dispatch) => {
    const newTransaction = {
        id,
        title,
        price,
    };
    dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
};

export const deleteTransaction = (id) => (dispatch) =>
{
    //Alert.alert(JSON.stringify(id));
    dispatch({ type: DELETE_TRANSACTION, payload: id });
};