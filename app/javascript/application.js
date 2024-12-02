import "@hotwired/turbo-rails";
import "controllers";
import { Swiper, Navigation, Pagination } from "swiper"; // Swiperからモジュールをインポート

document.addEventListener("DOMContentLoaded", () => {
  // Swiperモジュールを有効化
  Swiper.use([Navigation, Pagination]);

  const swiper = new Swiper(".swiper", {
    loop: true, // ループ
    speed: 3000, // 少しゆっくり(デフォルトは300)
    autoplay: { // 自動再生
      delay: 1000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  console.log("Swiper initialized:", swiper); // デバッグ用
});
