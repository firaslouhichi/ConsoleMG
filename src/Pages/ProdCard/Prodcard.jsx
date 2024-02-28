import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
const Prodcard = (props) => {
  const { title, id, price, creatorImg, ImgUrl, creator } = props.item;
  return (
    <div className="single-prod-card">
      <div className="prod-img">
        <img src={ImgUrl} alt=".." className="imgofprod" />
      </div>
      <div className="prod-content ">
        <h5 className="prod-title">
          {" "}
          <Link to={`/popular/${id}`}>{title}</Link>
        </h5>
        <div className="creator-info-wrapper d-flex gap-3 align-items-center">
          <div className="creator-img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>
          <div className="creator-info   d-flex w-100 align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>
            <div>
              <h6>Price</h6>
              <p>{price} EUR</p>
            </div>
          </div>
        </div>

        <div className=" mt-3   d-flex align-items-center justify-content-between ">
          <span className="details-link  d-flex align-items-center gap-1">
            <Link to="#">View details </Link>
          </span>

          <button className="buy-btn ">
            Buy <FiShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prodcard;
