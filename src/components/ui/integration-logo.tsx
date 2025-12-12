import Image from "next/image";
import DefaultLogo from "@/assets/logo/integration-df-logo.svg";

interface IntegrationLogoProps {
  name: string;
  width?: number;
  height?: number;
}

const INTEGRATION_LOGO_MAP = {
  default: DefaultLogo,
  "thanos-bridge": DefaultLogo,
  "thanos-explorer": DefaultLogo,
  "thanos-stack": DefaultLogo,
  "monitoring-tool": DefaultLogo,
  "dao-candidate": DefaultLogo,
  "uptime-kuma": DefaultLogo,
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
