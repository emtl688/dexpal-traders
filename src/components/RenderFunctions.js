import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Zap, Trophy, Users, Target, Calendar, ExternalLink, Star, Gift, Award, DollarSign, Activity, Globe, FileText, Video, Database, Home } from 'lucide-react';

// StatCard component
export const StatCard = ({ title, value, subtitle, icon: Icon, trend, color = 'purple' }) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium">{title}</p>
        <p className="text-purple-400 text-2xl font-bold mt-1">{value}</p>
        {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        {trend && (
          <div className="flex items-center mt-2 text-green-400 text-sm">
            <TrendingUp size={14} className="mr-1" />
            {trend}
          </div>
        )}
      </div>
      <Icon className="text-purple-500" size={24} />
    </div>
  </div>
);

// Overview render function
export const renderOverview = () => (
  <div className="space-y-6">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-8 text-white">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to DexPal</h1>
        <p className="text-xl mb-6 text-purple-100">
          The first universal rewards program and discovery tool for leveraged trading on DEXs
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all">
            Join Beta Access
          </button>
          <button className="bg-transparent border border-purple-400 hover:bg-purple-400 hover:bg-opacity-20 px-6 py-3 rounded-lg font-semibold transition-all">
            View Screener
          </button>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total Volume"
        value="$165M"
        subtitle="Across all DEXs"
        icon={Activity}
        trend="+12.5%"
      />
      <StatCard
        title="Active Traders"
        value="8,432"
        subtitle="This epoch"
        icon={Users}
        trend="+8.2%"
      />
      <StatCard
        title="Rewards Distributed"
        value="$2.1M"
        subtitle="All time"
        icon={Gift}
        trend="+24.1%"
      />
      <StatCard
        title="DexPal Points"
        value="--"
        subtitle="Connect wallet to view"
        icon={Star}
      />
    </div>

    {/* Mission */}
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <Target className="text-purple-500" size={24} />
        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
      </div>
      <p className="text-gray-300 text-lg">
        DexPal's mission is to accelerate DeFi adoption by empowering traders to shift from centralized 
        platforms to decentralized protocols through transparent rewards, aggregated data, and seamless user experience.
      </p>
    </div>

    {/* Volume Chart */}
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">DEX Volume Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={[
          { name: 'dYdX', volume: 45000, fees: 1200 },
          { name: 'GMX', volume: 32000, fees: 890 },
          { name: 'Gains', volume: 28000, fees: 756 },
          { name: 'Hyperliquid', volume: 38000, fees: 1050 },
          { name: 'Vertex', volume: 22000, fees: 620 }
        ]}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1F2937', 
              border: '1px solid #6B7280',
              borderRadius: '8px'
            }} 
          />
          <Bar dataKey="volume" fill="#8B5CF6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// Screener render function
export const renderScreener = ({ selectedDex, setSelectedDex, setActiveDexProfile, setActiveTab, dexProfiles }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-3xl font-bold text-white">Pair Screener</h2>
      <select 
        value={selectedDex}
        onChange={(e) => setSelectedDex(e.target.value)}
        className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white"
      >
        <option value="all">All DEXs</option>
        <option value="dydx">dYdX</option>
        <option value="gmx">GMX</option>
        <option value="hyperliquid">Hyperliquid</option>
      </select>
    </div>

    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pair</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Exchange</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">24h Volume</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Funding Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Max Leverage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {[
              { pair: 'BTC/USD', exchange: 'dYdX', price: '$43,250', volume: '$12.5M', funding: '0.0125%', leverage: '20x' },
              { pair: 'ETH/USD', exchange: 'GMX', price: '$2,850', volume: '$8.2M', funding: '0.0089%', leverage: '50x' },
              { pair: 'SOL/USD', exchange: 'Hyperliquid', price: '$165', volume: '$5.1M', funding: '0.0156%', leverage: '25x' },
              { pair: 'AVAX/USD', exchange: 'Gains', price: '$42.1', volume: '$2.8M', funding: '0.0098%', leverage: '100x' },
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-750">
                <td className="px-6 py-4 whitespace-nowrap text-white font-medium">{row.pair}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => {
                      const dexKey = row.exchange.toLowerCase().replace(' ', '');
                      if (dexProfiles[dexKey]) {
                        setActiveDexProfile(dexKey);
                        setActiveTab('profiles');
                      }
                    }}
                    className="text-purple-400 hover:text-purple-300 transition-all"
                  >
                    {row.exchange}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-green-400">{row.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">{row.volume}</td>
                <td className="px-6 py-4 whitespace-nowrap text-yellow-400">{row.funding}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-400">{row.leverage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Rewards render function
export const renderRewards = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-xl p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">The Degen Club</h2>
      <p className="text-xl mb-6 text-purple-100">
        Universal Rewards Program - Earn rewards on every trade across any DEX, any chain
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black bg-opacity-20 rounded-lg p-4">
          <Star className="text-yellow-400 mb-2" size={24} />
          <h3 className="font-bold mb-1">DexPal Points</h3>
          <p className="text-sm text-purple-200">Main reward currency representing your contribution</p>
        </div>
        <div className="bg-black bg-opacity-20 rounded-lg p-4">
          <Zap className="text-blue-400 mb-2" size={24} />
          <h3 className="font-bold mb-1">XP Multipliers</h3>
          <p className="text-sm text-purple-200">Boost your points through completed tasks and quests</p>
        </div>
        <div className="bg-black bg-opacity-20 rounded-lg p-4">
          <Trophy className="text-purple-400 mb-2" size={24} />
          <h3 className="font-bold mb-1">Collectibles (NFTs)</h3>
          <p className="text-sm text-purple-200">Permanent benefits and exclusive access</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Reward Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={[
                { name: 'Points', value: 65, color: '#8B5CF6' },
                { name: 'Cashbacks', value: 25, color: '#A855F7' },
                { name: 'Collectibles', value: 10, color: '#C084FC' }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {[
                { name: 'Points', value: 65, color: '#8B5CF6' },
                { name: 'Cashbacks', value: 25, color: '#A855F7' },
                { name: 'Collectibles', value: 10, color: '#C084FC' }
              ].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">How to Earn Rewards</h3>
        <div className="space-y-3">
          {[
            { icon: DollarSign, title: 'Volume Traded', desc: 'Trade using DexPal affiliate codes' },
            { icon: Users, title: 'Referral Activity', desc: 'Invite friends and earn from their trades' },
            { icon: Trophy, title: 'Competitions', desc: 'Rank in leaderboards and contests' },
            { icon: Target, title: 'Tasks & Quests', desc: 'Complete specific challenges' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <item.icon className="text-purple-400" size={20} />
              <div>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Reward Timeline</h3>
        <div className="bg-purple-600 px-3 py-1 rounded-full text-sm text-white">
          Next epoch: Oct 30th
        </div>
      </div>
      <p className="text-gray-300 mb-4">
        All affiliate income goes into a prize pool, fully redistributed to eligible participants at the end of each epoch.
      </p>
      <div className="text-yellow-400 bg-yellow-400 bg-opacity-10 p-4 rounded-lg">
        <p className="font-medium">🎁 Full details of the point program and epoch lengths will be revealed on October 30th!</p>
      </div>
    </div>
  </div>
);
