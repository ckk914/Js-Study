import Product from "./components/Product.js";
import ProductItem from "./components/ProductItem.js";

//상품 데이터
const p1 = new Product(
  "에어팟",
  200000,
  "에어팟으로 노래를 들어요",
  "https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
);
const p2 = new Product(
  "족발",
  20000,
  "족발먹자",
  "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/5580516695/B.jpg?695000000"
);

//서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    new Product(
      "요구르트",
      500,
      "요거어어어어어어르트",
      "https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg"
    ),
    new Product(
      "쿼터파운더 치즈버거",
      10000,
      "쿼팥치",
      "https://i.namu.wiki/i/qHmwveTDDajIM5R6q6CiXtCNs7ZD50X1tzRO354II6B0Fr3IKWPueT1nPMbwCoT49RoZO3k77P46kuG2dsI3bQ.webp"
    ),
  ],

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
    document.getElementById("app").appendChild($prodList);
  },
};

productList.render();
