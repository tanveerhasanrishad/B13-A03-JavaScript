function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  } else {
    const result = currentPrice - (currentPrice * discount) / 100;
    return result.toFixed(3);
  }
}
