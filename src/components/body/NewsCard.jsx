import React, { useContext, useEffect } from 'react'
import DataContext from '../context/DataContext'
import Loading from '../loading/Loading';
import "./NewsCard.css"
import img from "../../assets/NoDataImg.png"
const NewsCard = () => {
    const {news,isloading,newsDescription}=useContext(DataContext);
    const element=[];
    const resLength=news.length;
    if(resLength!==0){
        for(let i=0;i<resLength;i++){
            element.push(<div key={i}>
                            <div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50" id='card'>
                                <div className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
                                    <div className="flex gap-2">
                                        <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                                        </div>
                                    <div>
                                        <p className="text-white"><strong>Title: </strong>{news[i]}</p>
                                        <p className="text-gray-500"><strong>Description: </strong>{newsDescription[i]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>)}
    }else{
        element.push(<div key={resLength} style={{ width: 300, height: 300, overflow: "hidden", margin:'20px 40%'}}><img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} ></img></div>)
    }
  return (
    <>
        {
            isloading?(<Loading/>):(
                <div>
                    {element}
                </div>
                
            )
        }
    </>
  )
}

export default NewsCard