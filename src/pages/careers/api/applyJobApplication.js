import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const applyJobApplication = async (body) => {
  const { data } = await client.post(`/api/job-application`,body, {
    withCredentials: true,
  });
  return data;
};

export const useApplyJobApplication = () => {
  const { addToast } = useToast();
  const response = useMutation({
    mutationFn: applyJobApplication,
    onSuccess:(data)=>{
        console.log(data)
        addToast(data.message || `Job Applied Successfully`,"success")
    },
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
