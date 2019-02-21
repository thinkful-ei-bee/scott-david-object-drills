/* eslint-disable strict */
function createMyObject () {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    hello: function () {
      return 'hello';
    }
  };
}

//console.log(createMyObject());

function updateObject (myObj) {
  myObj.foo = 'foo';
  myObj.bar = 'bar';
  myObj.bizz = 'bizz';
  myObj.bang = 'bang';

  return myObj;
}

const updateObj = {
  foo: 'hello',
  bar: 'world',
  bizz: 'coding',
  bang: 'JS',
};
//console.log(updateObject(updateObj));

function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

//console.log(personMaker());