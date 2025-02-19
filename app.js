const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];
  const people = [
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
  ];
  const travelMethods = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];
  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];

  //EXE 1 Filter the array of inventors into a new array containing only the inventors born in the 1500's.
  const veryOldInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

console.log(veryOldInventors);

//EXE 2 Map the array of inventors into a new array. This new array should only containobjects with the inventors' first and last names.
let inventorNames = inventors.map(inventor => ({
    first: inventor.first,
    last: inventor.last
  }));
  
  console.log(inventorNames);

  //EXE 3 Sort the inventors by birth date in ascending order (from those born furthest inthe past to those born most recently).
  let sortedByBirthYear = inventors.sort((a, b) => a.year - b.year);

console.log(sortedByBirthYear);

//EXE 4 Use Array.prototype.find() to identify the inventor with the first name 'Ada' from an array of inventor objects
let inventorNamedAda = inventors.find(inventor => inventor.first === 'Ada');

console.log(inventorNamedAda);

//EXE 5 Use the Array.prototype.map() method to reformat each name in the 'people' array. The goal is to convert names from "Last, First" format to "First Last" format.
let firstLast = people.map(person => {
    let [last, first] = person.split(', ');
    return `${first} ${last}`;
  });
  
  console.log(firstLast);

  //EXE 6 Determine if there is at least one person in the devs array who is 18 years old or older
  let isAdultPresent = devs.some(dev => (new Date().getFullYear() - dev.year) >= 18);

console.log(isAdultPresent);

//EXE 7 Use Array.prototype.every() to determine if every person in the devs array is 19 years old or older.
let isEveryone19OrOlder = devs.every(dev => (new Date().getFullYear() - dev.year) >= 19);

console.log(isEveryone19OrOlder);

//EXE 8 Use Array.prototype.find() to identify and retrieve the comment object with a specific ID 823423 from an array of comment objects.

let commentById = comments.find(comment => comment.id === 823423);

console.log(commentById);

//EXE 9 Determine the index of the comment that has a specific ID 123523 in an array of comment objects.


let idx = comments.findIndex(comment => comment.id === 123523);

console.log(idx);


  
