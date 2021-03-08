import './App.css';
import {useEffect, useState} from 'react'

function App() {
  let key = '544895fd5a'
  let url = "https://www.live-rates.com/rates?key=544895fd5a";
  const [rates, setRates] = useState([])
  const columns = [{title: "Currency"}, {title: "Rate"}, {title: "Bid"}, {title: "Ask"}, {title: "High"}, 
  {title: "Low"}, {title: "Open"}, {title: "Close"}, {title: "Timestamp"}]

  function getData() {
    fetch(url).then(function (res) {
      if(res.ok) {
        (res.json()).then(function(jsonData) {
          if(jsonData.length > 1) {
            setRates(jsonData)
          }
          else {
            console.log("catch")
          }
        })
      }
      else {
        console.log("error caught")
      }
    })
  }
  setInterval(getData, 20000)
      
  return (
  <div>
    {columns.map((column) => (column.title) + "\t")}
    {
      rates.map((rate) =>
      (
        <div>{rate.currency} {rate.rate} {rate.bid} {rate.ask} {rate.high} {rate.low} {rate.open} {rate.close} {rate.timestamp}</div>
      ))
    }
  </div>
  );
}

export default App;
