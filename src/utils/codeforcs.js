const API_ROOT = "https://codeforces.com/api";

export const API_URLS = {
  userInfo: (userId) => `${API_ROOT}/user.info?handles=${userId}`,
};
