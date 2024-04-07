import { httpClient } from '../utils/http-client';

type registerDTO = {
  email: string;
  name: string;
};

export async function registerRepository({ name, email }: registerDTO) {
  const response = await httpClient.post(
    `/events/${process.env.API_EVENT_ID}/attendees`,
    {
      name,
      email,
    }
  );
  return response.data;
}
