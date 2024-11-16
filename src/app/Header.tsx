"use client";

import { useState } from "react";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import BlockchainDashboard from "./Dashboard";
import Transactions from "./Transactions";

export default function Header() {
  const { address } = useAccount();
  const [showTransactions, setShowTransactions] = useState(false);

  const handleViewTransactions = () => {
    setShowTransactions(true); // Show transactions view when clicked
  };

  const handleViewDashboard = () => {
    setShowTransactions(false); // Show dashboard view when clicked
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-[#5DA1F3] text-2xl font-bold">TokenWave</h1>
        <div className="flex items-center space-x-4">
          {/* Container to hold buttons and DynamicWidget */}
          {address && (
            <Button
              variant="ghost"
              className={`${
                showTransactions ? "text-[#5DA1F3] font-bold" : "text-white"
              } hover:text-[#5DA1F3] transition-colors`}
              onClick={handleViewTransactions}
            >
              View Transactions
            </Button>
          )}
          <Button
            variant="ghost"
            className={`${
              !showTransactions ? "text-[#5DA1F3] font-bold" : "text-white"
            } hover:text-[#5DA1F3] transition-colors`}
            onClick={handleViewDashboard}
          >
            Dashboard
          </Button>
          <div>
            <DynamicWidget />
          </div>
        </div>
      </header>

      {showTransactions ? (
        <Transactions address={address} /> // Show transactions view
      ) : (
        <BlockchainDashboard address={address} /> // Show dashboard view
      )}
    </>
  );
}
