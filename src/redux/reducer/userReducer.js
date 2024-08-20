
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN_SUCCESS } from '../action/userAction';
const INITIAL_STATE = {
    account: {

        access_token: "",
        refesh_token: "",
        userName: "",
        image: '',
        role: ""
    },
    isauthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log(action)
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refesh_token:action?.payload?.DT?.refresh_token,
                    userName: action?.payload?.DT?.username,
                    image: action?.payload?.DT?.image,
                    role: action?.payload?.DT?.role
                },
                isauthenticated:true
            }

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;