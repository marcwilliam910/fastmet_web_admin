// api.ts
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: options?.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include", // send cookies automatically
    ...options,
  });

  // Handle token expiration - redirect to login for 401 or 403
  if (response.status === 401 || response.status === 403) {
    // Only redirect if we're not already on the login page
    if (!window.location.pathname.includes("/login")) {
      window.location.href = "/login";
    }
  }

  return response;
};
