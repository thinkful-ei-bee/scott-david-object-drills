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

/*function testIt() {
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
  
testIt();*/

// function enrollInSummerSchool(students) {
//   const summerStudents = [];
//   students.forEach((function(element) {
//     element.status = 'In Summer School';
//     summerStudents.push(element);
//   })
//   );
//   return summerStudents;
// }

// function testIt() {
//   var testData = [
//     {
//       name: 'Burt',
//       status: 'Playing hooky',
//       course: 'Biology',
//     },
//     {
//       name: 'Melanie',
//       status: 'Sick',
//       course: 'Mathematics',
//     },
//     {
//       name: 'Leonard',
//       status: 'AWOL',
//       course: 'Computer science',
//     },
//   ];
  
//   var results = enrollInSummerSchool(testData);
  
//   if (!(results && results instanceof Array)) {
//     console.error('FAILURE: `enrollSummerSchool` must return an array');
//     return;
//   }
//   var result = testData.every(function(student) {
//     var match = results.find(function(_student) {
//       return (
//         _student.name === student.name &&
//           _student.course === student.course &&
//           _student.status.toLowerCase() === 'in summer school'
//       );
//     });
//     return match !== undefined;
//   });
//   if (!result) {
//     console.error(
//       'FAILURE: `enrollSummerSchool` should return ' +
//           'original key/value pairs for each student, and ' +
//           'update `status` to "In Summer school": ' +
//           JSON.stringify(results)
//     );
//   } else {
//     console.info('SUCCESS: `enrollSummerSchool` is working');
//   }
// }
  
// testIt();

function findById(items, idNum) {
  for (let i=0; i<items.length; i++){
    if (idNum === items[i].id){
      return items[i];
    }
  }
}

/*function testIt() {
  const testData = [
    { id: 1, foo: 'bar' },
    { id: 2, foo: 'bizz' },
    { id: 3, bang: 'boo' },
  ];
  const result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return;
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' + result.id
    );
    return;
  }
  if (result.bang !== 'boo') {
    console.error(
      'Expected all key/value pairs from target object to be returned'
    );
    return;
  }
  console.log('SUCCESS: `findByid` is working');
}
  
testIt();*/

// function validateKeys(object, expectedKeys) {
//   const objKeys = Object.keys(object);
//   let itemsMatch = false;
//   if (objKeys.length !== expectedKeys.length) {
//     return false;
//   }
//   for (let i=0; i < expectedKeys.length; i++) {
//     if (objKeys.includes(expectedKeys[i])) {
//       itemsMatch = true;
//     } else {
//       itemsMatch = false;
//       return itemsMatch;
//     }
//   }
//   return itemsMatch;
// }

// function testIt() {
//   const objectA = {
//     id: 2,
//     name: 'Jane Doe',
//     age: 34,
//     city: 'Chicago',
//   };

//   const objectB = {
//     id: 3,
//     age: 33,
//     city: 'Peoria',
//   };

//   const objectC = {
//     id: 9,
//     name: 'Billy Bear',
//     age: 62,
//     city: 'Milwaukee',
//     status: 'paused',
//   };

//   const objectD = {
//     foo: 2,
//     bar: 'Jane Doe',
//     bizz: 34,
//     bang: 'Chicago',
//   };

//   const expectedKeys = ['id', 'name', 'age', 'city'];

//   if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
//     console.error('FAILURE: validateKeys should return a boolean value');
//     return;
//   }

//   if (!validateKeys(objectA, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return true but returned false:
//       Object: ${JSON.stringify(objectA)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectB, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectB)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectC, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectC)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   if (validateKeys(objectD, expectedKeys)) {
//     console.error(
//       `FAILURE: running validateKeys with the following object and keys
//       should return false but returned true:
//       Object: ${JSON.stringify(objectD)}
//       Expected keys: ${expectedKeys}`
//     );
//     return;
//   }

//   console.log('SUCCESS: validateKeys is working');
// }

// testIt();

  
// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function () {
//     return (this.water / this.flour) * 100;
//   }
// };

// console.log('Flour:', loaf.flour);
// console.log('Water:', loaf.water);
// console.log('Hydration:', loaf.hydration());

// const object1 = {
//   foo: 'hello',
//   bar: 'world',
//   fum: 'hi',
//   quux: 'what is up',
//   spam: 'food',
// };

// for (const key in object1) {
//   console.log(key, object1[key]);
// }

// const hobbit = {
//   meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };
// console.log(hobbit.meals[3]);