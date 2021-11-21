# 『리팩터링 2판』(원서: [Refactoring 2nd Edition](https://www.amazon.com/dp/0134757599/))

책을 따라 리팩터링 실습을 하는 저장소 💡

<hr>

이 저장소는 『리팩터링 2판』(한빛미디어, 2020)의 [지원사이트](https://github.com/WegraLee/Refactoring)로 부터 clone 하였습니다.
[정오표는 여기](https://docs.google.com/document/d/1IP04YcBgwOfBexV1CPK3gLCr2gmQdPTas2pHcqPuCz4)에서 확인하실 수 있습니다.

---

## 한국어판 독자를 위한 안내

저는 [이클립스](https://www.eclipse.org/)가 탄생하기 전, 지금은 아는 사람이 거의 없을 Visual Age for Java 시절부터 리팩터링을 즐겨 사용하였기에 이 책을 번역한다는 건 개인적으로 의미가 컸습니다. 하지만 개인적인 소회야 독자 여러분의 관심 밖일 것이고, 리팩터링은 어느새 요즘 개발자들의 필수 덕목으로 자리 잡았으니 별달리 설명하거나 강조할 필요는 없을 것입니다. 그래서 한국어판 독자를 위한 간략한 안내 몇 가지로 역자 서문을 대신하고자 합니다.

**첫째,** 번역은 원서의 웹 버전을 기준으로 진행했습니다. 저자가 종이책 출간 후에도 웹 버전에는 지속해서 콘텐츠를 갱신하겠다고 밝혔고, 실제로 이 글을 쓰는 지금 5개의 리팩터링 기법이 추가되었고 1개 리팩터링 기법의 예시가 보강된 상황입니다. 이들 모두는 한국어판에도 반영되어 있습니다. 한국어판 출간 후 갱신되는 내용, 공지, 기타 유용한 정보가 있으면 이 깃허브 페이지를 통해 공유할 계획입니다.

원서의 웹 버전은 원서 구매자가 인증을 거쳐 접근할 수 있기 때문에 아쉽게도 한국어판 독자께는 직접 공유할 수 없습니다.

**둘째,** 이 책은 공식 소스 코드를 제공하지 않습니다(대신 다른 독자가 만들어둔 코드의 [링크](https://github.com/wickedwukong/martin-fowler-refactoring-2nd)를 알려드리고, 혹시 몰라 [백업본](https://github.com/WegraLee/martin-fowler-refactoring-2nd)을 만들어뒀으니 실습해보고 싶은 분은 참고하기 바랍니다). 생각해보면 각각의 예시가 여러 단계를 거쳐 수정되기 때문에 단순히 리팩터링 전/후로 비교해서는 ‘작은 단계로 나눠 진행’하는 모습이 보이지 않고, 모든 단계별 변화를 적절한 설명과 함께 보여줄 마땅한 방법을 찾기 어려웠습니다.

그래서 아쉬움은 남지만, 조금이나마 독자의 이해를 돕고자 편집 관점에서 몇 가지를 보강해보았습니다. 크게는 다음의 두 가지입니다.

* **절차와 예시 설명에서의 번호**: 원서의 리팩터링 기법 절차에는 번호가 없고, 예시의 리팩터링 과정이 이 절차대로 이뤄지는 경우가 거의 없습니다. 특정 단계가 생략되거나 순서가 뒤죽박죽이거나 절차에서 언급되지 않은 수정을 가하기도 합니다. 저자가 서문에서 밝혔듯이 절차는 일반적인 상황을 가정한 지침일 뿐이고 예시는 특정한 상황이기 때문입니다. 이 책에서는 개념을 이해하고 실전에서는 처한 상황에 맞게 응용해야 합니다.

    이유가 무엇이든 결과적으로 절차와 예시가 1:1로 매칭되지 않아서 내용을 따라오는 데 방해가 된다고 느껴졌습니다. 그래서 보완책으로 절차의 각 단계에 ❶, ❷, ❸식으로 번호를 매기고 예시 설명에서 해당 단계가 시작될 때 그 단계의 번호를 붙였습니다. 앞서 이야기했듯이 단계가 생략되거나 순서가 뒤죽박죽인 경우가 많으니 유념하길 바랍니다(오히려 헷갈린다면 번호는 무시해주세요).
* **화살표 주석**: 예시 코드 중 주목할 부분은 진하게 강조했는데, 그것만으로는 의미가 한눈에 들어오지 않아서 곳곳에 다음 예와 같이 화살표 주석을 추가했습니다.

    ```
    totalAmount += **amountFor**(perf);     ← thisAmount 변수를 인라인
    ```

**셋째,** 2판에서 예시를 자바스크립트 코드로 제공하여 자바를 기대하던 독자께는 다소 생소하고 헷갈릴 수 있어 보입니다. 자바스크립트에 익숙하지 않은 분들은 다음 사항들을 배경지식으로 알고 시작하면 코드를 읽는 데 도움이 될 것입니다.

* **객체지향 관련**: 자바스크립트가 ES6(ES2015)부터 객체지향을 지원하기 시작했지만 자바처럼 클래스 사용을 강제하지는 않습니다. 따라서 소스 코드의 최상위가 클래스가 아닌 (C 언어처럼) 함수인 경우가 많습니다. 이 책의 예시들도 마찬가지입니다. 객체지향과 관련한 리팩터링 기법들에서는 클래스를 사용하지만 그렇지 않은 곳에서는 함수 수준에서 다룹니다.
* **함수 vs. 메서드**: 기본적으로 ‘함수’라는 용어를 쓰지만 객체지향 맥락에서 ‘메서드’를 사용합니다. 따라서 예컨대 ‘함수 인라인하기’와 ‘메서드 인라인하기’는 쓰이는 맥락만 다를 뿐 같은 리팩터링 기법을 가리킵니다.
* **중첩 함수**: 자바스크립트는 함수를 중첩해 정의할 수 있습니다. 함수를 중첩하면 내부 함수는 외부 함수에서 정의한 함수 변수(유효 범위가 함수인 변수)와 다른 내부 함수에 접근할 수 있습니다. 자바의 인스턴스 메서드에서 필드와 다른 인스턴스 메서드에 접근할 수 있는 것과 마찬가지입니다.

    예시 코드 중 최상위 함수와 중첩 함수들로 구성된 경우가 제법 많은데, 자바 스타일 코드만을 주로 다루던 독자 분들께는 다소 헷갈릴지 모르겠네요.
* **게터/세터의 이름과 호출 방식**: 자바에서 게터와 세터는 보통 필드 이름 앞에 접두어를 붙여 ```getX()```/```setX(...)``` 형태로 이름 짓고, 일반적인 메서드와 똑같은 방식으로 호출합니다. 반면 자바스크립트에서는 게터와 세터 이름에 보통 별다른 접두어를 붙이지 않으며, 마치 객체의 public 필드를 직접 다루듯 호출할 수 있습니다. 다음 코드를 보시죠.
```
class Person {
  ...
  get name() {return this._name;} // 게터
  set name(arg) {this._name = arg;} // 세터
}

// 다른 코드에서
let person = ... // Person 객체를 생성한다.
console.log(person.name); // 게터가 호출된다.
person.name = "새 이름"; // 세터가 호출된다.
```
* **덕 타이핑**(duck typing): 자바의 타입 시스템의 ‘이름’을 기반으로 타입을 구분합니다. 클래스 A와 B가 똑같은 필드와 메서드를 제공하더라도 클래스 이름이 다르기 때문에 다른 클래스로 취급합니다. 반면 자바스크립트는 ‘구조’를 기준으로 타입을 구분합니다. 즉, 클래스 이름에 상관없이 어떤 타입에 걸맞은 필드와 메서드를 지닌 객체라면 해당 타입으로 간주합니다. 덕 타이핑이란 이름은 “만약 어떤 새가 오리duck처럼 걷고, 헤엄치고, 꽥꽥거린다면 나는 그 새를 오리라고 부를 것이다”라는 비유에서 왔습니다.
코드가 익숙하지 않더라도 걱정할 건 없습니다. 저자도 밝혔듯이 이 책은 자바스크립트용 리팩터링 책이 아니라 범용 리팩터링 책입니다. 단지 예시가 자바스크립트 코드로 쓰여 있을 뿐입니다(자바 코드도 가끔 나옵니다).

**넷째,** 자바와 C#은 다른 프로그래밍 언어들과 비교하여 자동 리팩터링 도구가 상당히 발전한 편입니다. 예컨대 InteliJ IDEA, 이클립스, C#용 비주얼 스튜디오 등은 각각 수십 가지의 리팩터링을 IDE 차원에서 지원합니다. 자동 리팩터링 도구를 사용하면 수많은 리팩터링을 오류 없이 빠르게 수행할 수 있어서 익숙해지면 코드 생산성이 배가됩니다. 뿐만 아니라 부담 없이 코드를 이리저리 바꿔볼 수 있어서 설계에 대한 사고도 유연해짐을 느낄 수 있을 것입니다. 

이 책을 읽고 리팩터링의 개념과 범용 리팩터링 기법들에 익숙해졌다면 자신이 사용하는 언어에서는 어떤 리팩터링 도구를 사용할 수 있는지 찾아보고 활용해보기 바랍니다. 특히 자바와 C# 개발자라면 다음 문서에서 주요 IDE들의 리팩터링 도움말 링크를 찾을 수 있을 것입니다. 언어별 도구들은 이 책에서 다루지 못한 언어 특화 리팩터링 기법들도 상당수 제공하니 꼭 확인해보세요.

* [IDE들이 제공하는 리팩터링 목록](https://docs.google.com/spreadsheets/d/1nFx-PjZ9Qs3QBZFzaMo6MSUSrWjSsO-iz5kpBtlVRPQ/edit#gid=866204681)

---

## ☕️ 자바스크립트를 배워야 하는 이유 (2020.06.10)

『리팩터링 2판』의 예시 코드는 자바스크립트로 쓰여 있습니다.

물론 개념 자체는 언어와 무관하며 이 책을 읽기 위해 자바스크립트를 배울 필요는 없습니다만,
그래도 폴리글랏 프로그래머 시대인 요즘 배워두면 여러모로 쓸모가 많습니다.tube.com/watch?v=9yf-qgXZpw8 "자바스크립트를 배워야 하는 이유")