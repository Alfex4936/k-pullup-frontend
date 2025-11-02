import { apiGet } from "../api-helpers";

interface Props {
  lat: number;
  lng: number;
  distance: number;
  pageParam: number;
  pageSize?: number;
}

export interface CloseMarker {
  latitude: number;
  longitude: number;
  distance: number;
  markerId: number;
  description: string;
  address?: string;
  thumbnail?: string;
}

interface CloseMarkerRes {
  currentPage: number;
  markers: CloseMarker[];
  totalMarkers: number;
  totalPages: number;
  error?: string;
  message?: string;
}

const closeMarker = async ({
  lat,
  lng,
  distance,
  pageSize = 10,
  pageParam,
}: Props): Promise<CloseMarkerRes> => {
  return apiGet(
    `/api/v1/markers/close?latitude=${lat}&longitude=${lng}&distance=${distance}&n=${pageSize}&page=${pageParam}&pageSize=10`
  );
};

export default closeMarker;
