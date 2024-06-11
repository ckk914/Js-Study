import Component from "./Component.js";

class ShoppingCart extends Component {
  constructor(tagId) {
    super(tagId);
    // 장바구니에 담은 product들을 저장
    this.cartItems = [];
    //총액 저장 변수
    this.total = 0;
  }

  addToCart(prod) {
    console.log(prod);
    this.cartItems.push(prod);
    this.total += prod.price;
    this.updateTotalPrice();
  }
  updateTotalPrice() {
    document.getElementById("total-price").textContent = this.total;
  }

  render() {
    const childHtml = `
      <h2>총액 <span id='total-price'>0</span>원</h2>
      <button>주문하기</button>
    `;

    this.createElement("section", "cart", childHtml);
  }
}

export default ShoppingCart;
