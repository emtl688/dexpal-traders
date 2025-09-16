import React from 'react';

// DEX Profiles render function
export const renderDexProfiles = ({ activeDexProfile, setActiveDexProfile, dexProfiles }) => {
  const currentDex = dexProfiles[activeDexProfile];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">DEX Profiles</h2>
        <div className="flex flex-wrap gap-2">
          {Object.entries(dexProfiles).map(([key, dex]) => (
            <button
              key={key}
              onClick={() => setActiveDexProfile(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeDexProfile === key
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {dex.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">{currentDex.name[0]}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{currentDex.name}</h3>
            <p className="text-gray-400">{currentDex.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Base Fees</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Maker Fee:</span>
                  <span className="text-purple-400 font-medium">{currentDex.baseMakerFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Base Taker Fee:</span>
                  <span className="text-purple-400 font-medium">{currentDex.baseTakerFee}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Programs</h4>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-400 text-sm">Discount Programs:</span>
                  <p className="text-white">{currentDex.discountPrograms}</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Referral Program:</span>
                  <p className="text-green-400">{currentDex.referralProgram}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Additional Fees</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Liquidation:</span>
                  <span className="text-red-400">{currentDex.liquidation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Funding:</span>
                  <span className="text-blue-400">{currentDex.funding}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gas:</span>
                  <span className="text-yellow-400">{currentDex.gas}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2">Trade with DexPal</h4>
              <p className="text-purple-100 text-sm mb-3">Use our affiliate code to earn rewards</p>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium transition-all w-full">
                Trade on {currentDex.name}
              </button>
            </div>
          </div>
        </div>

        {/* Volume Tier Structure */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Volume Tier Structure</h4>
          <div className="bg-gray-700 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tier</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Volume Range</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Maker</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase">Taker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {currentDex.volumeTiers.map((tier, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 text-white font-medium">{tier.tier}</td>
                    <td className="px-4 py-3 text-gray-300">{tier.range}</td>
                    <td className="px-4 py-3 text-purple-400">{tier.maker}</td>
                    <td className="px-4 py-3 text-purple-400">{tier.taker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fee Examples */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4">Fee Examples (30% Maker / 70% Taker Split)</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentDex.feeExamples.map((example, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg p-4 text-center">
                <div className="text-purple-400 text-2xl font-bold mb-1">{example.volume}</div>
                <div className="text-gray-400 text-sm mb-2">{example.type}</div>
                <div className="text-white text-lg font-bold mb-1">{example.fee}</div>
                <div className="text-gray-400 text-xs">{example.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
