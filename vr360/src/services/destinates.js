import config from "../config";

export const getDestinates = async (id) => {
  try {
    const response = await fetch(`${config.endpoint}atractivo/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
