"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Expanded mock data for 9 networks
const networks = [
  {
    id: 1,
    name: "Ethereum",
    icon: "🌐",
    tokens: [
      { name: "Ethereum", symbol: "ETH", balance: "2.5", value: 4500 },
      { name: "Uniswap", symbol: "UNI", balance: "100", value: 200 },
      { name: "Chainlink", symbol: "LINK", balance: "50", value: 500 },
    ],
  },
  {
    id: 2,
    name: "Binance Smart Chain",
    icon: "🟨",
    tokens: [
      { name: "Binance Coin", symbol: "BNB", balance: "10", value: 3000 },
      { name: "PancakeSwap", symbol: "CAKE", balance: "500", value: 1000 },
      { name: "Venus", symbol: "XVS", balance: "20", value: 300 },
    ],
  },
  {
    id: 3,
    name: "Polygon",
    icon: "🟣",
    tokens: [
      { name: "Polygon", symbol: "MATIC", balance: "1000", value: 800 },
      { name: "Aave", symbol: "AAVE", balance: "5", value: 1500 },
      { name: "QuickSwap", symbol: "QUICK", balance: "10", value: 100 },
    ],
  },
  {
    id: 4,
    name: "Avalanche",
    icon: "🔺",
    tokens: [
      { name: "Avalanche", symbol: "AVAX", balance: "15", value: 750 },
      { name: "Trader Joe", symbol: "JOE", balance: "300", value: 600 },
      { name: "BenQi", symbol: "QI", balance: "200", value: 400 },
    ],
  },
  {
    id: 5,
    name: "Solana",
    icon: "☀️",
    tokens: [
      { name: "Solana", symbol: "SOL", balance: "50", value: 5000 },
      { name: "Serum", symbol: "SRM", balance: "1000", value: 200 },
      { name: "Raydium", symbol: "RAY", balance: "200", value: 400 },
    ],
  },
  {
    id: 6,
    name: "Cardano",
    icon: "🔵",
    tokens: [
      { name: "Cardano", symbol: "ADA", balance: "1000", value: 1200 },
      { name: "Ergo", symbol: "ERG", balance: "100", value: 500 },
      { name: "Sundaeswap", symbol: "SUNDAE", balance: "5000", value: 250 },
    ],
  },
  {
    id: 7,
    name: "Polkadot",
    icon: "⚪",
    tokens: [
      { name: "Polkadot", symbol: "DOT", balance: "100", value: 2000 },
      { name: "Kusama", symbol: "KSM", balance: "10", value: 1000 },
      { name: "Acala", symbol: "ACA", balance: "500", value: 250 },
    ],
  },
  {
    id: 8,
    name: "Cosmos",
    icon: "🌌",
    tokens: [
      { name: "Cosmos", symbol: "ATOM", balance: "50", value: 750 },
      { name: "Osmosis", symbol: "OSMO", balance: "200", value: 400 },
      { name: "Juno", symbol: "JUNO", balance: "100", value: 300 },
    ],
  },
  {
    id: 9,
    name: "Algorand",
    icon: "🔷",
    tokens: [
      { name: "Algorand", symbol: "ALGO", balance: "1000", value: 600 },
      { name: "Yieldly", symbol: "YLDY", balance: "10000", value: 100 },
      { name: "Algofi", symbol: "ALGO", balance: "500", value: 50 },
    ],
  },
];

export default function BlockchainDashboard() {
  const [selectedNetwork, setSelectedNetwork] = useState(networks[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [animationOffset, setAnimationOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationOffset((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  const filteredTokens = selectedNetwork.tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotalValue = (network) => {
    return network.tokens.reduce((total, token) => total + token.value, 0);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a1a2f, #000000, #0a1a2f)",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center animate-pulse">
          Blockchain Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {networks.map((network) => (
            <Card
              key={network.id}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 bg-gray-900 border-gray-700`}
              onClick={() => {
                setSelectedNetwork(network);
                setIsModalOpen(true);
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <span className="text-2xl mr-2">{network.icon}</span>
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
                  Total Value: ${calculateTotalValue(network).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-blue-400 flex items-center">
                <span className="text-3xl mr-2">{selectedNetwork.icon}</span>
                {selectedNetwork.name} Network Details
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                View detailed information about your tokens on this network
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="flex items-center space-x-2 mb-4">
                <Search className="text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-blue-400">Token</TableHead>
                      <TableHead className="text-blue-400">Symbol</TableHead>
                      <TableHead className="text-blue-400">Balance</TableHead>
                      <TableHead className="text-blue-400">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTokens.map((token, index) => (
                      <TableRow
                        key={index}
                        className="border-gray-700 hover:bg-gray-800 transition-colors"
                      >
                        <TableCell className="font-medium text-gray-300">
                          {token.name}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-blue-900 text-blue-300 border-blue-700"
                          >
                            {token.symbol}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          {token.balance}
                        </TableCell>
                        <TableCell className="text-gray-300">
                          ${token.value.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 text-right">
                <p className="text-lg font-semibold text-blue-400">
                  Total Value: $
                  {calculateTotalValue(selectedNetwork).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
