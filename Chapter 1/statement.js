import credateStatementData from './createStatementData.js';

const invoicesJson = {
  customer: 'BigCo',
  performances: [
    {
      playID: 'hamlet',
      audience: 55,
    },
    {
      playID: 'as-like',
      audience: 35,
    },
    {
      playID: 'othello',
      audience: 40,
    },
  ],
};

function statement(invoice) {
  return renderPlainText(credateStatementData(invoice));
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    //함수 추출하기, playFor(perf) 변수 인라인, playFor 삭제
    //"조금씩 수정하여 피드백 주기를 짧게 가져가는 습관이 재앙을 피하는 길이다"

    //청구 내역을 출력한다.
    result += `${perf.play.name}: ${usd(perf.amount)} (${
      perf.audience
      //playFor(perf) 변수 인라인
      //perf.amount 변수 인라인
    }석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`; //임시 변수였던 usd을 함수 호출로 대체, 변수 인라인 하기
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`; //값 계산 로직을 함수로 추출, 변수 인라인 하기
  return result;
}

function htmlStatement(invoice) {
  return renderHtml(credateStatementData(invoice));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>연극</th><th>좌석수</th<th>금액</th></tr>';
  for (let perf of data.performances) {
    result + `<tr><td>${perf.play.name}</td><td>(${perf.audience}석}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트: <em>${data.totalvolumeCredits}</em>점</p>\n`;
  return result;
}

function usd(aNumber) {
  //format -> usd 좀더 명확한 이름으로 변경
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(aNumber / 100); //100으로 나누는 코드도 추출한 함수로 옮김
}

console.log(statement(invoicesJson));
