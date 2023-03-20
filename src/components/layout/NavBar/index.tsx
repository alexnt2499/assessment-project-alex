import React, { useState } from "react";
import Logo from "../../../components/Logo";
import Avatar from "../../Avatar";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "../../../hooks/useReactRedux";
import { logoutAction, selectAuth } from "../../../store/authReducer";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

const NavBar = () => {
  const { userInfo } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="flex items-center justify-between w-full h-14 shadow-xl px-2 max-sm:px-0 relative">
      <div className="flex items-center max-sm:ml-2">
        <Logo />
        <Menu />
      </div>
      <div className="hidden max-sm:block max-sm:mr-2">
        <button
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
          className="flex justify-center items-center"
        >
          {openMobileMenu ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>
      <div className="flex items-center max-sm:hidden">
        <p className="mr-2 text-primary-500 font-bold">{`${
          userInfo?.firstName ?? ""
        } ${userInfo?.lastName ?? ""}`}</p>
        <Avatar />
        <button onClick={onLogout} className="mx-2 p-1">
          <ArrowRightOnRectangleIcon className="h-6 w-6 transition-all duration-200 text-red-600 hover:text-red-800" />
        </button>
      </div>
      {openMobileMenu ? (
        <div className="w-full bg-white shadow-xl absolute top-[55px] p-6 z-50 hidden max-sm:block">
          <MenuMobile />
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
