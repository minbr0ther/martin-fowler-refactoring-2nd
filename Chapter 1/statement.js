let playsJson = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

let invoicesJson = {
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
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    //함수 추출하기, playFor(perf) 변수 인라인, playFor 삭제
    //"조금씩 수정하여 피드백 주기를 짧게 가져가는 습관이 재앙을 피하는 길이다"

    //청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
      //playFor(perf) 변수 인라인
      //amountFor(perf) 변수 인라인
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; //임시 변수였던 usd을 함수 호출로 대체, 변수 인라인 하기
  result += `적립 포인트: ${totalVolumeCredits()}점\n`; //값 계산 로직을 함수로 추출, 변수 인라인 하기
  return result;

  function totalAmount() {
    let result = 0; //변수 이름 바꾸기
    for (let perf of invoicesJson.performances) {
      result += amountFor(perf);
    }
    return result;
  }

  function totalVolumeCredits() {
    let result = 0; //변수 이름 바꾸기
    for (let perf of invoicesJson.performances) {
      //값 누적 로직을 별도 for문으로 분리
      //포인트를 적립한다.
      result += volumeCreditsFor(perf); //추출한 함수를 이용해 값을 누적
    }
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

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);

    //희극 관객 5명 마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(aPerformance).type) {
      //playFor(aPerformance) 변수 인라인
      volumeCredits += Math.floor(aPerformance.audience / 5);
    }
    return volumeCredits;
  }

  function playFor(aPerformance) {
    //임시 변수의 질의 함수로 바꾸기
    return playsJson[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    //perf -> aPerformance : 접두어로 타입 이름 붙임
    //"매개변수의 역할이 뚜렷하지 않을 때는 부정관사 (a/an)를 붙인다."
    //"컴퓨터가 이해하는 코드는 바보도  작성할 수 있다. 사람이 이해하도록 작성하는 프로그래머가 진정한 실력자다."
    //"좋은 코드라면 하는 일이 명확히 드러나야하며, 이때 변수 이름은 커다란 역할을 한다."
    let result = 0; //thsAmount -> result

    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy': //희극
        result = 30000;
        if (aPerformance.audience > 20) {
          result += 10000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }

    return result; //함수 안에서 값이 바뀌는 변수 반환
  }
}

console.log(statement(invoicesJson));
