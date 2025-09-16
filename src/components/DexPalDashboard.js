import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Zap, Trophy, Users, Target, Calendar, ExternalLink, Star, Gift, Award, DollarSign, Activity, Globe, ChevronRight, ChevronDown, FileText, Video, Database, Home } from 'lucide-react';
import { renderOverview, renderScreener, renderRewards } from './RenderFunctions';
import { renderCompetitions, renderRoadmap, renderBetaAccess } from './AdditionalRenderFunctions';
import { renderDexProfiles } from './DexProfiles';

const DexPalDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedDex, setSelectedDex] = useState('all');
  const [activeDexProfile, setActiveDexProfile] = useState('aevo');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Sample data for charts
  const volumeData = [
    { name: 'dYdX', volume: 45000, fees: 1200 },
    { name: 'GMX', volume: 32000, fees: 890 },
    { name: 'Gains', volume: 28000, fees: 756 },
    { name: 'Hyperliquid', volume: 38000, fees: 1050 },
    { name: 'Vertex', volume: 22000, fees: 620 }
  ];

  const rewardsData = [
    { name: 'Points', value: 65, color: '#8B5CF6' },
    { name: 'Cashbacks', value: 25, color: '#A855F7' },
    { name: 'Collectibles', value: 10, color: '#C084FC' }
  ];

  const competitionsData = [
    { name: 'dYdX Trading Contest', prize: '$50,000', ends: '5 days', participants: 2341 },
    { name: 'GMX Volume Race', prize: '$25,000', ends: '12 days', participants: 1876 },
    { name: 'Hyperliquid Leaderboard', prize: '$30,000', ends: '8 days', participants: 1524 }
  ];

  // Quick Links data
  const quickLinks = [
    { 
      title: 'Pitch Deck', 
      subtitle: 'View presentation', 
      icon: FileText, 
      href: '#',
      color: 'blue'
    },
    { 
      title: 'Website', 
      subtitle: 'www.dexpal.ai', 
      icon: Home, 
      href: 'https://www.dexpal.ai',
      color: 'green'
    },
    { 
      title: 'Twitter/X', 
      subtitle: '@DexPalAi', 
      icon: ExternalLink, 
      href: '#',
      color: 'pink'
    },
    { 
      title: 'DEX Data Room', 
      subtitle: 'Integration docs', 
      icon: Database, 
      href: '#',
      color: 'yellow'
    },
    { 
      title: 'App Demo', 
      subtitle: 'Video walkthrough', 
      icon: Video, 
      href: '#',
      color: 'purple'
    }
  ];

  // DEX Profile data
  const dexProfiles = {
    aevo: {
      name: 'Aevo',
      description: 'Optimism-based orderbook with token staking discounts',
      baseMakerFee: '0.03%',
      baseTakerFee: '0.05%',
      discountPrograms: 'AEVO token staking (% undisclosed)',
      referralProgram: 'Up to 60% commission at Diamond tier',
      liquidation: '0.20% of position',
      funding: 'Hourly between traders',
      gas: 'Negligible (Optimism rollup)',
      volumeTiers: [
        { tier: 'Base', range: '$0.0M - ∞', maker: '+0.03%', taker: '0.05%' }
      ],
      feeExamples: [
        { volume: '$10K', type: 'Casual', fee: '$4', percentage: '0.044%' },
        { volume: '$100K', type: 'Active', fee: '$44', percentage: '0.044%' },
        { volume: '$500K', type: 'Serious', fee: '$220', percentage: '0.044%' },
        { volume: '$2M', type: 'Professional', fee: '$880', percentage: '0.044%' },
        { volume: '$10M', type: 'Institutional', fee: '$4400', percentage: '0.044%' },
        { volume: '$50M', type: 'Whale', fee: '$22000', percentage: '0.044%' }
      ]
    },
    hyperliquid: {
      name: 'HyperLiquid',
      description: 'High-performance L1 blockchain built for perpetual trading',
      baseMakerFee: '0.02%',
      baseTakerFee: '0.05%',
      discountPrograms: 'Volume-based tier discounts',
      referralProgram: 'Up to 50% commission sharing',
      liquidation: '0.15% of position',
      funding: '8-hour intervals',
      gas: 'Native blockchain fees',
      volumeTiers: [
        { tier: 'Base', range: '$0 - $100K', maker: '+0.02%', taker: '0.05%' },
        { tier: 'Silver', range: '$100K - $1M', maker: '+0.015%', taker: '0.045%' },
        { tier: 'Gold', range: '$1M+', maker: '+0.01%', taker: '0.04%' }
      ],
      feeExamples: [
        { volume: '$10K', type: 'Casual', fee: '$3.5', percentage: '0.035%' },
        { volume: '$100K', type: 'Active', fee: '$32.5', percentage: '0.0325%' },
        { volume: '$500K', type: 'Serious', fee: '$157.5', percentage: '0.0315%' },
        { volume: '$2M', type: 'Professional', fee: '$620', percentage: '0.031%' },
        { volume: '$10M', type: 'Institutional', fee: '$3050', percentage: '0.0305%' },
        { volume: '$50M', type: 'Whale', fee: '$15000', percentage: '0.03%' }
      ]
    },
    dydx: {
      name: 'dYdX v4',
      description: 'Cosmos-based decentralized perpetual trading platform',
      baseMakerFee: '0.05%',
      baseTakerFee: '0.10%',
      discountPrograms: 'DYDX token staking discounts',
      referralProgram: 'Up to 40% commission sharing',
      liquidation: '0.50% of position',
      funding: '1-hour intervals',
      gas: 'Cosmos network fees',
      volumeTiers: [
        { tier: 'Retail', range: '$0 - $100K', maker: '0.05%', taker: '0.10%' },
        { tier: 'Professional', range: '$100K - $1M', maker: '0.03%', taker: '0.08%' },
        { tier: 'Institutional', range: '$1M+', maker: '0.01%', taker: '0.06%' }
      ],
      feeExamples: [
        { volume: '$10K', type: 'Casual', fee: '$7.5', percentage: '0.075%' },
        { volume: '$100K', type: 'Active', fee: '$55', percentage: '0.055%' },
        { volume: '$500K', type: 'Serious', fee: '$275', percentage: '0.055%' },
        { volume: '$2M', type: 'Professional', fee: '$1000', percentage: '0.05%' },
        { volume: '$10M', type: 'Institutional', fee: '$3500', percentage: '0.035%' },
        { volume: '$50M', type: 'Whale', fee: '$17500', percentage: '0.035%' }
      ]
    }
  };

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
        active 
          ? 'bg-purple-600 text-white shadow-lg' 
          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'screener', label: 'Screener', icon: BarChart },
    { id: 'profiles', label: 'DEX Profiles', icon: Database },
    { id: 'rewards', label: 'Degen Club', icon: Star },
    { id: 'competitions', label: 'Competitions', icon: Trophy },
    { id: 'roadmap', label: 'Roadmap', icon: Target },
    { id: 'beta', label: 'Beta Access', icon: Users }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'screener': return renderScreener({ selectedDex, setSelectedDex, setActiveDexProfile, setActiveTab, dexProfiles });
      case 'profiles': return renderDexProfiles({ activeDexProfile, setActiveDexProfile, dexProfiles });
      case 'rewards': return renderRewards();
      case 'competitions': return renderCompetitions({ setActiveDexProfile, setActiveTab });
      case 'roadmap': return renderRoadmap();
      case 'beta': return renderBetaAccess();
      default: return renderOverview();
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar with Quick Links */}
      <div className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            {!sidebarCollapsed && (
              <h2 className="text-lg font-bold text-purple-400">Quick Links</h2>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-gray-400 hover:text-white transition-all"
            >
              {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          <div className="space-y-2">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-gray-700 ${
                  sidebarCollapsed ? 'justify-center' : ''
                }`}
              >
                <link.icon className="text-purple-400" size={20} />
                {!sidebarCollapsed && (
                  <div className="flex-1">
                    <p className="text-white font-medium text-sm">{link.title}</p>
                    <p className="text-gray-400 text-xs">{link.subtitle}</p>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">DexPal</h1>
                <p className="text-gray-400 text-sm">Trader Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.dexpal.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all">
                <ExternalLink size={20} />
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-all">
                Connect Wallet
              </button>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  id={tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  active={activeTab === tab.id}
                  onClick={setActiveTab}
                />
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 px-6 py-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div>
                <p className="text-gray-400 text-sm">
                  © 2024 DexPal. Accelerating DeFi adoption through universal rewards.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a href="https://www.dexpal.ai" className="text-gray-400 hover:text-purple-400 transition-all text-sm">
                  Website
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-all text-sm">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-all text-sm">
                  Discord
                </a>
                <a href="https://partners.dexpal.io/rewards" className="text-gray-400 hover:text-purple-400 transition-all text-sm">
                  Partners
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DexPalDashboard;
