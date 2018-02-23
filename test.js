/*var obj1 ={};

obj1.id="1"
obj1.qty='7';

var obj2={}
obj2.id="2"
obj2.qty='11'

var map = new Map();

map.set('1', obj1)
map.set('2', obj2);

var id='1';

var newMap = new Map();


for (var key of map.keys()) {
  if(key === id){
      var ne =map.get(key);
      let e = {}
      e.id = key;
      e.qty= parseInt(ne.qty) +1;
      newMap.set(key,e);
  }
}

console.log(newMap.get(id));
*/

const json = {id: "29", name: "Givenchy Irresistible", price: 200, discount: 190, productType: "women", description: 'Aqua Gioa'}


const Immutable =require('./node_modules/immutable/dist/immutable.min.js')

const jsonObject =Immutable.fromJS(json);



const item ={}

item.id = jsonObject.get('id');
item.name = jsonObject.get('name');
item.description = jsonObject.get('description');
item.price = jsonObject.get('price')
item.qty=0

console.log(item);

const map = Immutable.Map({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobile:'',
    addr1:'',
    addr2:'',
    creditCardNumber:'',
    creditCardName:'',
    carditCardExpiryDate:'',
    carditCardCVV:'',
    items:[]
    
})
    
const n = map.update('item',map.get('items').push(item))


/*
const doChunk = (list, size) => list.reduce((r, v) =>
  (!r.length || r[r.length - 1].length === size ?
    r.push([v]) : r[r.length - 1].push(v)) && r
, []);

const arr =doChunk([0,1,2,3,4,5,6,7,8,9,10,11,12], 5);
console.log(arr.length)


const map = new Map()
.set(1, 'one')
.set(2, 'two')
.set(3, 'three');


var cart = {firstName:'Revit',
            lastName:'Hathaisatpong',
            email:'revit@gmail.com',
            password:'peot',
            add1:'address 1',
            add2:'address 2',
            total:0,
            items:[{ id: '1', title: 'Gucci', desc: 'Guilty',price:190,qty:1},
                   { id: '2', title: 'Dior', desc: 'My Dior',price:100,qty:2}
                  ]
           };





const imtObj = Immutable.fromJS(cart);
 
const items =imtObj.get('items')

console.log(items.get('1'))

//console.log(imtObj.has(1));

console.log(imtObj.toJS())
*/