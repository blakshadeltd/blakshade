export default function cloudflareLoader({ src, width, quality }) {
  return `https://www.blakshade.com/${src}?width=${width}&quality=${quality || 75}&format=auto`;
}
