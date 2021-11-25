const playsJson = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error('서브클래스에서 처리하도록 설계되었습니다.');
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

function createPerformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
  //return new PerformanceCalculator(aPerformance, aPlay);
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}

class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  get volumeCredits() {
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}

export default function credateStatementData(invoice) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerformance(aPerformance) {
    //데이터 불변성을 위한 얕은 복사
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    //공연료 계산기 생성, 공연 정보를 계산기로 전달
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play; //중간 데이터에 연극 정보를 저장
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerformance) {
    //renderPlainText에서 statement로 옮김
    //임시 변수의 질의 함수로 바꾸기
    return playsJson[aPerformance.playID];
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
