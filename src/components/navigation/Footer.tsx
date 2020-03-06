import React from "react";

import './Footer.scss'

export const Footer = () => {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <footer>
      <nav className="footer--nav">
        <div
            className="logo--container text-light"
            onClick={ handleScrollToTop }
        >
          <h4 className="logo">
            CoinMarketCap
          </h4>
        </div>
      </nav>
    </footer>
  );
};
