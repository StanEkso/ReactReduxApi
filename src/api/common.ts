const WRONG_CODES = [400, 401, 403, 404, 500];

export const validateResponse = (res: Response) => {
  if (WRONG_CODES.includes(res.status)) {
    throw new Error('Something went wrong!');
  }
  try {
    return res.json();
  } catch (error) {
    throw error;
  }
};
