export const getPayPeriodValue = (value: number) => {
  const payPeriods = 26; // TODO: Store value in a database to make it editable
  return value/payPeriods;
};