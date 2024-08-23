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
const getAllUserWithPaginate = (page,limit) => {

   return axios.get(`api/v1/participant?page=${page}&limit=${limit}`)
}
const postLogin = (email,password) => {
   // return axios.post(`api/v1/login`,{ email,p password})
   //có 2 cách
   return axios.post(`api/v1/login`,{
      email:email,password:password,delay:5000
   
   })


}
const postSignUp = (email,password,username) => {
   // return axios.post(`api/v1/login`,{ email,p password})
   //có 2 cách
   return axios.post(`api/v1/register`,{email:email,password:password,username:username})


}
export { PostCreatUser, getAllUser, PutUpdateUser, DeleteUser,getAllUserWithPaginate ,postLogin,postSignUp}
