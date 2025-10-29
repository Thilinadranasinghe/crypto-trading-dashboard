const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

// Endpoint to get top 10 crypto prices from Binance
app.get('/api/prices', async (req, res) => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
    const coins = [
      'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'XRPUSDT',
      'ADAUSDT', 'DOGEUSDT', 'TONUSDT', 'TRXUSDT', 'LINKUSDT'
    ];
    const data = response.data.filter(item => coins.includes(item.symbol));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prices' });
  }
});

// Placeholder for future 'best signals' endpoint
app.get('/api/signals', (req, res) => {
  const signals = [
    { symbol: 'BTCUSDT', signal: 'BUY', entry: 34000, leverage: 10, takeProfit: 35000, stopLoss: 33500 },
    { symbol: 'ETHUSDT', signal: 'SELL', entry: 1900, leverage: 5, takeProfit: 1850, stopLoss: 1950 },
    { symbol: 'BNBUSDT', signal: 'BUY', entry: 220, leverage: 8, takeProfit: 230, stopLoss: 215 },
    { symbol: 'SOLUSDT', signal: 'BUY', entry: 32, leverage: 12, takeProfit: 35, stopLoss: 30 },
    { symbol: 'XRPUSDT', signal: 'SELL', entry: 0.6, leverage: 6, takeProfit: 0.58, stopLoss: 0.62 },
    { symbol: 'ADAUSDT', signal: 'BUY', entry: 0.3, leverage: 7, takeProfit: 0.33, stopLoss: 0.29 },
    { symbol: 'DOGEUSDT', signal: 'SELL', entry: 0.07, leverage: 10, takeProfit: 0.065, stopLoss: 0.075 },
    { symbol: 'TONUSDT', signal: 'BUY', entry: 2.3, leverage: 8, takeProfit: 2.5, stopLoss: 2.2 },
    { symbol: 'TRXUSDT', signal: 'SELL', entry: 0.1, leverage: 5, takeProfit: 0.095, stopLoss: 0.105 },
    { symbol: 'LINKUSDT', signal: 'BUY', entry: 7.5, leverage: 9, takeProfit: 8, stopLoss: 7.2 }
  ];
  res.json(signals);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
