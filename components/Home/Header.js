"use client";

import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { useStateValue } from "@/components/StateProvider";
import { toast } from "react-toastify";

function Header() {
  const [{ basket }] = useStateValue();

  const notify = () => {
    toast.info("This function is in development !!!");
  };

  return (
    <nav className="header">
      <Link href="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchbar" />
        <SearchIcon className="header__searchIcon" onClick={notify} />
      </div>
      <div className="header__nav">
        <Link href={"/login"} className="header__link">
          <div
            className="header__option"
            // onClick={userLogOut}
          >
            <span className="header__option__lineOne">Hello,</span>
            <span className="header__option__lineTwo">
              Sign In
              {/* {user ? "Sign Out" : "Sign In"} */}
            </span>
          </div>
        </Link>
        <Link href="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <Link href="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>
        <Link href="/checkout" className="header__link">
          <div className="header__option__basket">
            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            <span className="header__option__lineTwo header__basket__count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
