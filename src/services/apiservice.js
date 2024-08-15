import axios from '../ultils/axiosCustomize';

const PostCreatUser = async (email, password, username, role, image) => {
   const data = new FormData();
   data.append('email', email);
   data.append('password', password);
   data.append('username', username);
   data.append('role', role);
   data.append('userImage', image);

   return await axios.post('/api/v1/participant', data)
}

const getAllUser = () => {

   return axios.get('api/v1/participant/all')
}
const PutUpdateUser = async (id, username, role, image) => {
   const data = new FormData();
   data.append('id', id);

   data.append('username', username);
   data.append('role', role);
   data.append('userImage', image);

   return axios.put('/api/v1/participant', data)
}

const DeleteUser = (userId) => {

   return axios.delete('api/v1/participant', { data: { id: userId } })
}
export { PostCreatUser, getAllUser, PutUpdateUser, DeleteUser }
