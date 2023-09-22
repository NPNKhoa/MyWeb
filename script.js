let input = document.getElementById("search");
let search_button = document.querySelector(".fas.fa-search");

function Submit() {
  let inputValue = input.value;
  inputValue = inputValue.trim();
  if (inputValue != "") {
    alert(input.value);
  }
  input.value = "";
}

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    Submit();
  }
});

search_button.addEventListener("click", function (event) {
  Submit();
});

function Validate() {
  let passwd = document.getElementById("password");
  if (passwd.size < 8) {
  }

  ///Thay doi
}
