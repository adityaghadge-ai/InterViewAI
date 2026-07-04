import api from "./api";

export const createInterview = async (token, interviewData) => {
    const response = await api.post(
        "/interviews",
        interviewData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};