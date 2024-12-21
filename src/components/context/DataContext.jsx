import React,{createContext, useState,useEffect} from 'react'
const DataContext = createContext({});
import axios from 'axios';
export const DataProvider = ({ children }) => {
    const [isloading,setIsLoading]=useState(true);
    const [inputData, setInputData] = useState('today%20headlines');
    const [news ,setNews]=useState([]);
    const [newsDescription ,setnewsDescription]=useState([]);
    useEffect(() => {
            axios.get(`https://newedu-50024014869.development.catalystappsail.in/api?title=${inputData}`)
                .then((response) => {
                    console.log("data",response);
                    
                    setNews(response.title);
                    setnewsDescription(response.description)
                })
                .catch((error) => {
                    console.error('Errorkp:', error);
                });
                setTimeout(() => setIsLoading(false), 2500);
    }, [inputData]);

return(
    <DataContext.Provider value={{inputData,setInputData,setIsLoading,isloading,news,setNews,newsDescription,setnewsDescription}}>
        {children}
    </DataContext.Provider>)
}
export default DataContext;