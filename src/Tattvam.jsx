import './App.css'
import TableTattvam from "./components/TableTattvam";
import { useEffect, useState } from "react";
import { fetchLocalApiDailyData, fetchManualDailyData } from "./api/fetchApiData";
import { getDailyTableIndicators } from "./utils/utils";


export default function Tattvam() {

  const [dailyData, setDailyData] = useState({});
  const [dailyTableIndicators, setDailyTableIndicators] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await fetchLocalApiDailyData();   //Fetch Yahoo API data
        const manualData = await fetchManualDailyData();  //Fetch manually added data
        const fetchedData = { ...apiData, ...manualData };
        setDailyData(fetchedData);
      } catch (err) {
        console.error("Error fetching daily data:", err);
      }
    }
    fetchData();
  }, []);
  
  useEffect(() => {
    
    if (Object.keys(dailyData).length > 0) {
      const indicators = getDailyTableIndicators(dailyData, 'Tattvam');
      
      setDailyTableIndicators(indicators);
    }
  }, [dailyData]);

  if (Object.keys(dailyTableIndicators).length === 0) {
    return <div className="text-center mt-8">Loading data...</div>;
  }

  const tattvamMagnificent7 = dailyTableIndicators.magnificent7.slice(0, 7);

  return (
    <>
      <div className="mt-8 flex flex-col items-center">
        <TableTattvam category="indices" title="" data={dailyTableIndicators.openingTable || []}/>
        <TableTattvam category="indices" title="Indices Europe" data={dailyTableIndicators.indicesEurope || []}/>
        <TableTattvam category="indices" title="Indices Asia" data={dailyTableIndicators.indicesAsia || []}/>
        <TableTattvam category="bonds" title="Bonds" data={dailyTableIndicators.bonds || []} />
        <TableTattvam category="currencies" title="Forex" data={dailyTableIndicators.forex || []} />
        <TableTattvam category="M7" title="The Magnificent 7" data={tattvamMagnificent7 || []} />
        <TableTattvam category="etfs" title="ETFs" data={dailyTableIndicators.etfs || []} />
      </div>
    </>
  )
}