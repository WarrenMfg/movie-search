export const handleErrors = async res => {
  const response = await res.json();
  if (res.status >= 400) {
    throw {
      status: response.status_code,
      message: response.status_message,
      errors: response.errors
    };
  } else {
    return response;
  }
};
