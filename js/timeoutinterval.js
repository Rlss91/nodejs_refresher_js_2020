let tout;
function handleBtnClick() {
  tout = setTimeout(() => {
    console.log("happends");
  }, 1000);
}

function handleBtnClickStop() {
  clearTimeout(tout);
}
