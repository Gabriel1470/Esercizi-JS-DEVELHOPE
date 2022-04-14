

function createStore() {
 let shop = []

 return function (prodotto){
shop.push(prodotto)
console.log(shop)

 }
 
}


const NikeYeezy = {id: 3, name: 'Yeezy Boost'};
const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
dressStore(NikeYeezy);

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);