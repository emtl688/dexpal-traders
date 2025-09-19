# DexPal Traders

A comprehensive React dashboard for DexPal - the first universal rewards program and discovery tool for leveraged trading on DEXs.

## Features

- **Overview**: Mission statement, key metrics, and volume comparison charts
- **Pair Screener**: Real-time tool to compare trading pairs across integrated DEXs
- **DEX Profiles**: Comprehensive pages for each supported DEX with detailed fee structures
- **Degen Club**: Universal rewards program with points, multipliers, and collectibles
- **Competitions**: Active trading competitions and leaderboards
- **Roadmap**: Product timeline and upcoming features
- **Beta Access**: Application form for early access

## Tech Stack

- React 18
- Tailwind CSS for styling
- Recharts for data visualization
- Lucide React for icons

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── DexPalDashboard.js      # Main dashboard component
│   ├── RenderFunctions.js      # Overview, screener, and rewards render functions
│   ├── AdditionalRenderFunctions.js  # Competitions, roadmap, and beta access
│   └── DexProfiles.js          # DEX profiles render function
├── index.js                    # Entry point
└── index.css                   # Global styles with Tailwind

public/
└── index.html                  # HTML template

Configuration files:
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## DEX Integration

The dashboard currently supports:
- **Aevo**: Optimism-based orderbook with token staking discounts
- **HyperLiquid**: High-performance L1 blockchain for perpetual trading
- **dYdX v4**: Cosmos-based decentralized perpetual trading platform

## Features Overview

### Pair Screener
- Filter by DEX, asset, or network
- Real-time price and volume data
- Funding rates and leverage information
- Direct links to DEX profiles

### DEX Profiles
- Detailed fee structures and tier systems
- Referral and discount programs
- Volume-based pricing examples
- Direct trading integration

### Rewards System
- DexPal Points as main reward currency
- XP multipliers for completed tasks
- Collectible NFTs for permanent benefits
- Epoch-based distribution system

### Competitions
- Active trading contests with prize pools
- Cross-chain leaderboards
- Real-time participant tracking
- Direct DEX integration

## Development

The project uses Create React App with Tailwind CSS for styling. All components are modular and can be easily extended or modified.

## License

© 2024 DexPal. Accelerating DeFi adoption through universal rewards.
