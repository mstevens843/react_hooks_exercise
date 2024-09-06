// Create useFlip hook to manage flippinh state of any card. 
import { useState } from 'react'; 
import axios from "axios";

function useFlip() {
    const [isFlipped, setIsFlipped] = useState(true);

    const flip = () => {
        setIsFlipped(isUp => !isUp)
    };

    return [isFlipped, flip]
}


// Create useAxios Hook to manage API requests and store the fetched data in state.
function useAxios(baseUrl) {
    const [data, setData] = useState([]); 

    const addData = async (urlEnding = "") => {
        const response = await axios.get(`${baseUrl}${urlEnding}`); 
        setData(data => [...data, {...response.data }]); 
    };

    return [data, addData]; 
}





export { useFlip, useAxios }; 

