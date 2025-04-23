import { gernaliseErrorMsg } from "../globalConstant";

export const generateErrorMessage = (error) => {
  if (!error || !error.response || !error.response?.data)
    return gernaliseErrorMsg;
  let errorMsg = "";
  const { data } = error.response;
  if (data?.message) {
    errorMsg = data.message;
  } else if (data?.detail && Array.isArray(data.detail))
    errorMsg = data.detail?.[0]?.msg;
  else if (data?.detail && typeof data.detail === "string")
    errorMsg = data.detail;
  return errorMsg || error.message;
};
