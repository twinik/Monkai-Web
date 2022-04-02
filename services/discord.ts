import axios from "axios";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = 'https://sol-api-cnkt3.ondigitalocean.app';
const api = axios.create({
  baseURL: BASE_URL,
});

export const requestCode = async () => api.get("/discord");

export const requestTokenGrant = async (code: string) =>
  api.get(`/discord/roles?code=${code}`);

export const requestMemberInfo = async (token: string) =>
  api.get(
    `/discord/members?token=${token}&channelId=${String(
      process.env.DISCORD_CHANNEL_ID
    )}`
  );
