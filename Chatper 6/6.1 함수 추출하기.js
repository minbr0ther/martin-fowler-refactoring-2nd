// After
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function calculateOutstanding(invoice) {
  // 미해결 채무(outstanding)를 계산한다.
  let result = 0; //맨위에 있던 것을 이 위치로 이동
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
