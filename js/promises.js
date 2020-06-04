let longPromise = (a, b) => {
  return new Promise((ok, notok) => {
    setTimeout(() => {
      let ab = a + b;
      if (isNaN(ab)) notok("error a and b must be numbers");
      else ok({ ab: ab, a: a, b: b });
    }, 2000);
  });
};

longPromise()
  .then((sum) => {
    console.log(sum);
  })
  .catch((err) => {
    console.log(err);
  });
