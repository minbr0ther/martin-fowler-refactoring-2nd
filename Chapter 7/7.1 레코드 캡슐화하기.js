// Before
const organization = { name: '애크미 구스베리', country: 'GB' };

// After
class Organization {
  constructor(name, country) {
    this._name = name;
    this._country = country;
  }
  get name() {
    return this._name;
  }
  set name(string) {
    this._name = string;
  }
  get country() {
    return this._country;
  }
  set country(string) {
    this._country = string;
  }
}

const gb = new Organization('애크미 구스 베리', 'GB');
