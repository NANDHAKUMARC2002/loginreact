import privateAPI from "@/api/privateAPI";
import { useEffect,useState } from "react";



const index = () => {
    const [apidata,setApiData] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            const { data} = await privateAPI.get("/products");
            setApiData(data);
        };
        getApi();
    },[]);
  return (
    <div>
      {apiData?.map((item,i) => (
      
      
        <div key={i}>
          <p>{item?.title}</p>
        </div>
        
        
     )) }
    </div>
  );
};

export default index;
