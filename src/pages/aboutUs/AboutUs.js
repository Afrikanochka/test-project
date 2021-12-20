import React from 'react';
import { AboutUsStyled } from './AboutUsStyled';

const AboutUs = () => {
    return (
    <AboutUsStyled>
      <h1 className="title">
          About us
      </h1> 
      <ul className="about-list">
          <li className="about-item">
          Revenue in the Beauty & Personal Care market amounts to US$80,212m in 2021. The market is expected to grow annually by 4.40% (CAGR 2021-2026).
          </li>
          <li className="about-item">
          The market's largest segment is the segment Personal Care with a market volume of US$39,665m in 2021.
          </li>
          <li className="about-item">
          In the Beauty & Personal Care market, 29.3% of total revenue will be generated through online sales by 2021.
          </li>
          <li className="about-item">
          In relation to total population figures, per person revenues of US$240.94 are generated in 2021.
          </li>
          <li className="about-item">
          In global comparison, most revenue is generated in the United States (US$80,212m in 2021).
          </li>
      </ul>
    </AboutUsStyled>
    );
}

export default AboutUs;