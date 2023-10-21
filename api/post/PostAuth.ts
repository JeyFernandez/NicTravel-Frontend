import axios from "axios";

import apiConfig from "../apiConfig";

interface Data {
  name: string, 
  email: string, 
  password: any, 
  tel: number
}

async function PostAuth({ name, email, password, tel }: Data) {

  await axios.post(`${apiConfig.baseURL}users`, {
    name: name,
    email: email,
    password: password,
    telefono: tel,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiConfig.apiKey}`,
    },
  })
    .then((response) => {
      return(response.data);
    }) 
    .catch((error) => {
      return('Error');
    })
}
//Primero verificar si ya existe el registro
export default PostAuth;