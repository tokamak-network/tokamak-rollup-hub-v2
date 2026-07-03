import Image from "next/image";
import DefaultLogo from "@/assets/logo/integration-df-logo.svg";

interface IntegrationLogoProps {
  name: string;
  width?: number;
  height?: number;
}

const INTEGRATION_LOGO_MAP = {
  default: DefaultLogo,
  "thanos-bridge": "/icon/bridge.svg",
  "thanos-explorer": "/icon/blockexplorer.svg",
  "thanos-stack": DefaultLogo,
  "monitoring-tool": "/icon/monitoringtool.svg",
  "dao-candidate": "/icon/dao.svg",
  "uptime-kuma": "/icon/systempulse.svg",
  "cross-trade": "/icon/corsstrade.png",
  "rng": "/icon/rng.png",
  "account-abstraction": "/icon/account-abstraction.svg",
};

export const IntegrationLogo: React.FC<IntegrationLogoProps> = ({
  name,
  width = 60,
  height = 60,
}) => {
  return (
    <Image
      src={INTEGRATION_LOGO_MAP[name as keyof typeof INTEGRATION_LOGO_MAP]}
      alt={name}
      width={width}
      height={height}
    />
  );
};
