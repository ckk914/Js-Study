import ProductItem from "./ProductItem.js";
//ul태그 렌더링 담당
class productList {
  //배열을 받아옴
  constructor(products) {
    this.products = products;
  }
  render() {
    // render: function () == render()
    const $prodList = document.createElement("ul");
    $prodList.classList.add("product-list");
    //반복해서 li 태그를 생성
    // console.log("products:", this.products);
    this.products.forEach((prod) => {
      const product = new ProductItem(prod);

      $prodList.appendChild(product.render()); //마찬가지로 ul에 li가 꽂힌다~!
    });

    //div#app에 ul 추가
    //   document.getElementById("app").appendChild($prodList);

    return $prodList;
  }
}

export default productList;
