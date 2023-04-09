import { API_URLS } from "../utils/codeforcs";

const customFetch = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      return {
        data: data.result,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false,
    };
  }
};

export const fetchUserProfile = (userId) => {
  return customFetch(API_URLS.userInfo(userId), {
    method: "GET",
  });
};
