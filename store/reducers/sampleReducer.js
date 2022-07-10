import { GET_SAMPLE, SAMPLE_ERROR,DENEME } from "../types";

const initialState = {
  userLoggedIn :false,
  sample: [],
  loading: true,
  deneme:12,
  names:[],
  socketData:[]
  
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
          userLoggedIn: action.payload,
        loading: false,
      };
      case DENEME:
        return {
          ...state,
          deneme: action.payload,
         
        };
        case 'GET_NAMES_START': return{...state,names:action.payload}
        case 'GET_SOCKET_DATA': return{...state,socketData:action.payload}
    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default sampleReducer;
