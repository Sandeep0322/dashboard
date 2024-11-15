"use client";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet } from "viem/chains";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Header from "./Header";
import BlockchainDashboard from "./Dashboard";
// import Header from "./header";

const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function BlockchainApp() {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "11abe661-8ca5-41b7-a575-83fb45b49049",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen bg-gray-900">
            <Header />
            <BlockchainDashboard />
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
