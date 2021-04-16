import { Alert } from 'react-native';
import {ADD_TRANSACTION, DELETE_TRANSACTION,LOGIN_APP,SIGNUPUSER,ACCOUNTINFORMATION,USER} from './types';

export const addTransaction = ({ id, title, price }) => (dispatch) => 
{
    const newTransaction = {
        id,
        title,
        price,
    };
    dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
};
export const uSER = ({username,userid,walletid,walletname,money}) =>(dispatch) =>
{
    const newTransaction={
        username,
        userid,
        walletid,
        walletname,
        money
    };
    dispatch({type:USER,payload:newTransaction});
}
export const LoginApp = ({ username, password,userid }) => (dispatch) =>
{
    const newTransaction= {
        username,
        password,
        userid
    };
    dispatch({ type: LOGIN_APP, payload: newTransaction });
};
export const aCCOUNTINFORMATION = ({Cmnd,Diachi,Matkhau,Ngaysinh,Quequan,Sdt,Ten}) => (dispatch) =>
{
    const newTransaction={
        Cmnd,
        Diachi,
        Matkhau,
        Ngaysinh,
        Quequan,
        Sdt,
        Ten
    };
    dispatch({type:ACCOUNTINFORMATION,payload:newTransaction});
}
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