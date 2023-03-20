import moment from "moment";
import React from "react";
import Avatar from "../../components/Avatar";
import TagsField from "../../components/Fields/TagsField";
import TextInfoField from "../../components/Fields/TextInfoField";
import { useAppSelector } from "../../hooks/useReactRedux";
import AppLayout from "../../layouts/AppLayout";
import { selectAuth } from "../../store/authReducer";

const UserInfoPage = () => {
  const { userInfo } = useAppSelector(selectAuth);

  return (
    <AppLayout>
      <div className="m-10 p-10 max-md:m-0 max-md:px-4 shadow-lg max-md:shadow-none">
        <h1 className="font-bold text-2xl text-secondary-500">USER INFO</h1>
        <div className="mt-6 flex flex-col items-center">
          <Avatar className="h-28 w-28 rounded-[50%] mb-10" />
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 w-full ml-5">
            <TextInfoField
              labelText={"Username"}
              contentText={userInfo?.userName}
            />
            <TextInfoField
              labelText={"UserId"}
              contentText={userInfo?.userId}
            />
            <TextInfoField
              labelText={"First name"}
              contentText={userInfo?.firstName}
            />

            <TextInfoField
              labelText={"Last name"}
              contentText={userInfo?.lastName}
            />

            <TextInfoField labelText={"Email"} contentText={userInfo?.email} />
            <TextInfoField
              labelText={"Status"}
              contentText={userInfo?.status}
            />

            <TextInfoField
              labelText={"Day of created account"}
              contentText={moment(userInfo?.createdAt).fromNow()}
            />
            <TextInfoField
              labelText={"Last login"}
              contentText={moment(userInfo?.lastLoginAt).fromNow()}
            />

            <TextInfoField
              labelText={"Last updated"}
              contentText={moment(userInfo?.updatedAt).fromNow()}
            />
            <TextInfoField
              labelText={"Password Expired"}
              contentText={userInfo?.passwordExpired ? "Expired" : "Unexpired"}
            />

            <TagsField
              labelText="Roles"
              contentText={userInfo?.listRoles ?? []}
            />

            <TagsField
              labelText="Apps"
              contentText={userInfo?.apps.map((value) => value.appName) ?? []}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserInfoPage;
