import { httpClient } from '../utils/http-client';

export async function getAttendeeBadgeRepository({
  attendeeId,
}: {
  attendeeId: string;
}) {
  const response = await httpClient.get(`/attendees/${attendeeId}/badge`);

  return response;
}
