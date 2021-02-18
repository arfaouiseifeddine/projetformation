import axios from 'axios'
import {
    USER_LOADING,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    GET_AUTH_USER,
    AUTH_ERROR,
    GET_USERS,
    
} from "../constants/ActionsTypes";


//get user loading
const userLoading = () => (dispatch) => {
    dispatch({
        type : USER_LOADING,
    });
};

// register user

export const register = (fromData) => async dispatch => {
    dispatch(userLoading());
    try {
        const res = await axios.post('/api/auth/register', fromData);
        dispatch ({
            type: REGISTER_USER,
            payload:res.data,
        })
    } catch (error) {
        console.log(error);
    }
};


//login user

export const loginUser = (fromData) => async dispatch => {
    dispatch(userLoading());
    try {
        const res = await axios.post('/api/auth/login', fromData);
        dispatch ({
            type: LOGIN_USER,
            payload:res.data,
        })

    } catch (error) {
        console.dir(error);
        const { errors , msg } = error.response.data;

        if (Array.isArray(errors)) {
            errors.forEach((err) => alert(err.msg));
        }

        if (msg){
            alert (msg);
        }

        dispatch({
            type:AUTH_ERROR,
        });

    }
};



//get auth user
export const getAuthUser = () => async dispatch => {
    dispatch(userLoading());
    try {
       const config = { 
           headers:
           {
           'x-auth-token' : localStorage.getItem ('token')},
        
        };


        const res = await axios.get('/api/auth/user', config);
        dispatch({
            type: GET_AUTH_USER,
            payload:res.data ,
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type:AUTH_ERROR,
        });
    }
}



export const logout = () => (dispatch) => {
    dispatch({
        type : LOGOUT_USER,
    });
};

// get all users
export const getUsers = () => dispatch => {
    axios.get("/api/auth/")
    .then(res => dispatch({type:GET_USERS,payload:res.data}))
    .catch(err => console.log(err))
}

//DELETE USER 
export const deleteUser = (idUser) => dispatch => {
    axios.delete(`/api/auth/delete/${idUser}`)
    .then((res) => dispatch(getUsers()))
    .catch((err)=> console.log(err))
}



//edit user
export const editUser = (idUser,editUser) => dispatch => {
    axios.put(`/api/auth/edit/${idUser}`,editUser)
    .then((res) => dispatch(getUsers()))
    .catch((err)=> console.log(err))
}