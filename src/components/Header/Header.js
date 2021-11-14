import React from 'react';
import {useDispatch} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
  return (
    <div className='header'>
      <h1>Personal Library</h1>
        <button onClick={()=>{
            dispatch(logout())
        }}>
            Logout
        </button>
        <button className='user-btn' onClick={()=> dispatch()}> >
            Get User Data
        </button>
    </div>
  );
};

export default Header;
