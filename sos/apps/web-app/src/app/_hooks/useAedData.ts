import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type QueryKeyType = [string, { lat: number; lon: number; radius: number }];

const fetchAedData = async ({ queryKey }: { queryKey: QueryKeyType }) => {
  const [, { lat, lon, radius }] = queryKey;
  const token = localStorage.getItem('accessToken');

  const { data } = await axios.get('https://i11a607.p.ssafy.io/api/locations/aed', {
    params: {
      lat,
      lon,
      radius,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const useAedData = (lat: number, lon: number, radius: number, enabled: boolean) => {
  return useQuery({
    queryKey: ['adeData', { lat, lon, radius }] as QueryKeyType,
    queryFn: fetchAedData,
    enabled: enabled && !!localStorage.getItem('accessToken'),
    retry: false,
  });
};
