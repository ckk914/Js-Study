import Component from "./Component.js";

// LI 태그 렌더링 담당
class ProductItem extends Component {
  constructor(tagId, prod,shoppingCart) {
    super(tagId);
    this.prod = prod;
    this.shoppingCart = shoppingCart;
  }

  render() {
    const { title, price, image, desc } = this.prod;

    const childHtml = `
    <div>
      <img src="${image}" alt="${title}">
      <div class="product-item__content">
        <h2>${title}</h2>
        <h3>${price}원</h3>
        <p>${desc}</p>
        <button>담기</button>
      </div>
    </div>
    `;

    const $prodLi = this.createElement("li", "product-item", childHtml);

    const $btn = $prodLi.querySelector("button");
    $btn.addEventListener("click", (e) => {
      console.log(title);
      console.log("버튼 크릭!!");
      this.shoppingCart.addToCart(this.prod);
    });

    return $prodLi;
  }
}

export default ProductItem;
