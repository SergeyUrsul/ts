import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// let sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('dcba');
// sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(6);
linkedList.add(8);
linkedList.add(-18);
const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print());
console.log(linkedList.length);
