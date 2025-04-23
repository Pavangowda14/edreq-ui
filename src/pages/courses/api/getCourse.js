import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const fetchCourses = async () => {
  const { data } = await client.get("/api/courses");
  return data;
};

export const useFetchCourses = () => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchCourses"],
    queryFn: async () => {
      return await fetchCourses();
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
