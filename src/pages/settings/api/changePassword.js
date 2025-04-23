import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const changePassword = async (body) => {
  const { data } = await axios.post(`/api/auth/change-password`,body, {
    withCredentials: true,
  });
  return data;
};

export const useChangePassword = () => {
  const { addToast } = useToast();
  const response = useMutation({
    mutationFn: changePassword,
    onSuccess:(data)=>{
        addToast(data.message || `Password changed Successfully`,"success")
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
