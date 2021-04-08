import {ADD_TRANSACTION, DELETE_TRANSACTION,LOGIN_APP,SIGNUPUSER} from '../actions/types';

const initialState = {
  transactions: [
    /* {id: 1, title: 'Đi chợ', price: -20},
     {id: 2, title: 'Thu nhập', price: 2900},
     {id: 3, title: 'Mua tả cho con', price: -10},
     {id: 4, title: 'Mua thẻ nạp', price: -150},
     {id: 5, title: 'Sửa LapTop', price: -150},
     {id: 6, title: 'Mua trái cây', price: -10},
     {id: 7, title: 'Mua dép', price: -20},*/
  ],
};

export default (state = initialState, {type, payload}) => {
  switch (type)
  {
    case LOGIN_APP:
      return {
        ...state,
        transactions: [payload,...state.transactions] ,
      };
      case SIGNUPUSER:
        return{
          ...state,
          transactions:[payload,...state.transactions]
        }
    case ADD_TRANSACTION:
      return {
          ...state,
          transactions:[payload,...state.transactions]
      };
    case DELETE_TRANSACTION:
      return {
          ...state,
          transactions: state.transactions.filter(({id}) => id !== payload),
      };
    default:
      return state;
  }
};