import axios from "axios";
import { NFTS_API } from "../constants/nft";

export const getNFT = async (length: number) => {
  return axios.get(`${NFTS_API.GET_ALL}?limit=${length + 20}`);
};
