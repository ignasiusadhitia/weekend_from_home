import axios from "axios";

const WKND_API_BASE_URL = process.env.REACT_APP_WKND_API_BASE_URL;

export const getHelpAndTips = async () => {
  try {
    const endpoint = `${WKND_API_BASE_URL}/help-tips`;

    const response = await axios.get(endpoint);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error getting help and tips: ", error);
  }
};
