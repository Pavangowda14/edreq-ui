// src/pages/CoursePage/api/enrollCourse.js
import { client } from "../../../shared/client/client";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../../../shared/notifications";
import { generateErrorMessage } from "../../../shared/helpers/errorHelper";
import { useNavigate } from "react-router-dom";

export const enrollCourse = async (courseId) => {
  const { data } = await client.post(`/api/enroll-free/${courseId}`);
  return data;
};

export const useEnrollCourse = () => {
  const { addToast } = useToast();
  const navigate=useNavigate()

  return useMutation({
    mutationFn: enrollCourse,
    onSuccess: (data) => {
      if (data.success) {
        addToast(data.message || "Course enrolled successfully!", "success");
        navigate("/my-courses")
      }
    },
    onError: (error) => {
      addToast(generateErrorMessage(error), "error");
    },
  });
};
