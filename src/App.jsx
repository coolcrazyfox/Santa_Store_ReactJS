// import React, { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      {" "}
      <header class="header">
        <nav>
          <div class="nav__logo">
            <img src="assets/logo-white.png" alt="logo" />
          </div>
          <div class="nav__actions">
            <a href="#">
              <i class="ri-user-3-line"></i>
            </a>
            <a href="#">
              <i class="ri-gift-line"></i>
            </a>
            <a href="#">
              <i class="ri-map-pin-2-line"></i>
            </a>
          </div>
        </nav>
        <div class="section__container header__container">
          <img src="assets/header.png" alt="header" />
          <div class="header__content">
            <h4>
              Begin your
              <br />
              festival with...
            </h4>
            <p>
              This is an easy to install christmas tree which your kids or
              office colleagues will have a lot of fun decorating.
            </p>
          </div>
          <div class="header__tag">
            Buy This Product{" "}
            <span>
              <i class="ri-shopping-basket-line"></i>
            </span>
          </div>
        </div>
      </header>
      <section class="section__container festive__container">
        <div class="festive__image">
          <div class="bg"></div>
          <img src="assets/festive.png" alt="festive" />
        </div>
        <div class="festive__content">
          <h2 class="section__header">
            Explore our range of festive collection
          </h2>
          <p class="section__description">
            HO HO HO! Merriest time of year is here. Decorate your home or
            office with our range of Christmas utility collection. If you want
            to make this more fun please explore our range of commodities.
          </p>
          <div class="festive__btn">
            <button class="btn">Explore The Range</button>
          </div>
        </div>
      </section>
      <section class="category">
        <div class="section__container category__container">
          <img src="assets/bg-png.png" alt="bg" class="category__bg" />
          <h2 class="section__header">
            Shop by our <span>festive</span> Categories
          </h2>
          <p class="section__description">
            Our wide range of categories are created using the best materials to
            create an amazing white christmas effect.
          </p>
          <div class="category__flex">
            <div class="category__card">
              <img src="assets/category-1.png" alt="category" />
              <h4>Toys</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-2.png" alt="category" />
              <h4>Gifts</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-3.png" alt="category" />
              <h4>Decors</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-4.png" alt="category" />
              <h4>Snacks</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-5.png" alt="category" />
              <h4>Cloths</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-6.png" alt="category" />
              <h4>Sweets</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-7.png" alt="category" />
              <h4>Claus</h4>
            </div>
            <div class="category__card">
              <img src="assets/category-8.png" alt="category" />
              <h4>More</h4>
            </div>
          </div>
        </div>
      </section>
      <section class="shopping__container">
        <div class="shopping__header">
          <h2 class="section__header">
            Finish your <span>shopping</span> checklist
          </h2>
          <p class="section__description">
            It's easy to forget all the extra bits and pieces you'll need
            throughout Christmas, so to save any last-minute dashes, here's our
            checklist.
          </p>
          <div class="shopping__grid">
            <div class="shopping__card">
              <h3>$10.75</h3>
              <img src="assets/shopping-1.jpg" alt="shopping" />
              <h4>Drum Decors</h4>
            </div>
            <div class="shopping__card">
              <h3>$75.50</h3>
              <img src="assets/shopping-2.jpg" alt="shopping" />
              <h4>Bell Decors</h4>
            </div>
            <div class="shopping__card">
              <h3>$20.00</h3>
              <img src="assets/shopping-3.jpg" alt="shopping" />
              <h4>Santa Cap Pack</h4>
            </div>
            <div class="shopping__card">
              <h3>$112.00</h3>
              <img src="assets/shopping-4.jpg" alt="shopping" />
              <h4>Gift Decors</h4>
            </div>
          </div>
        </div>
      </section>
      <section class="section__container explore__container">
        <div class="explore__image">
          <div class="bg"></div>
          <img src="assets/explore.png" alt="explore" />
        </div>
        <div class="explore__content">
          <h2 class="section__header">Explore our decor range of the season</h2>
          <p class="section__description">
            The Christmas festivity is incomplete without a holiday wreath
            decorated extravagantly with tinsels and glittery flowers.
          </p>
          <div class="explore__btn">
            <button class="btn">Explore The Decors</button>
          </div>
        </div>
      </section>
      <section class="coupon">
        <div class="section__container coupon__container">
          <h2 class="section__header">
            Join now and win some <span>amazing</span> coupons
          </h2>
          <form action="/" class="coupon__form">
            <input type="text" placeholder="Enter Your Email" />
            <button class="btn">
              <i class="ri-arrow-right-line"></i>
            </button>
          </form>
        </div>
      </section>
      <footer class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <img src="assets/logo-red.png" alt="logo" />
          </div>
          <p class="section__description">
            Santa’s Shop - a conceptual platform for Christmas shopping North
            America and some part of Canada.
          </p>
        </div>
        <div class="footer__col">
          <ul class="footer__links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Franchise</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <ul class="footer__socials">
            <li>
              <a href="#">
                <i class="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="ri-linkedin-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
