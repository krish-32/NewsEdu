import React, { useState } from 'react'
import "./Header.css";
import { useContext } from 'react';
import DataContext from '../context/DataContext';
const Header = () => {
    const {setInputData,isloading,setIsLoading}=useContext(DataContext);
    const [inputChange,setInputChange] = useState('');
    const setInputDatafunc=async (data)=>{
        setIsLoading(true);
        await setInputData(data);

    }
  return (
    <>
  <header className="border-b border-gray-200 bg-gray-50">
    <div className='header'>
        <div className='item'>
            <h1>News Edu</h1>
        </div> 
        <div className='search'>
            <input
                placeholder="Search Article...."
                className="input"
                name="text"
                type="text"
                disabled={isloading}
                onChange={(e)=>setInputChange(e.target.value)}
            />
            <button className="button" onClick={()=>setInputDatafunc(inputChange)}>
                Search
            </button>
        </div>
    </div>
  </header>
    </>
  )
}

export default Header