let tout;
function handleBtnClick() {
  tout = setInterval(() => {
    console.log("happends");
  }, 1000);
}

function handleBtnClickStop() {
  clearInterval(tout);
}
