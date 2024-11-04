import axios from "axios";
import { useEffect, useState } from "react";

export interface Data {
  id: number;
  name: string;
  phone: number
  email: string;
  address: { 
    city: string,
    street: string,
    suite: string,
    zipcode: string 
  }
  
}

const useData = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    axios.get<Data[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => {setData(response.data); console.log(response.data)})
  },[])
  
  return { data };
}

export default useData;
