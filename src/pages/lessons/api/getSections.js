import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const fetchSections = async (courseId) => {
  const { data } = await client.get(`/api/lessons/${courseId}`, {
    withCredentials: true,
  });
  return data;
};

export const useFetchSection = ({courseId}) => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchSections"],
    queryFn: async () => {
      return await fetchSections(courseId);
    },
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
