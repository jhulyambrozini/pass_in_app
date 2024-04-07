import { httpClient } from '../http-client';

export async function getAttendeeBadgeRepository({ code }: { code: string }) {
  const response = await httpClient.get(`/attendees/${code}/badge`);

  return response;
}
