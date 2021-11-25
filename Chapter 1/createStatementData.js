const playsJson = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

export default function credateStatementData(invoice) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    //데이터 불변성을 위한 얕은 복사
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result); //중간 데이터에 연극 정보를 저장
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerformance) {
    //renderPlainText에서 statement로 옮김
    //임시 변수의 질의 함수로 바꾸기
    return playsJson[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    //perf -> aPerformance : 접두어로 타입 이름 붙임
    //"매개변수의 역할이 뚜렷하지 않을 때는 부정관사 (a/an)를 붙인다."
    //"컴퓨터가 이해하는 코드는 바보도  작성할 수 있다. 사람이 이해하도록 작성하는 프로그래머가 진정한 실력자다."
    //"좋은 코드라면 하는 일이 명확히 드러나야하며, 이때 변수 이름은 커다란 역할을 한다."
    let result = 0; //thsAmount -> result

    switch (aPerformance.play.type) {
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
        throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
    }

    return result; //함수 안에서 값이 바뀌는 변수 반환
  }

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);

    //희극 관객 5명 마다 추가 포인트를 제공한다.
    if ('comedy' === aPerformance.play.type) {
      //playFor(aPerformance) 변수 인라인
      volumeCredits += Math.floor(aPerformance.audience / 5);
    }
    return volumeCredits;
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
    //p => perf 반복문을 파이프라인으로 바꿈
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    //p => perf 반복문을 파이프라인으로 바꿈
  }
}
