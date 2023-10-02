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
    alert("Số lượng đặt hàng không được vượt quá 100!");
    return;
  }
  if (number == 0) {
    alert("Số lượng đặt hàng phải lớn hơn 0!");
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

const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function showCart() {
  document
    .getElementById("cartDetail")
    .getElementsByTagName("tbody")[0].innerHTML = "";
  let totalPreTax = 0;
  let discount = 0;
  let tax = 0;
  let totalPrice = 0;
  for (const key in window.localStorage) {
    let name = itemList[key].name;
    let price = itemList[key].price;
    let photo = itemList[key].photo;
    let orderNumber = localStorage.getItem(key);

    let tr = document.createElement("tr");

    let td_img = document.createElement("td");
    td_img.innerHTML =
      "<img src='" + photo + "' class='round-figure' width='100px' />";
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
    td_price.innerText = VND.format(price);
    td_price.setAttribute("class", "right-align");
    tr.appendChild(td_price);

    let td_total = document.createElement("td");
    let total = parseInt(price) * parseInt(orderNumber);
    total = VND.format(total);
    td_total.innerText = total;
    td_total.setAttribute("class", "right-align");
    tr.appendChild(td_total);

    let td_del = document.createElement("td");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("data-code", key);
    let i = document.createElement("i");
    i.setAttribute("class", "fa fa-trash icon-pink");
    td_del.setAttribute("class", "center-align");
    a.appendChild(i);
    td_del.appendChild(a);
    tr.appendChild(td_del);
    a.onclick = () => removeCart(key);

    let tbody = document.querySelector("#cartDetail tbody");
    tbody.appendChild(tr);

    totalPreTax = totalPreTax + price * orderNumber;
    discount = totalPreTax * getDiscountRate();
    tax = (totalPreTax - discount) * 0.1;
    totalPrice = totalPreTax - discount + tax;
    let l = document.querySelectorAll("#cartDetail tfoot span");
    l[0].textContent = VND.format(totalPreTax);
    l[1].textContent = VND.format(discount);
    l[2].textContent = VND.format(tax);
    l[3].textContent = VND.format(totalPrice);
  }
}

function removeCart(code) {
  if (window.localStorage[code]) {
    window.localStorage.removeItem(code);
    document
      .getElementById("cartDetail")
      .getElementsByTagName("tbody")[0].innerHTML = "";
    showCart();
  }
}

function getDiscountRate() {
  var d = new Date();
  var weekDay = d.getDay();
  var totalMins = d.getHours() * 60 + d.getMinutes();

  if (
    weekDay >= 1 &&
    weekDay <= 3 &&
    ((totalMins >= 420 && totalMins <= 660) ||
      (totalMins >= 780 && totalMins <= 1020))
  ) {
    return 0.1;
  }
  return 0;
}

window.onload = () => showCart();

window.onstorage = function () {
  showCart();
};
