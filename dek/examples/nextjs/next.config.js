import withTM from "next-transpile-modules";

/** @type {import('next').NextConfig} */
const nextConfig = withTM(["@fair/react"])({
  reactStrictMode: true,
  transpilePackages: ["@fair/react"],
  compiler: {
    styledComponents: true,
  },
  turbopack: {},
});

export default nextConfig;
