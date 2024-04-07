import { httpClient } from '../http-client';

type registerDTO = {
  email: string;
  name: string;
};

export async function registerRepository({ name, email }: registerDTO) {
  const response = await httpClient.post(
    `/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees`,
    {
      name,
      email,
    }
  );
  return response.data;
}
