"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // This function would be called after successful wallet connection
  const handleWalletConnect = (address: string) => {
    setIsConnected(true);
    setWalletAddress(address);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        {!isConnected ? (
          <DynamicWidget />
        ) : (
          <div className="flex items-center space-x-2">
            <span className="text-sm">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
            <Button variant="outline" size="sm">
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
