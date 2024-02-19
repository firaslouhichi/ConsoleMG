import React from 'react';
import './popular.scss';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from '../../Assets/fortnite.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/casque.jpg';
import img4 from '../../Assets/clavier.jpg';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    prodTitle: 'Fortnite',
    category: 'Game',
    user: 'Firas Lh'
  },
  {
    id: 2,
    imgSrc: img2,
    prodTitle: 'Free Fire',
    category: 'Game',
    user: 'Firas Lh'
  },
  {
    id: 3,
    imgSrc: img3,
    prodTitle: 'Casque',
    category: 'Accessory',
    user: 'Firas Lh'
  },
  {
    id: 4,
    imgSrc: img4,
    prodTitle: 'Clavier',
    category: 'Accessory',
    user: 'Firas Lh'
  }
];

const Popular = () => {
  return (
    <section className="popular section container" id='hahaha'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Items
            </h2>
            <p>
              Enjoy with our games, accessory and consoles
              Don't forget to join and start bidding 
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon'/>
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({id, imgSrc, prodTitle, category, user}) => (
            <div className="singleProduct" key={id}>
              <div className="prodImage">
                <img src={imgSrc} alt={prodTitle} />
                <div className="overlayInfo">
                  <h3>{prodTitle}</h3>
                  <p>{category}</p>
                  <BsArrowRightShort className='icon' />
                </div>
              </div>
              <div className="prodFooter">
                <div className="number">
                  0{id}
                </div>
                <div className="prodText flex">
                  <h6>{user}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className='icon' />
                    </span>
                    Trippy
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
