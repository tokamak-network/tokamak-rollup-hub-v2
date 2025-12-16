import { ProductDetailType, SubProductDetailType } from "@/types/products";

export const PRODUCT_CATEGORIES: ProductDetailType[] = [
  {
    id: "all",
    name: "View all",
    description: "View all products",
  },
  {
    id: "stack",
    name: "Stack",
    description: "Meet the L2 Stack created by various developers.",
  },
  {
    id: "integration",
    name: "Integration",
    description: "Integrate with other projects.",
  },
];

export const SUB_CATEGORY_MAP: Record<string, string[]> = {
  all: [],
  stack: [],
  integration: ["Block Explorer", "Bridge", "Monitoring", "DAO"],
};

export const SUB_PRODUCT_CATEGORIES: Record<string, SubProductDetailType[]> = {
  all: [],
  stack: [
    {
      id: "thanos-stack",
      name: "Thanos",
      description:
        "A customized fork of the OP Stack that enables ERC20 tokens as the native currency for the L2 chain.",
      link: "/discover/thanos-stack",
      category: "stack",
      subCategory: "Optimistic",
      image: "/images/stacks/optimistic",
    },
    // {
    //   id: "zk-stack",
    //   name: "ZK Stack",
    //   description:
    //     "An advanced virtual machine for Layer 2, optimized for compatibility with ZKSNARKS. It features an innovative L2 rollup architecture that reduces computational complexity while preserving security and privacy.",
    //   link: "https://github.com/thanos-labs/thanos",
    //   category: "stack",
    // },
  ],
  integration: [
    {
      id: "thanos-explorer",
      name: "Thanos Explorer",
      description:
        "A tool for exploring and searching the Thanos networks for transactions, blocks, and other network activity.",
      link: "/discover/thanos-explorer",
      category: "integration",
      subCategory: "Block Explorer",
    },
    {
      id: "thanos-bridge",
      name: "Thanos Bridge",
      description:
        "Thanos Bridge allows users to transfer assets between your deployed Thanos stack and L1. It supports a number of assets including TON, ETH, USDC and integrates quickly for seamless usability.",
      link: "/discover/thanos-bridge",
      category: "integration",
      subCategory: "Bridge",
    },
    {
      id: "monitoring-tool",
      name: "Monitoring Tool",
      description:
        "Comprehensive monitoring and analytics for your rollup. Track system performance, set up alerts, and gain insights into your network's health.",
      link: "/discover/monitoring-tool",
      category: "integration",
      subCategory: "Monitoring",
    },
    {
      id: "dao-candidate",
      name: "Staking / DAO Candidate Registration",
      description:
        "Register your chain as a DAO candidate in the Tokamak Network ecosystem to earn seigniorage rewards proportional to the L2 growth.",
      link: "/discover/dao-candidate",
      category: "integration",
      subCategory: "DAO",
    },
    {
      id: "uptime-kuma",
      name: "System Pulse",
      description:
        "System Pulse provides real-time visibility into platform health and service availability. Monitor uptime and get instant notifications.",
      link: "/discover/uptime-kuma",
      category: "integration",
      subCategory: "Monitoring",
    },
    // {
    //   id: "earn-ton-as-reward",
    //   name: "Earn TON as Reward",
    //   description:
    //     "Register your chain as a DAO candidate in the Tokamak Network ecosystem to earn seigniorage rewards proportional to the L2 growth.",
    //   link: "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md#222-ton-staking-v2",
    //   category: "integration",
    // },
    // {
    //   id: "random-number-generation",
    //   name: "Random Number Generation",
    //   description:
    //     "Integrate random number generation into your chain with our RNG project.",
    //   link: "https://github.com/thanos-labs/thanos",
    //   category: "integration",
    // },
    // {
    //   id: "cross-chain-swap",
    //   name: "Cross Chain Swap",
    //   description:
    //     "Cross-Trade enables fast, decentralized withdrawals between L2 and L1 chains, as well as L2-L2 transfers",
    //   link: "https://ethresear.ch/t/canonical-cross-chain-swap-fast-and-decentralized-settlement-for-cross-chain-swap-using-canonical-native-l1-l2-messaging/21638/3",
    //   category: "integration",
    // },
    // {
    //   id: "sybil-resistance",
    //   name: "Sybil Resistance",
    //   description:
    //     "Creating an identity-proving algorithm and zk-rollup network for user identification.",
    //   link: "https://tokamak.notion.site/Tokamak-Sybil-Resistance-Overview-03cc941223844f30ba4473e98b1275a7",
    //   category: "integration",
    // },
  ],
};

export const CategoryNameMap: Record<string, string> = {
  all: "View all",
  stack: "Stack",
  integration: "Integration",
};
