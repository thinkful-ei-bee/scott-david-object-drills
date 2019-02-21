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

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
function keyDeleter(obj) {
  // your code here
  delete obj.foo;
  delete obj.bar;
  return obj;
}

// console.log(keyDeleter(sampleObj));


function makeStudentsReport(data) {
  let report = [];
  data.forEach(item => report.push(`${item.name}: ${item.grade}`));
  return report;
}

function testIt() {
  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];
  
  const expectations = ['Jane Doe: A', 'John Dough: B', 'Jill Do: A'];
  
  const results = makeStudentsReport(testData);
  
  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `makeStudentsReport` must return an array');
    return;
  }
  if (results.length !== testData.length) {
    console.error(
      'FAILURE: test data had length of ' +
          testData.length +
          ' but `makeStudentsReport` returned array of length ' +
          results.length
    );
    return;
  }
  for (let i = 0; i < expectations.length; i++) {
    let expect = expectations[i];
    if (
      !results.find(function(item) {
        return item === expect;
      })
    ) {
      console.error(
        'FAILURE: `makeStudentsReport` is not ' + 'producing expected strings'
      );
      return;
    }
  }
  console.log('SUCCESS: `makeStudentsReport` is working');
}
  
testIt();