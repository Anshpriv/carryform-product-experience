import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // OneDrive can leave stale junctions in the default `.next` CSS output.
  // Keep all generated Next files in a dedicated cache directory instead.
  distDir: ".next-carryform",
}

export default nextConfig
