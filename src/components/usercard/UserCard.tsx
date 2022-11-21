import React, { FC } from "react";
import { User } from "../../types/user";

type Props = User;

const UserCard: FC<Props> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div className="rounded-md p-4 border-2 flex flex-col gap-1">
      <h3 className="font-bold">{name}</h3>
      <p>{username}</p>

      <p className="flex gap-2 items-center">
        <img
          src=" https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Mail icon"
          className="h-4"
        />
        <a href={"mailto:" + email}>{email}</a>
      </p>

      <p className="flex gap-2 items-center">
        <img
          src="https://www.iconpacks.net/icons/1/free-phone-icon-1-thumb.png"
          alt="Phone icon"
          className="h-4"
        />
        <a href={"tel:+" + phone}>{phone}</a>
      </p>
      <p className="flex gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
          alt="Website Icon"
          className="h-4"
        />
        <a href={"https://" + website}>{"https://" + website}</a>
      </p>
      <p></p>
      <p className="flex gap-2 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2527/2527411.png"
          alt="Geoposition"
          className="h-4"
        />
        {address?.city}, {address?.street}
      </p>
    </div>
  );
};

export default React.memo(UserCard);
