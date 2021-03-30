import { Alert } from 'react-native';
import {ADD_TRANSACTION, DELETE_TRANSACTION,LOGIN_APP} from './types';

export const addTransaction = ({ id, title, price }) => (dispatch) => {
    const newTransaction = {
        id,
        title,
        price,
    };
    dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
};
export const LoginApp = ({ username, password }) => (dispatch) =>
{
    const newTransaction2 = {
        username,
        password
    };
    dispatch({ type: LOGIN_APP, payload: newTransaction2 });
};
export const deleteTransaction = (id) => (dispatch) =>
{
    //Alert.alert(JSON.stringify(id));
    dispatch({ type: DELETE_TRANSACTION, payload: id });
};