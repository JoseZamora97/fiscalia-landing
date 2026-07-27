/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Screenshots are dense UI text: the default quality of 75 turns small
    // labels to mush once the source is downscaled to the display width.
    qualities: [75, 92],
  },
};

export default nextConfig;
