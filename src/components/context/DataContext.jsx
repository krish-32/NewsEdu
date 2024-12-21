import React,{createContext, useState,useEffect} from 'react'
const DataContext = createContext({});
import axios from 'axios';
export const DataProvider = ({ children }) => {
    const [isloading,setIsLoading]=useState(true);
    const [inputData, setInputData] = useState('today%20headlines');
    const [news ,setNews]=useState([]);
    const [newsDescription ,setnewsDescription]=useState([]);
    useEffect(() => {
        axios
        .get(`https://newedu-50024014869.development.catalystappsail.in/api?title=${inputData}`, {
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type header
          },
        })
        .then((response) => {
          console.log('data', response.data);
          setNews(response.data.title);
          setnewsDescription(response.data.description);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
                setTimeout(() => setIsLoading(false), 3000);
    }, [inputData]);

return(
    <DataContext.Provider value={{inputData,setInputData,setIsLoading,isloading,news,setNews,newsDescription,setnewsDescription}}>
        {children}
    </DataContext.Provider>)
}
export default DataContext;