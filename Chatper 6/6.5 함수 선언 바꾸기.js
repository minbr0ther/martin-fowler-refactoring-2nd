// Book 클래스 ...
addReservation(customer) {
    this._reservations.push(customer);
}

//step 1. 
addReservation(customer) {
    this.zz_addReservation(customer);
}

zz_addReservation(customer) {
    this._reservations.push(customer);
}

//step 2. 
addReservation(customer) {
    this.zz_addReservation(customer, false);
}

zz_addReservation(customer, isPriority) {
    this._reservations.push(customer);
}

//step 3.
zz_addReservation(customer, isPriority) {
    asserts(isPriority === true || isPriority === false);
    this._reservations.push(customer);
}