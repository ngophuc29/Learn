import axios from '../ultils/axiosCustomize';

const PostCreatUser = async (email, password, username, role, image) => {
   const data = new FormData();
   data.append('email', email);
   data.append('password', password);
   data.append('username', username);
   data.append('role', role);
   data.append('userImage', image);

   return await axios.post('http://localhost:8081/api/v1/participant', data)
}

const getAllUser = () => {

   return  axios.get('http://localhost:8081/api/v1/participant/all' )
}
export { PostCreatUser ,getAllUser }