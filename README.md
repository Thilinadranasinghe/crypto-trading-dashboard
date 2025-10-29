# Crypto Trading Dashboard

A simple web-based dashboard for cryptocurrency trading signals and live prices using the Binance public API.

---

## Features

- **Live Price Feed**: Displays real-time prices for top cryptocurrencies (via Binance public API).
- **Trade Signal Table**: Shows simple demo trading signals (can be replaced with real signals).
- **Trade Parameters**: Entry, leverage, take profit, and stop loss for each coin.
- **Modern React UI**: Fast, responsive, and easy to extend.
- **Ready for Cloud Deployment**: Works with Render (backend) and Vercel/Netlify (frontend).

---

## Project Structure

```
crypto-trading-dashboard/
  backend/
    index.js
    package.json
  frontend/
    public/
      index.html
    src/
      App.js
      index.js
    package.json
  README.md
```

---

## Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/Thilinadranasinghe/crypto-trading-dashboard.git
cd crypto-trading-dashboard
```

---

### 2. Run Locally

#### Backend

```bash
cd backend
npm install
npm start
# Runs on http://localhost:5000
```

#### Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm start
# Runs on http://localhost:3000
```

> **If running locally, edit `frontend/src/App.js` to use `http://localhost:5000` for backend fetches.**

---

## Deployment

### Backend (Node.js API)

**Recommended:** [Render](https://render.com/), [Railway](https://railway.app/)

1. Push this repo to GitHub (already done).
2. Create a new Web Service on Render or Railway.
3. Point it at the `backend/` folder.
4. Set the start command to `npm start`.
5. Deploy and note your backend URL (e.g., `https://your-backend.onrender.com`).

---

### Frontend (React)

**Recommended:** [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)

1. Import this repo on Vercel/Netlify.
2. Set the frontend project root to the `frontend/` folder.
3. Build command: `npm run build`
4. Output directory: `build`
5. Deploy!

> **IMPORTANT**:  
> In `frontend/src/App.js`, update the API base URLs to point to your deployed backend, e.g.:
> ```js
> fetch('https://your-backend.onrender.com/api/prices')
> ```

---

## Extending

- Replace the `signals` endpoint logic in `backend/index.js` with your real trading signal logic or connect to external sources.
- Add authentication, user accounts, or real trading features as needed.

---

## License

MIT License

---

**Made with ❤️ by Thilinadranasinghe & GitHub Copilot**