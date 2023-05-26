const payBtn = document.querySelector(".pay-btn");
const inputFields = document.getElementsByTagName("input");
payBtn.addEventListener("click", () => {
  event.preventDefault();
  let checkEmailAdress = inputFields[0].value.includes("@");
  checkEmailAdress = inputFields[0].value.includes(".");
  if (
    inputFields[0].value &&
    checkEmailAdress &&
    inputFields[1].value &&
    inputFields[2].value &&
    inputFields[3].value &&
    inputFields[4].value
  ) {
    document.querySelector(".payed").style.display = "flex";
  }
  //   setTimeout(
  //     () => (document.querySelector(".payed").style.display = "none"),
  //     3000
  //   );
  console.log(checkEmailAdress);
});
