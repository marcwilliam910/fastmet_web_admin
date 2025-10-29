export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPHNumber(number: string | number) {
  const numStr = number.toString();

  // Remove non-digit characters just in case
  const digits = numStr.replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("63")) {
    // +63 9XX XXX XXXX
    return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(
      5,
      8
    )} ${digits.slice(8)}`;
  } else if (digits.length === 11 && digits.startsWith("09")) {
    // 09XX XXX XXXX
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  } else {
    // fallback
    return number;
  }
}
