export default function formatCurrency(price: string) {
  const priceVal: number = Number(price.substring(1));
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
  });

  const formattedCurrency = formatter.format(priceVal);
  return formattedCurrency;
}
