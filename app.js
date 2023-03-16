let inputCountProduct = document.getElementById("product__count");
let countProduct = 0;
let productSum = 0;
let costProduct = 19.55;

inputCountProduct.addEventListener("input", function () {
  countProduct = inputCountProduct.value;
  IncrementProductSum(countProduct);
});

function IncrementProductSum(count) {
  productSum = costProduct * count;
  productSum = Math.round(productSum * 100) / 100;
  document.querySelector(".sum__span").innerHTML = productSum;
}

IncrementProductSum(productSum);

function buyProduct() {
  alert(`Вы хотите купить ${countProduct} килограмм на сумму $${productSum}`);
}
