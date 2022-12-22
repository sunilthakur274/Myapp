import { createContext, useState } from 'react';
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import { Child1 } from './Practice/child1';
import Api from './Practice/components/Api';
import Memo from './Practice/components/UseMemo';
import Form from './Test.js/Form';
import Listdata from './Practice/TodoList/Iistdata';
import Weather from './Practice/components/Weather';
import Login from './Test.js/Login';
import PostData from './Test.js/ApiData';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GetData from './Test.js/getData';
import Search from './Search/search';
import Child3 from './Practice/child3';
import Child2 from './Practice/child2';
import Appss from './Login/App';

const text = createContext()

const App = () => {

  const[data,setData] = useState(0);

  // const handleChange = () =>
  // {
  //     setData(data+1) 
  // }

  

  return(<>
{/* 
          <text.Provider value={t1}>
            <text2.Provider value={t2}>
              <Child1/>
            </text2.Provider>
          </text.Provider> */}
          
          {/* <Navbar />  */}
          {/* <Api /> */}
          {/* <Memo /> */}

          {/* <Form/> */}
          {/* <Listdata /> */}
          {/* <Weather/> */}
          {/* <Login /> */}

          {/* <PostData /> */}
{ /* 
          <Routes>
              <Route path='/' element={<PostData />} handleChange={handleChange}/>
              <Route path='/GetData' element={<GetData />}/>
          </Routes> */}
            {/* <Search/> */}
{/* 
            <text.Provider value={data}>
              <Child3/>
            </text.Provider>
  
      <button onClick={handleChange}>Submit</button> */}

      {/* <Child1>
          <div>dc;lmc</div>
          <div>Dcsdclmsdncvdlcje</div>
      </Child1> */}

      {/* <VehiclesTable /> */}

      <Appss />

  </>)
}
export default App;
export {text} ;