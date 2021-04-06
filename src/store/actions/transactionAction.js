import { Alert } from 'react-native';
import {ADD_TRANSACTION, DELETE_TRANSACTION,LOGIN_APP,SIGNUPUSER} from './types';

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
    const newTransaction= {
        username,
        password
    };
    dispatch({ type: LOGIN_APP, payload: newTransaction });
};
export const sIGNUPUSER = ({ hoten,matkhau, quequan, ngaysinh,diachi,sdt,cmnd }) => (dispatch) => {
    const newTransaction = {
        hoten,
        matkhau,
         quequan, 
         ngaysinh,
         diachi,
         sdt,
         cmnd
    };
    dispatch({ type: SIGNUPUSER, payload: newTransaction });
};
export const deleteTransaction = (id) => (dispatch) =>
{
    //Alert.alert(JSON.stringify(id));
    dispatch({ type: DELETE_TRANSACTION, payload: id });
};