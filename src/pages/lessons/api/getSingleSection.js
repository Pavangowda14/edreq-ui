import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const fetchSectionData = async (sectionId) => {
  const { data } = await client.get(`/api/section-data/${sectionId}`, {
    withCredentials: true,
  });
  return data;
};

export const useFetchSectionData = ({sectionId}) => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchSectionData"],
    queryFn: async () => {
      return await fetchSectionData(sectionId);
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
