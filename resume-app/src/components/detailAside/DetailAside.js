import React from "react";

import "./detailAside.css";

const DetailAside = ({
  name,
  resume_img,
  title,
  price_old,
  price_new,
  price_discount,
  features}) => {
  return (
    <aside className="resume-aside box p-1">
      <div className="aside-header">
        <div className="header-img">
          <img
            src={resume_img}
            alt={title}
            className="rounded-3 scimg img-fluid"
          />
        </div>
        <div className="header-info">
          <div>
            <i className="fas fa-play"></i>
          </div>
          <div className="info-text fs-6">
            <span>{name}</span>
          </div>
        </div>
      </div>
      <div className="aside-price my-2 text-center">
        <span className="price-old me-3 fs-6">
        </span>
        <span className="price-new me-3 fs-3 fw-bold">{price_new}</span>
        <span className="price-discount theme-clr me-3 fs-6">
        </span>
      </div>
      <div className="aside-features my-3">
        <h5 className="mb-2">resume Features</h5>
        <ul>
          {features.map((item, index) => (
            <li key={index} className="d-flex mb-2">
              <div className="feature-icon theme-clr">
                <i className={item.icon}></i>
              </div>
              <div className="feature-text ms-2">{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="aside-btn">
      </div>
    </aside>
  );
};

export default DetailAside;
