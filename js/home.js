window.addEventListener("load", () => {
  let arr = ["af", "feg", "herh"];
  arr = [...arr, "dss"];
  console.log(arr);
  let obj = {
    k: 1,
    k2: 3,
    arr: arr,
  };
  obj.k3 = "fea";
  obj.str = `kjgnerlkgj ${arr[0]} gfiuheroiugh`;
  //   let obj2 = { ...obj };
  //   let obj2 = obj;
  //   console.log(obj);
  //   console.log(obj2);
  let div = document.getElementById("div");
  for (let item of arr) {
    div.innerHTML += `<div onclick="f1(event)">${item}</div>`;
  }
  initCrispy();
});

function f1(e) {
  console.log(e.target);
  e.target.innerHTML = "ok";
}

function handleBtnClick() {
  let evt = new CustomEvent("crispy", {
    detail: {
      date: new Date(),
    },
  });
  document.getElementById("div").dispatchEvent(evt);
}

function evf(e) {
  console.log(e);
  e.target.innerHTML = e.detail.date.toString();
}

function initCrispy() {
  let div = document.getElementById("div");
  div.addEventListener("crispy", evf);
}

// function cevent() {
//   let div = document.getElementById("div");
//   let evtf = (data) => {
//     console.log(data);
//   };
//   div.addEventListener("tttt", evtf);
//   let evt = new CustomEvent("tttt", {
//     detail: {
//       test: 1,
//       test2: 2,
//     },
//   });
//   div.dispatchEvent(evt);
//   div.removeEventListener("tttt", evtf);
// }
