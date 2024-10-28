import React, { useRef, useEffect, useState } from 'react';

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
      label: 'Home',
      link: '/#',
    },
    {
      label: 'About',
      link: '/#',
    },
    {
      label: 'Courses',
      link: '/#',
      // submenu: [
      //   { label: 'Courses', link: '/course-1' },
      //   { label: 'Course Grid 2', link: '/course-2' },
      //   { label: 'Course Grid 3', link: '/course-3' },
      //   { label: 'Course Grid 4', link: '/course-4' },
      //   { label: 'Course List', link: '/course-list' },
      //   { label: 'Course Single 1', link: '/course-details/1' },
      //   { label: 'Course Single 2', link: '/course-details-two/2' },
      // ],
      // submenuOpen: false, 
    },
    {
      label: 'Discover',
      link: '#',
      submenu: [
        { label: 'Blog', link: '/#' },
        { label: 'Teachers', link: '/#' },
        { label: 'Testimonials', link: '/#' },
        { label: 'Career', link: '/#' },
        { label: 'FAQ', link: '/#' },
      ],
      submenuOpen: false,
    },
    {
      label: 'Contact',
      link: '/#',
    },
  ]);

  const handleSubmenuToggle = (index) => {
    setMenuItems((prevMenuItems) => {
      const newMenuItems = [...prevMenuItems];
      // Toggle the submenu open/close state
      newMenuItems[index].submenuOpen = !newMenuItems[index].submenuOpen;
      return newMenuItems;
    });
  };

  return (
    <ul className="primary-menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            {item.label}
          </a>

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
    </ul>
  );
};

export default Nav;
