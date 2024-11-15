"use client";

import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";
import BlockchainDashboard from "./Dashboard";

export default function Header() {
  const { address } = useAccount();
  console.log(address);
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold"></h1>
        <div>
          <DynamicWidget />
          {/* Pass the account address */}
        </div>
      </header>
      <BlockchainDashboard address={address} />{" "}
    </>
  );
}
