export interface PlatformRelease {
  version: string;
  downloads: {
    macIntel: string;
    macArm: string;
    windows: string;
    linux: string;
  };
}

const FALLBACK_VERSION = "1.1.12";
const FALLBACK_BASE = `https://github.com/tokamak-network/trh-platform/releases/download/v${FALLBACK_VERSION}`;

const FALLBACK: PlatformRelease = {
  version: FALLBACK_VERSION,
  downloads: {
    macIntel: `${FALLBACK_BASE}/TRH.Desktop-${FALLBACK_VERSION}.dmg`,
    macArm: `${FALLBACK_BASE}/TRH.Desktop-${FALLBACK_VERSION}-arm64.dmg`,
    windows: `${FALLBACK_BASE}/TRH.Desktop.Setup.${FALLBACK_VERSION}.exe`,
    linux: `${FALLBACK_BASE}/TRH.Desktop-${FALLBACK_VERSION}-x86_64.AppImage`,
  },
};

export async function getLatestPlatformRelease(): Promise<PlatformRelease> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/tokamak-network/trh-platform/releases/latest",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return FALLBACK;

    const data = await res.json();
    const version = (data.tag_name as string).replace(/^v/, "");
    const assets: Array<{ name: string; browser_download_url: string }> =
      data.assets ?? [];

    const macArm = assets.find((a) => a.name.endsWith("arm64.dmg"))
      ?.browser_download_url ?? FALLBACK.downloads.macArm;
    const macIntel = assets.find(
      (a) => a.name.endsWith(".dmg") && !a.name.includes("arm64")
    )?.browser_download_url ?? FALLBACK.downloads.macIntel;
    const windows = assets.find((a) => a.name.endsWith(".exe"))
      ?.browser_download_url ?? FALLBACK.downloads.windows;
    const linux = assets.find((a) => a.name.endsWith(".AppImage"))
      ?.browser_download_url ?? FALLBACK.downloads.linux;

    return { version, downloads: { macArm, macIntel, windows, linux } };
  } catch {
    return FALLBACK;
  }
}
