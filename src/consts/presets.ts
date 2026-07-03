export const PRESET_SECTION = {
  title: "Start with a Preset",
  description:
    "Pick one preset and your rollup's genesis config, predeploy contracts, and modules are all set for you — deployment inputs drop from dozens to a handful.",
};

export interface PresetDetail {
  id: string;
  name: string;
  tagline: string;
  deployTime: string;
  extras: string;
  // IntegrationLogo names — bundled integrations shown as icon chips
  moduleIcons: string[];
  accent: string;
}

export const PRESET_LIST: PresetDetail[] = [
  {
    id: "general",
    name: "General",
    tagline: "The essentials to launch your L2.",
    deployTime: "~12 min",
    extras: "Native TON L2 · WTON · L2 ETH",
    moduleIcons: ["thanos-bridge", "thanos-explorer", "account-abstraction"],
    accent: "#0070ED",
  },
  {
    id: "defi",
    name: "DeFi",
    tagline: "Ready for on-chain finance.",
    deployTime: "~18 min",
    extras: "Everything in General + Uniswap V3",
    moduleIcons: [
      "thanos-bridge",
      "thanos-explorer",
      "monitoring-tool",
      "uptime-kuma",
      "cross-trade",
      "account-abstraction",
    ],
    accent: "#7C3AED",
  },
  {
    id: "gaming",
    name: "Gaming",
    tagline: "Built for on-chain games.",
    deployTime: "~20 min",
    extras: "Everything in General + DRB VRF randomness",
    moduleIcons: [
      "thanos-bridge",
      "thanos-explorer",
      "monitoring-tool",
      "uptime-kuma",
      "rng",
      "account-abstraction",
    ],
    accent: "#059669",
  },
  {
    id: "full",
    name: "Full",
    tagline: "Everything, out of the box.",
    deployTime: "~25 min",
    extras: "Every integration + Backup & Recovery",
    moduleIcons: [
      "thanos-bridge",
      "thanos-explorer",
      "monitoring-tool",
      "uptime-kuma",
      "cross-trade",
      "rng",
      "account-abstraction",
    ],
    accent: "#DC2626",
  },
];
