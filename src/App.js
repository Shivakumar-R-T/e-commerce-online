//https://dummyjson.com/products
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { axiosClient } from './axiosClient';
import Home from './Components/Home/Home';
import CustomRoutes from './CustomRoutes';
import {addtoStore, ADD_TO_Store} from './Store/actions'

function App() {
  const dispatch=useDispatch();
  const store=useSelector((state)=>state);
  useEffect(()=>{
    axiosClient.get("").then((resp)=>{
      dispatch({
       type:ADD_TO_Store,
       payload:resp?.data?.products
        
      })
      console.log(resp?.data?.products)
    })
    console.log(store)

  },[])
  return (
    <div className="App">
     <Home />
     <CustomRoutes/>
    </div>
  );
}

export default App;
