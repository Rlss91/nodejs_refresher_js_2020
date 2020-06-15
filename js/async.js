let simPromise = () => {
  return new Promise((ok, notok) => {
    setTimeout(() => {
      //   ok("ok");
      notok("not ok");
    }, 2000);
  });
};

window.addEventListener("load", async () => {
  try {
    let data = await simPromise();
    console.log(data);
  } catch (ex) {
    console.log(ex);
  }
});
