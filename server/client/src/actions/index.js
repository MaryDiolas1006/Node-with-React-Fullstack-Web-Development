import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUSer = () => {
//     return function(dispatch) {
//     axios.get('/api/current_user')
//       .then((res) => dispatch({ type: FETCH_USER, payload: res}))
//     }
// }


export const fetchUser = () => async dispatch => {
     const response = await axios.get('/api/current_user')

     dispatch({ type: FETCH_USER, payload: response.data });
}

export const handleToken = (token) => async dispatch => {
     const response = await axios.post('/api/stripe', token);

     dispatch({ type: FETCH_USER, payload: response.data});
}