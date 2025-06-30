export function generatePizzaId(
  id: number,
  name: string,
  size: string,
  extras: string[]
): string {
  return `${id}_${name}_${size}_${extras?.sort().join("_")}`;
}
