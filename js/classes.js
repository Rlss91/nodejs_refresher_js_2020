class CreateL {
  l = 8;
  sum; //a+b+c
  constructor(l, a, b, c) {
    this.l = l;
    this.sum = a + b + c;
  }
  f1() {
    console.log(this);
  }
  f2 = () => {
    console.log(this);
  };
  f3 = (adddd) => {
    console.log(adddd);
  };
}

function printL(obj) {
  console.log(obj.l);
}

let o = new CreateL(50, 1, 2, 3);
let o2 = new CreateL();
let o3 = {
  l: 6,
  f1: function () {
    console.log(this);
  },
  f2: () => {
    console.log(this);
  },
};
o3.f1();
o2.l = 50;
let funcFromO = o.f1.bind(o2);
let func2FromO = o.f2;
let funcFromOBind = funcFromO.bind(o);
// let funcFromO3Bind = o3.f1.bind(o2);
let funcFromO3Bind = o3.f1;
// let o = {
//     l: undefined,
//     f1: ()=>{}
// }

// console.log(o);
o.f1();
o.f2();
funcFromO();
func2FromO();
funcFromOBind();
funcFromO3Bind();
o.f3(5464654);
// console.log(o.f2());
// printL(o2);
