import Component from "./Component.js";

class ShoppingCart extends Component {
  constructor(tagId) {
    super(tagId);
    // 장바구니에 담은 product들을 저장
    this.cartItems = [];
  }

  render() {
    const childHtml = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;

    this.createElement("section", "cart", childHtml);
  }
}

export default ShoppingCart;
