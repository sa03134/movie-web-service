import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [inputUSD, setInputUSD] = useState(0);

  const onChange = (event) => {
    setInputUSD(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong> Loading... </strong>
      ) : (
        <div>
          <input type="number" onChange={onChange} placeholder="0 USD"></input>
          <h1>get coins with {inputUSD} $ </h1>
          <ul>
            {coins.map((coin) => (
              <li>
                {inputUSD / coin.quotes.USD.price}
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
