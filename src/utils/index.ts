export const formatDisplayedNumber = (value: string | number, digits = 10) => {
  if (!value) return "0";
  const usFormatter = Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short"
  })

  return usFormatter.format(Number(value))
};