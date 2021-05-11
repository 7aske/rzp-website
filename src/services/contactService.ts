import { ContactMessage } from "../@types/ContactMessage";
import axios from "axios";
import { apiUrl } from "../globals";

export const sendContact = async (data: ContactMessage): Promise<any> => {
	return (await axios.post(`${apiUrl}/contact`, data)).data;
}
