class ShoppingCart {
  constructor() {
    //장바구니에 담은 product들을 저장
    this.cartItems = [];
  }

  render() {
    const $header = document.createElement('section');
    $header.classList.add('cart');
    $header.innerHTML = `
        <h2>총액 0원<h2>
        <button>주문하기</button>
        `;
    return $header;
  }
}
//외부로 쏨
export default ShoppingCart;
