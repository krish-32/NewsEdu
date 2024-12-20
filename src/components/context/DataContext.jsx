import React,{createContext, useState,useEffect} from 'react'
const DataContext = createContext({});
export const DataProvider = ({ children }) => {
    const [isloading,setIsLoading]=useState(true);
    const [inputData, setInputData] = useState('today%20headlines');
    const [news ,setNews]=useState([]);
    const [newsDescription ,setnewsDescription]=useState([]);
    useEffect(() => {
            fetch(`https://newedu-50024014869.development.catalystappsail.in/api?title=${inputData}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
                mode:'no-cors'
              })
                .then(response => {
                if (!response.ok) {
                    console.log("vanakkam");
                    
                    throw new Error(`Errorpl:HTTP error! Status : ${response.status}`);
                }
                return response.json() // Parse the response as JSON
                })
                .then(data => {
                //console.log(data);

                setNews(data.title);
                setnewsDescription(data.description)
                })
                .catch(error => {
                console.error('Errorkp:', error.message);
                });
                setTimeout(() => setIsLoading(false), 2500);
    }, [inputData]);

return(
    <DataContext.Provider value={{inputData,setInputData,setIsLoading,isloading,news,setNews,newsDescription,setnewsDescription}}>
        {children}
    </DataContext.Provider>)
}
export default DataContext;