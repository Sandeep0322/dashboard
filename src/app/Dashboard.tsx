"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnhancedNetworkDetailsModal } from "./NetworkDetailsModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

// Expanded mock data for 9 networks
const initialNetworks: Network[] = [
  {
    id: 1,
    name: "Bitkub",
    chainId: 96,
    icon: "/../images/bitkub-logo.com.png",
    nativeToken: "KUB",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 2,
    name: "BASE",
    chainId: 8453,
    icon: "/../images/base.avif",
    nativeToken: "ETH",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 3,
    name: "ETHEREUM",
    chainId: 1,
    icon: "/../images/ETH2.png",
    nativeToken: "ETH",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 4,
    name: "CELO",
    chainId: 42220,
    icon: "/../images/celo2.png",
    nativeToken: "CELO",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 5,
    name: "KINTO",
    chainId: 2442,
    icon: "/../images/kinto.png",
    nativeToken: "KINTO",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 6,
    name: "Polygon",
    chainId: 137,
    icon: "/../images/polygon_e.png",
    nativeToken: "MATIC",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 7,
    name: "Flow",
    chainId: null,
    icon: "/../images/flow.png",
    nativeToken: "FLOW",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 8,
    name: "LayerZero",
    chainId: null,
    icon: "/../images/layerzero.png",
    nativeToken: "ZRO",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 9,
    name: "Arbitrum",
    chainId: 42161,
    icon: "/../images/arbitrum_e.png",
    nativeToken: "ETH",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 10,
    name: "Unichain",
    chainId: 1024,
    icon: "/../images/unichain.jpeg",
    nativeToken: "UNI",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 11,
    name: "Scroll",
    chainId: 534352,
    icon: "/../images/scroll.png",
    nativeToken: "ETH",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 12,
    name: "Starknet",
    chainId: null,
    icon: "/../images/starknet.png",
    nativeToken: "STRK",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 13,
    name: "Mantle",
    chainId: 5000,
    icon: "/../images/mantle.png",
    nativeToken: "MNT",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 14,
    name: "Chiliz",
    chainId: 88888,
    icon: "/../images/chilliz.png",
    nativeToken: "CHZ",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 15,
    name: "INCO Network",
    chainId: null,
    icon: "/../images/inco.jpeg",
    nativeToken: "INCO",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 16,
    name: "Hedera",
    chainId: null,
    icon: "/../images/hedera.png",
    nativeToken: "HBAR",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 17,
    name: "NEAR",
    chainId: null,
    icon: "/../images/near.png",
    nativeToken: "NEAR",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 18,
    name: "Flare Network",
    chainId: 14,
    icon: "/../images/flare.png",
    nativeToken: "FLR",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 19,
    name: "Rootstock",
    chainId: 30,
    icon: "/../images/rootstock.jpeg",
    nativeToken: "RBTC",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 20,
    name: "Neon",
    chainId: 245022934,
    icon: "/../images/neon.png",
    nativeToken: "NEON",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 21,
    name: "Oasis",
    chainId: 42262,
    icon: "/../images/oasis.jpeg",
    nativeToken: "ROSE",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 22,
    name: "Essential",
    chainId: null,
    icon: "/../images/essetinal_square.png",
    nativeToken: "ESS",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
  {
    id: 23,
    name: "Rome Protocol",
    chainId: null,
    icon: "/../images/rome.png",
    nativeToken: "ROME",
    tokens: [],
    chartData: [],
    totalValue: "0",
  },
];

type Token = {
  chain_id: number;
  value_usd: number;
  // ... other properties
};

type Network = {
  id: number;
  name: string;
  chainId: number | null;
  icon: string;
  nativeToken: string;
  tokens: Token[];
  chartData: { timestamp: number; value_usd: number }[];
  totalValue: string;
};

export default function BlockchainDashboard({ address }: { address?: string }) {
  const [networks, setNetworks] = useState<Network[]>(initialNetworks);
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTokenData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/api/portfolio?address=${address}`
      );

      const updatedNetworks = networks.map((network) => {
        if (network.chainId === null) return network;

        const networkTokens = response.data.result.filter(
          (token: Token) => token.chain_id === network.chainId
        );

        const totalValue = networkTokens.reduce(
          (total: number, token: Token) => total + token.value_usd,
          0
        );

        return {
          ...network,
          tokens: networkTokens,
          totalValue: totalValue.toFixed(2),
        };
      });

      setNetworks(updatedNetworks);
    } catch (error) {
      setNetworks(initialNetworks);
      // console.error("Error fetching token data:", error);
    }
  };

  const fetchChartData = async (chainId: number | null) => {
    if (chainId === null) return [];

    try {
      const response = await axios.get(
        `http://localhost:3004/api/value_chart?address=${address}&chainId=${chainId}`
      );

      return response.data.result.map((data: any) => ({
        timestamp: data.timestamp,
        value_usd: data.value_usd,
      }));
    } catch (error) {
      // console.error("Error fetching chart data:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchTokenData();
    Promise.all(
      networks
        .filter((network) => network.chainId !== null)
        .map((network) => fetchChartData(network.chainId))
    ).then((chartDataArray) => {
      setNetworks((prevNetworks) =>
        prevNetworks.map((network, index) => ({
          ...network,
          chartData: chartDataArray[index] || [],
        }))
      );
    });
  }, [address]);

  const handleNetworkClick = (network: Network) => {
    setSelectedNetwork(network);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1a2f 13%, #000000 40%, #0a1a2f 90%)",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center animate-pulse">
          Networks
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {networks.map((network) => (
            <Card
              key={network.id}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gray-900 border-gray-700`}
              onClick={() => handleNetworkClick(network)}
            >
              <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                {/* Display the logo using an img tag */}
                <img 
                  src={network.icon} // Path to the logo (e.g., "/images/bitkub-exchange.webp")
                  alt={`${network.name} logo`} 
                  className="w-6 h-6 mr-2" // Adjust size and spacing
                />
                {network.name}
              </CardTitle>
                <CardDescription className="text-gray-400">
                  Click to view details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  {network.tokens.length} tokens available
                </p>
                <p className="text-sm text-blue-300 mt-2">
                  Total Value: $
                  {parseFloat(network.totalValue).toLocaleString()}
                </p>
              </CardContent>
              <CardContent>
                <div className="w-full h-44 mt-4 md:mt-0">
                  {network.chartData.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={network.chartData}>
                        <XAxis
                          dataKey="timestamp"
                          tickFormatter={(timestamp) =>
                            new Date(timestamp * 1000).toLocaleDateString()
                          }
                          stroke="#4B5563"
                        />
                        <YAxis stroke="#4B5563" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "none",
                          }}
                          labelStyle={{ color: "#9CA3AF" }}
                          itemStyle={{ color: "#60A5FA" }}
                          formatter={(value: any) => [`$${value}`, "Value"]}
                          labelFormatter={(label) =>
                            new Date(label * 1000).toLocaleDateString()
                          }
                        />
                        <Line
                          type="monotone"
                          dataKey="value_usd"
                          stroke="#60A5FA"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500 text-sm">
                        No chart data available
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedNetwork && (
          <EnhancedNetworkDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            network={selectedNetwork as any}
          />
        )}
      </div>
    </div>
  );
}
