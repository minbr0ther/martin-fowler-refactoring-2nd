export function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  const loopItems = lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','));
    .filter(line => record[1].trim() !== 'India')
    .map(record => { city: record[0].trim(), phone: record[2].trim() });
  return result;
}
