import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate ,useOutletContext} from "react-router-dom";
import "./Dashboard.css";
const Watches = ()=>{
    const navigate = useNavigate();
    const { searchQuery } = useOutletContext();
    const [watches,setwatches] = useState([]);
    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:9090/watches");
        const {data} = res;
        setwatches(data);
    };

  const display_singleitem = (watch)=>{
    //console.log(watches);
    navigate(`/watchesdetails`, { state: { watch } }); 
}
    useEffect(()=>{
        get_watches();
    },[]);
     // Filter watches based on the search query
  const filteredwatches = watches.filter((watches) =>
    watches.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <>
             <div className="product-container">
                {filteredwatches.map((watch) => (
                    <div key={watch.pid} className="product-card" onClick={()=> display_singleitem(watch)}>
                    <img src={watch.pimage} alt={watch.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{watch.pname}</div>
                        <div className="product-price">Price: ${watch.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Watches;