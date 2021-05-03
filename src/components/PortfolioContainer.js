import React from "react";
import Stock from "./Stock";

function PortfolioContainer({userStocks, handleStockClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        userStocks.map((stock)=>{
          return <Stock handleStockClick={handleStockClick} listType="user" key={stock.name} {...stock}/>
        })
      }
    </div>
  );
}

export default PortfolioContainer;
