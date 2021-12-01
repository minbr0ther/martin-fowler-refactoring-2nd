// Before
let defaultOwner = { firstName: '마틴', lastName: '파울러' };
spaceship.owner = defaultOwner; // 데이터를 참조하는 코드
defaultOwner = { firstName: '레베카', lastName: '파슨스' };

//Step 1.
function getDefaultOwner() {
  //getter
  return defaultOwner;
}
function setDefaultOwner(arg) {
  //setter
  defaultOwner = arg;
}
spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

//Step 2.
let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };
export function defaultOwner() {
  //getter, 굳이 get을 써줄 필요가 없다
  return { ...defaultOwnerData };
}
export function setDefaultOwner(arg) {
  //setter
  defaultOwnerData = arg;
}
spaceship.owner = defaultOwner();
setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

//Step 3.
let defaultOwnerData = { firstName: '마틴', lastName: '파울러' };
export function defaultOwner() {
  return new Person(defaultOwnerData);
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
//이렇게 하면 defaultOwnerData의 속성을 다시 대입하는 연산은 모두 무시된다.
