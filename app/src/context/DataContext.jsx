import { createContext, useEffect, useState } from "react"
import { BASE_URL } from "../App"
export const dataContext = createContext()
const DataContext = (props) => {
    const [data, setdata] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const getdata = async () => {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setdata(data);
        setFilteredData(data)
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <dataContext.Provider value={{data,filteredData, setFilteredData}}>
            <div>
                {props.children}
            </div>
        </dataContext.Provider>
    )
}
export default DataContext
