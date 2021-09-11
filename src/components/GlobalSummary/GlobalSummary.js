import { useEffect, useState } from "react";

function GlobalSummary () {
    const [globalSummaryData, setGlobalSummaryData] = useState ([]);
    const getApiData = async () => {
        
        // API 1
        // const url = "https://api.covid19api.com/summary";
        
        // API 2
        const url = "https://covid-api.mmediagroup.fr/v1/cases";
        
        console.log(url);
        try {
            const response = await fetch (url);
            const data = await response.json();
        
            // API 1
            // console.log(data.Global);
            // setGlobalSummaryData(data.Global);
            
            // API 2
            console.log(data.Global.All);
            setGlobalSummaryData(data.Global.All);
        } catch (error) {
            console.log(error);
        }      
    }

    useEffect (() => {
        getApiData();
    }, []);

    return (
        <div className = "globalSummaryData">
            <h2>Global Summary Data</h2>
            {/* API 1 */}
            {/* <li>New Confirmed: {globalSummaryData.NewConfirmed}</li>
            <li>New Deaths: {globalSummaryData.NewDeaths}</li>
            <li>New Recovered: {globalSummaryData.NewRecovered}</li>
            <li>Total Confirmed: {globalSummaryData.TotalConfirmed}</li>
            <li>Total Deaths: {globalSummaryData.TotalDeaths}</li>
            <li>Total Recovered: {globalSummaryData.TotalRecovered}</li> */}
            
            {/* API 2 */}
            <div className = "data">
                <li>Confirmed: {globalSummaryData.confirmed}</li>
                <li>Recovered: {globalSummaryData.recovered}</li>
                <li>Deaths: {globalSummaryData.deaths}</li>
            </div>
        </div>
    );
}

export default GlobalSummary;