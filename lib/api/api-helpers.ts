import fetchData from "@lib/fetchData";

/**
 * Common options for API requests that require authentication
 */
const getAuthOptions = (): RequestInit => ({
  credentials: "include",
});

/**
 * Helper for GET requests with authentication
 * Throws an error if the response is not ok
 */
export const apiGet = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`API GET request failed: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Helper for GET requests that return Response directly
 * Includes authentication credentials by default
 */
export const apiGetResponse = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  return fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "GET",
  });
};

/**
 * Helper for POST requests with JSON body
 * Throws an error if the response is not ok
 */
export const apiPost = async <T, R = any>(
  url: string,
  body?: T,
  options: RequestInit = {}
): Promise<R> => {
  const response = await fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`API POST request failed: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Helper for POST requests that return Response directly
 */
export const apiPostResponse = async <T>(
  url: string,
  body?: T,
  options: RequestInit = {}
): Promise<Response> => {
  return fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
};

/**
 * Helper for DELETE requests
 */
export const apiDelete = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  return fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "DELETE",
  });
};

/**
 * Helper for PUT requests with JSON body
 */
export const apiPut = async <T>(
  url: string,
  body?: T,
  options: RequestInit = {}
): Promise<Response> => {
  return fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
};

/**
 * Helper for PATCH requests with JSON body
 */
export const apiPatch = async <T>(
  url: string,
  body?: T,
  options: RequestInit = {}
): Promise<Response> => {
  return fetchData(url, {
    ...getAuthOptions(),
    ...options,
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
};
