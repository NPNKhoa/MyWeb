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
    photo: "images/sanpham/kiwi.jpg",
  },

  sp002: {
    name: "Sữa Chua Vị Xoài",
    price: 22000,
    photo: "images/sanpham/mango.jpg",
  },

  sp003: {
    name: "Sữa Chua Vị Dưa Lưới",
    price: 23000,
    photo: "images/sanpham/cantaloupe.jpg",
  },

  sp004: {
    name: "Sữa Chua Vị Mâm Xôi",
    price: 24000,
    photo: "images/sanpham/blackberry.jpg",
  },

  sp005: {
    name: "Sữa Chua Vị Dâu Tây",
    price: 25000,
    photo: "images/sanpham/strawberry.jpg",
  },

  sp006: {
    name: "Sữa Chua Vị Việt Quất",
    price: 26000,
    photo: "images/sanpham/blueberry.jpg",
  },

  sp007: {
    name: "Sữa Chua Vị Bưởi",
    price: 27000,
    photo: "images/sanpham/grapes.jpg",
  },

  sp008: {
    name: "Sữa Chua Vị Táo Xanh",
    price: 28000,
    photo: "images/sanpham/green-apple.jpg",
  },

  sp009: {
    name: "Sữa Chua Vị Dứa",
    price: 29000,
    photo: "images/sanpham/pineapple.jpg",
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
    let item = itemList[key];
    let name = item.name;
    let price = item.price;
    let photo = item.photo;
    let orderNumber = localStorage.getItem(key);

    let tr = document.createElement("tr");

    let td_img = document.createElement("td");
    let img = document.createElement("img");
    let src = document.createAttribute("src");
    src.value = photo;
    img.setAttribute("width", "100px");
    td_img.setAttribute("class", "center-align");
    img.setAttributeNode(src);
    td_img.appendChild(img);
    tr.appendChild(td_img);

    let td_name = document.createElement("td");
    td_name.innerText = name;
    td_name.setAttribute("class", "left-align");
    tr.appendChild(td_name);

    let td_num = document.createElement("td");
    td_num.innerText = orderNumber;
    td_num.setAttribute("class", "right-align");
    tr.appendChild(td_num);

    let td_price = document.createElement("td");
    td_price.innerText = price + "đ";
    td_price.setAttribute("class", "right-align");
    tr.appendChild(td_price);

    let td_total = document.createElement("td");
    let total = parseInt(price) * parseInt(orderNumber);
    td_total.innerText = total;
    td_total.setAttribute("class", "right-align");
    tr.appendChild(td_total);

    let td_del = document.createElement("td");
    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash icon-pink");
    td_del.setAttribute("class", "center-align");
    td_del.appendChild(i);
    tr.appendChild(td_del);
    i.addEventListener("click", removeCart(this.dataset.code));

    let table = document.querySelector("table.donhang");
    table.appendChild(tr);
  }
}

window.onstorage = () => {
  showCart();
};

function removeCart(code) {
  if (typeof window.localStorage[code] != "undefined") {
    window.localStorage.removeItem(code);
    document
      .getElementById("cartDetail")
      .getElementsByTagName("tbody")[0].innerHTML = "";
    showCart();
  }
}
