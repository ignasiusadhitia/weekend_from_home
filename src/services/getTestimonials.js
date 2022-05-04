import axios from "axios";

const WKND_API_BASE_URL = process.env.REACT_APP_WKND_API_BASE_URL;

export const getTestimonials = async () => {
  try {
    const endpoint = `${WKND_API_BASE_URL}/testimonial`;

    const response = await axios.get(endpoint);

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error("Error getting testimonials: ", error);
  }
};
