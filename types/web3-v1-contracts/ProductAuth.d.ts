import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface ProductAuth extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ProductAuth;
  clone(): ProductAuth;
  methods: {
    owner(): NonPayableTransactionObject<string>;

    products(arg0: number | string | BN): NonPayableTransactionObject<{
      productName: string;
      productType: string;
      productId: string;
      0: string;
      1: string;
      2: string;
    }>;

    productsMap(arg0: string): NonPayableTransactionObject<{
      productName: string;
      productType: string;
      productId: string;
      0: string;
      1: string;
      2: string;
    }>;

    addProduct(
      productName: string,
      productType: string,
      productId: string
    ): NonPayableTransactionObject<void>;

    fetchProducts(): NonPayableTransactionObject<[string, string, string][]>;

    fetchProductById(
      productId: string
    ): NonPayableTransactionObject<[string, string, string]>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
