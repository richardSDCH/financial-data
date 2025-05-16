import './App.css'
import Table from "./components/Table";
import { useEffect, useState } from "react";
import { fetchLocalDailyData } from "./api/fetchApiData";
import { getDailyTableIndicators } from "./utils/utils";


export default function App() {

  const [dailyData, setDailyData] = useState({});
  const [dailyTableIndicators, setDailyTableIndicators] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      
      try {
        const data = await fetchLocalDailyData();
        setDailyData(data);
      } catch (err) {
        console.error("Error fetching local daily data:", err);
      }
    }

    fetchData();
  }, []);
  
  useEffect(() => {
    
    if (Object.keys(dailyData).length > 0) {
      const indicators = getDailyTableIndicators(dailyData);
      
      setDailyTableIndicators(indicators);
    }
  }, [dailyData]);

  if (Object.keys(dailyTableIndicators).length === 0) {
    return <div className="text-center mt-8">Loading data...</div>;
  }

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <Table category="indices" title="" data={dailyTableIndicators.openingTable || []}/>
        <Table category="indices" title="Indices Europa" data={dailyTableIndicators.indicesEurope || []}/>
        <Table category="indices" title="Indices Asia" data={dailyTableIndicators.indicesAsia || []}/>
        <Table category="bonds" title="Bonos" data={dailyTableIndicators.bonds || []} />
        <Table category="currencies" title="Forex" data={dailyTableIndicators.forex || []} />
        <Table category="M7" title="Las Magníficas 7+ " data={dailyTableIndicators.magnificent7 || []} />
        <Table category="etfs" title="ETFs" data={dailyTableIndicators.etfs || []} />
      </div>
    </>
  )
}

