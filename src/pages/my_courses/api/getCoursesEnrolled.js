import axios from "axios";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useToast } from "../../../shared/notifications";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { client } from "../../../shared/client/client";

export const fetchCoursesEnrolled = async () => {
  const { data } = await client.get(`/api/mycourses`, {
    withCredentials: true,
  });
  return data;
};

export const useFetchCoursesEnrolled = () => {
  const { addToast } = useToast();
  const response = useQuery({
    queryKey: ["fetchCoursesEnrolled"],
    queryFn: fetchCoursesEnrolled,
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
