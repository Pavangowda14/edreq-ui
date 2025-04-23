import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const fetchUserProfile = async () => {
  const { data } = await client.get(`/api/auth/user/profile`, {
    withCredentials: true,
  });
  return data;
};

export const useFetchUserProfile = () => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchUserProfile"],
    queryFn: fetchUserProfile,
    refetchOnWindowFocus: false,
    retry: false,
  });
  const { isError, error } = response;
  useEffect(() => {
    if (isError) {
      addToast(generateErrorMessage(error), "error");
    }
  }, [isError]);
  return response;
};
