import React from 'react';
import { MenuItem } from './MenuItem';

const MENU_ITEMS = {
  right: [
    { menuTitle: "Từ điển", hasDropDown: false },
    { menuTitle: "Sách", hasDropDown: false },
    { menuTitle: "Tin tức", hasDropDown: false },
    { menuTitle: "Tra cứu", hasDropDown: false },
    { menuTitle: "Tác giả", hasDropDown: false },
  ],
  left: [
    { menuTitle: "Giới Thiệu", hasDropDown: false },
    { menuTitle: "Dự Án", hasDropDown: false },
    { menuTitle: "Tam Tạng", hasDropDown: true },
    { menuTitle: "Mục Lục Đại Tạng", hasDropDown: false },
  ]
}

const LeftMenu = () => {
  return (
    <ul className="EduNavigation_navList__3UUa5 EduNavigation_leftNav__vE79q">
      {MENU_ITEMS.left.map((item, index) => (
        <MenuItem key={index} menuTitle={item.menuTitle} hasDropDown={item.hasDropDown} />
      ))}
    </ul>
  );
};

const RightMenu = () => {
  return (
    <ul className="EduNavigation_navList__3UUa5 EduNavigation_rightNav__J4S">
      {MENU_ITEMS.right.map((item, index) => (
        <MenuItem key={index} menuTitle={item.menuTitle} hasDropDown={item.hasDropDown} />
      ))}
    </ul>
  );
};


export const MainMenu = () => {
  return (
    <nav className="EduNavigation_container__3ayuj" aria-label="Main Navigation">
      <div className="single-col-inner">
        <div className="EduNavigation_navContainer__3t1CU">
          <LeftMenu /> 
          <RightMenu />
        </div>
      </div>
    </nav>
  );
};