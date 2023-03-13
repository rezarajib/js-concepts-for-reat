const products = [
      {name:'sorisa', price:3200, brand :'bapari',color:'yellow'},
      {name:'gom', price :1900, brand :'bapariOne',color:'red'},
      {name:'rice', price:2200, brand :'bapariTwo',color:'blue'},
      {name:'vutta', price:2100, brand :'bapariThree',color:'green'},
      {name:'til', price:3100, brand :'bapariFour',color:'white'},
      {name:'kalogira', price:12000, brand :'bapariFive',color:'gray'},
      {name:'paira', price:2300, brand :'bapariSix',color:'golden'},
]

// const brands = products.map(product => product.name);

// const brands = products.map(product => product.price);

// const allProductsDetails = products.map(product => product.name);
// console.log(allProductsDetails);

// products.forEach(product => console.log(product.color));

// use forEach 

// products.forEach(product => console.log(product.name));
// products.forEach(product => console.log(product.color));

// multiline array function 

// products.forEach(product => {

// })

// use multiline array function 

// products.forEach(product => {

// })

// use for multiline array function for the forEach

// products.forEach(product =>{


// })

//  three number method filter kono ekta conditon dile ki vabe dibo

// const cheap = products.filter(product => product.price <= 5000)

//  use method filter 

// const cheap = products.filter(product => product.price <= 2100);

//  use for filter 

// const cheap = products.filter(product => product.price <= 20000);

// console.log(cheap);

// const specialName = products.filter(product => product.name.includes('s'));
// console.log(specialName);

//  find 

const special = products.find(product => product.name.includes('r'));
console.log(special);