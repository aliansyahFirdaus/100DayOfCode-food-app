const converterCurrency = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price * 1000);
};

export default converterCurrency;
