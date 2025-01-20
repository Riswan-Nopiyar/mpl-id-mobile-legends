declare module "*.json" {
  // Menggunakan `Record<string, unknown>` jika JSON adalah objek dengan key-value
  const value: Record<string, unknown>;
  export default value;
}
