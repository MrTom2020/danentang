import {ADD_TRANSACTION, DELETE_TRANSACTION,LOGIN_APP,SIGNUPUSER,ACCOUNTINFORMATION} from '../actions/types';

const initialState = {
  transactions: [
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
      case ACCOUNTINFORMATION:
        return{
          ...state,
          transactions:[payload,...state.transactions]
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