import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollars, setDollars] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setSelectedCoin(json[0].quotes.USD.price);
      });
  }, []);
  const onDollarChange = (event) => {
    setDollars(event.target.value);
  };
  const onSelectChange = (event) => {
    setSelectedCoin(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setResult(dollars / selectedCoin);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelectChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input
          onChange={onDollarChange}
          value={dollars}
          type="number"
          placeholder="how much do you have?"
        ></input>
        <button>exchange</button>
      </form>
      {result === null ? null : <span>You can get {result} coins</span>}
    </div>
  );
}

export default App;
