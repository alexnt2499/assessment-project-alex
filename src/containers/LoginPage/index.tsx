import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import RHInput from "../../components/RHForm/RHInput";
import config from "../../configs/api-config";
import { useAppDispatch, useAppSelector } from "../../hooks/useReactRedux";
import { selectAuth } from "../../store/authReducer";
import { loginAsyncThunk } from "../../store/authReducer/asyncThunk";
import RHForm from "./../../components/RHForm";

const loginValidationSchema = yup.object({
  username: yup.string().required("username field cannot be left blank"),
  password: yup.string().required("password field cannot be left blank"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const { is_loading, authData, userInfo } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    dispatch(
      loginAsyncThunk({
        username: data.username,
        password: data.password,
        client_id: config.client_id,
        client_secret: config.client_secret,
        grant_type: "password",
        scope: "openid",
      })
    );
  };

  useEffect(() => {
    if (authData && userInfo) navigate("/dashboard");
  }, [authData, userInfo]);

  return (
    <div className="w-[100vw] mt-8 flex justify-center items-center relative">
      <div className="w-[520px] max-md:bg-transparent max-md:p-6 max-lg:p-8 p-10 z-[100] shadow-2xl max-md:shadow-none">
        <div className="flex justify-center">
          <Logo className="h-11" />
        </div>
        <RHForm
          defaultValues={{}}
          onSubmit={onSubmit}
          validationSchemaParams={loginValidationSchema}
        >
          <RHInput
            name="username"
            labelText="Username"
            placeholder="Enter username"
            containerClassName="mt-5"
          />
          <RHInput
            name="password"
            labelText="Password"
            type="password"
            placeholder="Enter password"
            containerClassName="mt-5"
          />
          <Button
            type="submit"
            className={`w-full bg-primary-500 ${
              is_loading ? "opacity-60" : "opacity-100"
            } flex justify-center items-center py-3 mt-5 rounded-md text-white font-bold`}
            disabled={is_loading}
            is_loading={is_loading}
            data-cy="submit"
          >
            <p>Log in</p>
          </Button>
        </RHForm>
      </div>
    </div>
  );
};

export default Login;
