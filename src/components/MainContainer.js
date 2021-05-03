import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [userStocks, setUserStocks] = useState([])
  const [currentSort, setSort] = useState("")
  const [currentFilter, setFilter] = useState("All")

  function detectSort(event){
    setSort(event.target.value)
  }

  function detectFilter(event){
    setFilter(event.target.value)
  }


  function handleStockClick(name, price, listType){
    if (listType === "listing"){
      setUserStocks([...userStocks, {name,price}])
    }
    else if (listType === "user"){
      setUserStocks((oldList) => oldList.filter(stock => {
        return stock.name !== name
      }))
    }
  }


  return (
    <div>
      <SearchBar detectFilter={detectFilter} detectSort={detectSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer currentFilter={currentFilter} currentSort={currentSort} handleStockClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer  handleStockClick={handleStockClick} userStocks={userStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
