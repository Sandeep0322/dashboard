"use client";

import { useState } from "react";
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
import { Search, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Token {
  chain_id: number;
  contract_address: string;
  amount: number;
  price_to_usd: number;
  value_usd: number;
  abs_profit_usd: number;
  roi: number;
  status: number;
}

interface Network {
  id: number;
  name: string;
  icon: string;
  chainId: number | null;
  nativeToken: string;
  tokens: Token[];
  chartData: { timestamp: number; value_usd: number }[];
  totalValue?: string;
}

interface NetworkDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  network: Network;
}

export function EnhancedNetworkDetailsModal({
  isOpen,
  onClose,
  network,
}: NetworkDetailsModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTokens, setSelectedTokens] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState("select");
  const [transferType, setTransferType] = useState("");
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("");

  const resetModalState = () => {
    setSearchTerm("");
    setSelectedTokens([]);
    setCurrentStep("select");
    setTransferType("");
    setDestination("");
    setAmount("");
    setFee("");
  };

  const filteredTokens = network?.tokens?.filter((token) =>
    token.contract_address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotalValue = () =>
    network?.tokens.reduce((total, token) => total + token.value_usd, 0);

  const handleTokenSelection = (tokenName: string) => {
    setSelectedTokens((prev) =>
      prev.includes(tokenName)
        ? prev.filter((name) => name !== tokenName)
        : [...prev, tokenName]
    );
  };

  //   const handleTransfer = () => {
  //     setCurrentStep("type");
  //   };

  const handleClose = () => {
    resetModalState();
    onClose();
  };

  const handleNextStep = () => {
    if (currentStep === "select") setCurrentStep("type");
    else if (currentStep === "type") setCurrentStep("confirm");
    else if (currentStep === "confirm") setCurrentStep("process");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-400 flex items-center">
            <span className="text-3xl mr-2">{network?.icon}</span>
            {network?.name} Network Details
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Transfer tokens from this network
          </DialogDescription>
        </DialogHeader>
        <Tabs value={currentStep} className="mt-4">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="select" disabled={currentStep !== "select"}>
              Select Tokens
            </TabsTrigger>
            <TabsTrigger
              value="type"
              disabled={currentStep === "select" || currentStep === "process"}
            >
              Transfer Details
            </TabsTrigger>
            <TabsTrigger
              value="confirm"
              disabled={currentStep === "select" || currentStep === "process"}
            >
              Confirm Details
            </TabsTrigger>
            <TabsTrigger value="process" disabled={currentStep !== "process"}>
              Process Payment
            </TabsTrigger>
          </TabsList>
          <TabsContent value="select">
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
                    <TableHead className="text-blue-400 w-12">Select</TableHead>
                    <TableHead className="text-blue-400">Contract</TableHead>
                    <TableHead className="text-blue-400">Balance</TableHead>
                    <TableHead className="text-blue-400">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTokens?.map((token, index) => (
                    <TableRow
                      key={index}
                      className="border-gray-700 hover:bg-gray-800 transition-colors"
                    >
                      <TableCell>
                        <Checkbox
                          checked={selectedTokens.includes(
                            token.contract_address
                          )}
                          onCheckedChange={() =>
                            handleTokenSelection(token.contract_address)
                          }
                          className="border-gray-500"
                        />
                      </TableCell>
                      <TableCell className="font-medium text-gray-300">
                        {token.contract_address}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        {token.amount}
                      </TableCell>
                      <TableCell className="text-gray-300">
                        ${token.value_usd.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="mt-4 text-right">
              <p className="text-lg font-semibold text-blue-400">
                Total Value: ${calculateTotalValue()?.toLocaleString()}
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleNextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={selectedTokens.length === 0}
              >
                Next
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="type">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Transfer Type
                </label>
                <Select onValueChange={setTransferType} value={transferType}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select transfer type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="internal">Internal Transfer</SelectItem>
                    <SelectItem value="external">External Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Destination
                </label>
                <Select onValueChange={setDestination} value={destination}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="wallet">Personal Wallet</SelectItem>
                    <SelectItem value="exchange">Exchange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Amount
                </label>
                <Input
                  type="text"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Fee
                </label>
                <Select onValueChange={setFee} value={fee}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select fee type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="fast">Fast</SelectItem>
                    <SelectItem value="instant">Instant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleNextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!transferType || !destination || !amount || !fee}
              >
                Next
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="confirm">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">
                Confirm Transfer Details
              </h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300">
                  <span className="font-medium">Selected Tokens:</span>{" "}
                  {selectedTokens.join(", ")}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Transfer Type:</span>{" "}
                  {transferType}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Destination:</span>{" "}
                  {destination}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Amount:</span> {amount}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Fee:</span> {fee}
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="font-medium">Total:</span>{" "}
                  {parseFloat(amount) +
                    (fee === "standard" ? 0.1 : fee === "fast" ? 0.2 : 0.3)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <Button
                onClick={() => setCurrentStep("type")}
                variant="outline"
                className="bg-gray-700 hover:bg-gray-600 text-white"
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Confirm and Process
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="process">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="rounded-full bg-green-500 p-3 mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-green-400 mb-2">
                Payment Processed
              </h3>
              <p className="text-gray-400">
                Your transfer has been successfully completed.
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleClose}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Close
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
