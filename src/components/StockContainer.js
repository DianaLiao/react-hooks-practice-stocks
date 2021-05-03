import React, {useState, useEffect} from "react";
import Stock from "./Stock";

function StockContainer({handleStockClick, currentSort, currentFilter}) {

  const [stocks, setStocks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
      .then(resp=>resp.json())
      .then(data => setStocks(data))
  }, [])

  let sortedStocks = [...stocks]

    if (currentSort === "Alphabetically"){
      sortedStocks = stocks.sort((a,b) => a.name.localeCompare(b.name))
    }
    else if (currentSort === "Price"){
      sortedStocks = stocks.sort((a,b)=> a.price-b.price)
    }



  let filteredStocks = sortedStocks.filter((stock)=>{
    if (currentFilter === "All"){
      return true
    }
    else {
      return stock.type === currentFilter
    }
    })


  return (
    <div>
      <h2>Stocks</h2>
      {filteredStocks.map(stock => {
        return <Stock listType="listing" handleStockClick={handleStockClick} key={stock.id} {...stock}/>
      })}
    </div>
  );
}

export default StockContainer;
