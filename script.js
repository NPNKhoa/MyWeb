let search_input = document.querySelector("header div input");
let search_button = document.querySelector(".fas.fa-search");

function Submit() {
  let inputValue = search_input.value;
  inputValue = inputValue.trim();
  if (inputValue != "") {
    alert(search_input.value);
  }
  search_input.value = "";
}

search_input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    Submit();
  }
});

search_button.addEventListener("click", function () {
  Submit();
});

function frmValidate5(frm) {
  return frm.checkValidate();
}

var itemList = {
  sp001: {
    name: "Sữa Chua Vị Kiwi",
    price: 21000,
    photo: "images/sanpham/kiwi.jgp",
  },

  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "images/sanpham/mango.jgp",
  },

  sp003: {
    name: "Sữa Chua Vị Dưa Lưới",
    price: 23000,
    photo: "images/sanpham/cantaloupe.jgp",
  },

  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "images/sanpham/blackberry.jgp",
  },

  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "images/sanpham/strawberry.jgp",
  },

  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "images/sanpham/blueberry.jgp",
  },

  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "images/sanpham/grapes.jgp",
  },

  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "images/sanpham/green-apple.jgp",
  },

  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "images/sanpham/pineapple.jgp",
  },
};

function addCart(code) {
  let number = parseInt(document.getElementById(code).value);
  if (number > 100) {
    alert("Invalid!");
    return;
  }
  if (typeof localStorage[code] === "undefined") {
    window.localStorage.setItem(code, number);
  } else {
    let total = number + parseInt(window.localStorage.getItem(code));
    if (total > 100) {
      window.localStorage.setItem(code, 100);
      alert("Số lượng quá quy định!");
    } else {
      window.localStorage.setItem(code, total);
    }
  }
}

let cart_button = document.querySelector(".fas.fa-shopping-cart");

cart_button.addEventListener("click", function () {
  window.location.href = "donhang.html";
});

function showCart() {
  let totalPreTax = 0;
  for (const key in window.localStorage) {
    item = itemList[key];
    name = item.name;
    price = item.price;
    photo = item.photo;
    orderNumber = localStorage.getItem(key);
  }
}
