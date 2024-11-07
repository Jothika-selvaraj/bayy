import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const spanElement = document.createElement('span');
      spanElement.className = 'menu-trigger';
      spanElement.innerHTML = '<i class="fal fa-angle-down"></i>';
      containerRef.current.appendChild(spanElement);
    }
  }, []);

  const [menuItems, setMenuItems] = useState([
    {
      label: 'About',
      // link: '/about',
    },
    {
      label: 'Courses',
      // link: '/course-list',
    },
    {
      label: 'Blog',
      // link: '/blog',
    },
    {
      label: 'Testimonials',
      // link: '/testimonials',
    },
    {
      label: 'Pricing',
      // link: '/pricing',
    },
    {
      label: 'Contact',
      // link: '/contact',
    },
  ]);

  const handleSubmenuToggle = (index) => {
    setMenuItems((prevMenuItems) => {
      const newMenuItems = [...prevMenuItems];
      newMenuItems[index].submenuOpen = !newMenuItems[index].submenuOpen;
      return newMenuItems;
    });
  };

  return (
    <ul className="primary-menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.label}</a>

          {item.submenu && (
            <>
              <span
                className={`menu-trigger ${item.submenuOpen ? 'open' : ''}`}
                onClick={() => handleSubmenuToggle(index)}
              >
                <i
                  className={`submenu-icon ${item.submenuOpen ? 'fal fa-angle-up' : 'fal fa-angle-down'}`}
                ></i>
              </span>
              <ul className={`submenu ${item.submenuOpen ? 'open' : ''}`}>
                {item.submenu.map((subitem, subindex) => (
                  <li key={subindex}>
                    <a href={subitem.link}>{subitem.label}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}

       <li className="cart-shop-container">
        <Link to="/#" className="cart-icon">
          <i className="fa fa-shopping-cart"></i>Cart
          {/* {cartItems > 0 && <span className="cart-badge">{cartItems}</span>} */}
        </Link>
        </li>
        <li>
        <Link to="/ecommerce" className="btn btn-main rounded" style={{color:'white'}}>
          Shop
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
