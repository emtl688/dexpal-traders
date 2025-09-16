import React from 'react';
import { Trophy, Users, Calendar, Award, Gift, Globe, Target, Star, Zap, FileText, Video, Database, Home, ExternalLink, DollarSign, Activity } from 'lucide-react';

// Competitions render function
export const renderCompetitions = ({ setActiveDexProfile, setActiveTab }) => {
  const competitionsData = [
    { name: 'dYdX Trading Contest', prize: '$50,000', ends: '5 days', participants: 2341 },
    { name: 'GMX Volume Race', prize: '$25,000', ends: '12 days', participants: 1876 },
    { name: 'Hyperliquid Leaderboard', prize: '$30,000', ends: '8 days', participants: 1524 }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Active Competitions & Incentives</h2>
      
      <div className="grid gap-6">
        {competitionsData.map((comp, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{comp.name}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Trophy className="text-yellow-400" size={16} />
                    <span className="text-yellow-400 font-medium">{comp.prize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="text-blue-400" size={16} />
                    <span className="text-blue-400">Ends in {comp.ends}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-purple-400" size={16} />
                    <span className="text-purple-400">{comp.participants.toLocaleString()} participants</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  const dexName = comp.name.toLowerCase().includes('dydx') ? 'dydx' : 
                                comp.name.toLowerCase().includes('hyperliquid') ? 'hyperliquid' : 'aevo';
                  setActiveDexProfile(dexName);
                  setActiveTab('profiles');
                }}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-all"
              >
                View DEX
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Competition Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <Award className="text-yellow-400 mb-2" size={24} />
            <h4 className="font-bold mb-1">Leaderboard Rankings</h4>
            <p className="text-sm text-indigo-200">Compete for top positions and exclusive rewards</p>
          </div>
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <Gift className="text-green-400 mb-2" size={24} />
            <h4 className="font-bold mb-1">Prize Pools</h4>
            <p className="text-sm text-indigo-200">Guaranteed rewards distributed to winners</p>
          </div>
          <div className="bg-black bg-opacity-20 rounded-lg p-4">
            <Globe className="text-purple-400 mb-2" size={24} />
            <h4 className="font-bold mb-1">Cross-Chain</h4>
            <p className="text-sm text-indigo-200">Compete across all supported DEXs and networks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Roadmap render function
export const renderRoadmap = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white">Product & Roadmap</h2>
    
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">DexPal Beta (Current)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Pair Screener",
            desc: "Real-time tool to compare trading pairs across integrated DEXs. Filter by asset, exchange, or network.",
            status: "Live"
          },
          {
            title: "DEX Profiles", 
            desc: "Comprehensive pages for each supported DEX with qualitative insights and quantitative metrics.",
            status: "Live"
          },
          {
            title: "Competitions & Incentives",
            desc: "Centralized feed of trading competitions, campaigns, and reward programs across the DEX ecosystem.",
            status: "Live"
          },
          {
            title: "Degen Club Reward Hub",
            desc: "Track exclusive perks and bonus rewards from using DexPal affiliate codes on partner DEXs.",
            status: "Live"
          }
        ].map((feature, idx) => (
          <div key={idx} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-white">{feature.title}</h4>
              <span className="bg-green-500 px-2 py-1 rounded text-xs text-white">{feature.status}</span>
            </div>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">Coming Soon</h3>
      <div className="space-y-4">
        {[
          {
            title: "Deals",
            desc: "Claim discounts and offers from DexPal partners in exchange for points",
            timeline: "Q4 2024"
          },
          {
            title: "Earn",
            desc: "Earn DexPal points and rewards for providing liquidity to DEXs",
            timeline: "Q1 2025"
          },
          {
            title: "Analytics",
            desc: "Aggregated trading history across multiple wallets, exchanges and networks",
            timeline: "Q2 2025"
          }
        ].map((feature, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
            <div>
              <h4 className="text-lg font-bold text-white">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
            <span className="bg-yellow-500 px-3 py-1 rounded text-sm text-black font-medium">{feature.timeline}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-xl p-6 text-white">
      <h3 className="text-2xl font-bold mb-4">Timeline</h3>
      <div className="flex flex-wrap gap-6">
        <div className="bg-black bg-opacity-20 rounded-lg p-4 flex-1 min-w-[200px]">
          <div className="text-green-400 font-bold text-sm mb-1">CLOSED BETA</div>
          <div className="text-lg font-bold">Now</div>
          <p className="text-sm text-green-200 mt-1">Exclusive access for early users</p>
        </div>
        <div className="bg-black bg-opacity-20 rounded-lg p-4 flex-1 min-w-[200px]">
          <div className="text-yellow-400 font-bold text-sm mb-1">PUBLIC BETA</div>
          <div className="text-lg font-bold">October 30th</div>
          <p className="text-sm text-green-200 mt-1">Open access with full rewards</p>
        </div>
        <div className="bg-black bg-opacity-20 rounded-lg p-4 flex-1 min-w-[200px]">
          <div className="text-purple-400 font-bold text-sm mb-1">OFFICIAL LAUNCH</div>
          <div className="text-lg font-bold">Q4 2025</div>
          <p className="text-sm text-green-200 mt-1">Full platform release</p>
        </div>
      </div>
    </div>
  </div>
);

// Beta Access render function
export const renderBetaAccess = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl p-8 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Join the Beta</h2>
      <p className="text-xl mb-6 text-purple-100 max-w-2xl mx-auto">
        DexPal is opening up its first round of public access to early users to test the platform
      </p>
      <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-bold text-lg transition-all">
        Apply for Whitelist
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">Beta Benefits</h3>
        <div className="space-y-4">
          {[
            {
              icon: Star,
              title: "Exclusive Collectibles",
              desc: "One-of-a-kind NFTs only available to beta users"
            },
            {
              icon: Zap,
              title: "Points Boosters",
              desc: "Enhanced reward multipliers for the duration of beta"
            },
            {
              icon: Trophy,
              title: "Early Access",
              desc: "Be first to experience new features and competitions"
            },
            {
              icon: Users,
              title: "Community Priority",
              desc: "Direct influence on product development and features"
            }
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
              <benefit.icon className="text-purple-400" size={24} />
              <div>
                <p className="text-white font-medium">{benefit.title}</p>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-4">Beta Requirements</h3>
        <div className="space-y-3">
          <div className="p-3 bg-gray-700 rounded-lg">
            <p className="text-white font-medium">Active DEX Trader</p>
            <p className="text-gray-400 text-sm">Experience with decentralized perpetual trading</p>
          </div>
          <div className="p-3 bg-gray-700 rounded-lg">
            <p className="text-white font-medium">Feedback Provider</p>
            <p className="text-gray-400 text-sm">Willing to provide constructive feedback</p>
          </div>
          <div className="p-3 bg-gray-700 rounded-lg">
            <p className="text-white font-medium">Community Member</p>
            <p className="text-gray-400 text-sm">Join our Discord for updates and discussions</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <Calendar className="text-yellow-400" size={24} />
        <h3 className="text-xl font-bold text-yellow-400">Important Dates</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-3 bg-black bg-opacity-20 rounded-lg">
          <p className="text-yellow-400 font-bold">Closed Beta</p>
          <p className="text-white text-lg">Active Now</p>
        </div>
        <div className="text-center p-3 bg-black bg-opacity-20 rounded-lg">
          <p className="text-yellow-400 font-bold">Public Beta</p>
          <p className="text-white text-lg">October 30th</p>
        </div>
        <div className="text-center p-3 bg-black bg-opacity-20 rounded-lg">
          <p className="text-yellow-400 font-bold">Official Launch</p>
          <p className="text-white text-lg">Q4 2025</p>
        </div>
      </div>
    </div>
  </div>
);
