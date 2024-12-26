import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate ,useOutletContext} from "react-router-dom";
import "./Dashboard.css";
const Pods = ()=>{
    const navigate = useNavigate();
    const { searchQuery } = useOutletContext();
    const [pods,setpods] = useState([]);
    const get_pods = async ()=>{
        const res = await axios.get("http://localhost:9090/pods");
        const {data} = res;
        setpods(data);
    };

  const display_singleitem = (pod)=>{
    //console.log(pods);
    navigate(`/podsdetails`, { state: { pod } }); 
}
    useEffect(()=>{
        get_pods();
    },[]);
     // Filter pods based on the search query
  const filteredpods = pods.filter((pods) =>
    pods.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <>
             <div className="product-container">
                {filteredpods.map((pod) => (
                    <div key={pod.pid} className="product-card" onClick={()=> display_singleitem(pod)}>
                    <img src={pod.pimage} alt={pod.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{pod.pname}</div>
                        <div className="product-price">Price: ${pod.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Pods;