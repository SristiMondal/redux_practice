import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAction } from "./redux/action/useAction"; 
import User from "./component/User";

function App() {

  const dispatch=useDispatch();
  const userList=useSelector(state=>state.userList)
  const {loading, users, error} = userList;

  useEffect(()=>{
    dispatch(useAction())
  },[dispatch])

  return (
    <div className="App">
      <h1>Redux Thunk</h1>
      {
        loading?<h1>Loading...</h1>:error?<h2>{error}</h2>:<User user={users} />
      }
    </div>
  );
}


export default App;
