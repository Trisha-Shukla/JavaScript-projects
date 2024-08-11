let FoodItem = document.querySelectorAll(".food-item");
let PlaceOrder = document.getElementById("place-order");
let orderid = 100;

function preparingOrder() {
  PlaceOrder.disabled = true;
  FoodItem.forEach((ele) => {
    ele.addEventListener("click", SelectingOrder);
  });
  PlaceOrder.addEventListener("click", orderresponse);
}

function SelectingOrder() {
  let storingorder = [];
  FoodItem.forEach((ele) => {
    if (ele.checked) {
      storingorder.push(ele.id);
    }
  });
  if (storingorder.length === 0) {
    PlaceOrder.disabled = true;
    alert("Select Order");
    return;
  }
  PlaceOrder.disabled = false;
  return storingorder;
}

async function PlacingOrder() {
  let p1 = new Promise(function (res, rej) {
    let returnorder = SelectingOrder();
    let incrementorder = orderid++;

    setTimeout(() => {
      res({ returnorder, incrementorder });
    }, randomtime());
  });

  return p1;
}

async function orderresponse() {
  try {
    console.log("Order Id: " + orderid + " your order is getting prepared");

    let { returnorder, incrementorder } = await PlacingOrder();
    document.getElementById(
      "orderid"
    ).innerText = `Order Id: ${incrementorder}`;

    document.querySelector(".image").innerHTML = "";
    returnorder.forEach((ele) => {
      console.log(ele);

      if (ele === "Burger") {
        document.querySelector(
          ".image"
        ).innerHTML += `<img src="images/burger.avif">`;
      }
      if (ele === "french-fries") {
        document.querySelector(
          ".image"
        ).innerHTML += `<img src="images/fries.avif">`;
      }
      if (ele === "pizza") {
        document.querySelector(
          ".image"
        ).innerHTML += `<img src="images/pizza.jfif">`;
      }
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function randomtime() {
  let time = Math.floor(Math.random() * 4001) + 1000;
  return time;
}
preparingOrder();
