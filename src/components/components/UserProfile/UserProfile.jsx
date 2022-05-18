import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneUser } from "../../../redux/fearutes/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const oneUser = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [dispatch]);

console.log(oneUser);
  return <div>{oneUser}</div>;
};

export default UserProfile;
