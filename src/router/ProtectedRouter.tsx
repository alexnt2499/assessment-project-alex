import React, { FC, ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useReactRedux";
import { selectAuth } from "../store/authReducer";

interface IProtectedRouter {
  children: ReactElement;
}

const ProtectedRouter: FC<IProtectedRouter> = ({ children }) => {
  const { authData } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData) navigate("/login");
  }, [authData]);

  return children;
};

export default ProtectedRouter;
