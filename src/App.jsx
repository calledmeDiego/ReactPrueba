import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Components/Table.jsx";

function App() {
    const [coins, setCoins] = useState([]);

    const [search, setSearch] = useState("");

    const getData = async () => {
        try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            setCoins(res.data);
            console.log(res.data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    },[]);

    return(
        <div className="container">
            <div className="row">
                <input type="text"
                
                className="form-control text-light bg-dark text-light border-0 mt-4 text-center " autoFocus onChange={(event)=>setSearch(event.target.value)}/>
                <Table coins={coins} search={search}> </Table>
            </div>
        </div>
    );
}

export default App;