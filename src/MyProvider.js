const { useState } = require("react");
const { createContext } = require("react");

export const MyContext = createContext();

const MyProvider=(props)=>{
    const [number,setNumber] = useState(0);

    return(
        <MyContext.Provider value={{number,setNumber}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider;