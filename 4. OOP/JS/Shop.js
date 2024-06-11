import ShoppingCart from "./components/ShoppingCart.js";
import ProductList from "./components/ProductList.js";
import Product from "./components/Product.js";

class Shop {
  render() {
    new ShoppingCart("app").render();
    new ProductList("app", [
      new Product(
        "에어팟",
        200000,
        "에어팟으로 노래를 들어요.",
        "https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
      ),
      new Product(
        "족발",
        40000,
        "냠냠쩝쩝 족발은 앞다리야~",
        "https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp"
      ),
      new Product(
        "요구르트",
        500,
        "요거어어어어어어르트",
        "https://img-cf.kurly.com/shop/data/goods/1630556476801z0.jpg"
      ),
      new Product(
        "쿼터파운더 치즈버거",
        10000,
        "쿼팥치 먹고싶다",
        "https://s7d1.scene7.com/is/image/mcdonalds/202201_3426-005_DoubleQuarterPounderwithCheese_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off"
      ),
      new Product(
        "오렌지",
        2000,
        "오렌지렌지망고애플망고",
        "https://health.chosun.com/site/data/img_dir/2024/02/29/2024022901209_0.jpg"
      ),
    ]).render();
  }
}

export default Shop;
