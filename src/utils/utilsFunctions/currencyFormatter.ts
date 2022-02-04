export default function formatCurrency(price: string | number) {
  const priceVal: number = Number(price);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
  });

  const formattedCurrency = formatter.format(priceVal);
  return formattedCurrency;
}
