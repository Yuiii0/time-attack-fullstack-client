export default function formatPrice(price: number | string): string {
  return `${price?.toLocaleString()}원`;
}
