import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const updateUserProfile = async (body) => {
  const { data } = await client.put(`/api/auth/user/profile`,body, {
    withCredentials: true,
  });
  return data;
};

export const useUpdateUserProfile = () => {
  const { addToast } = useToast();
  const response = useMutation({
    mutationFn: updateUserProfile,
    onSuccess:(data)=>{
        addToast(data.message || `Profile updated Successfully`,"success")
    },
    retry: false,
  });
  const { isError, error } = response;
  console.log(error)
  useEffect(() => {
    if (isError) {
      addToast(generateErrorMessage(error), "error");
    }
  }, [isError]);
  return response;
};
