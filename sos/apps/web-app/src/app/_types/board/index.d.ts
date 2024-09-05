export interface Board {
  id: number;
  memberId: string;
  title: string;
  content: string;
  commentNum: number;
}

export interface BoardResponse {
  board: Board;
}

export interface BoardResponses {
  boards: Board[];
}

export interface BoardCreateRequest {
  title: string;
  content: string;
  lat: number;
  lon: number;
  sido: string;
  gugun: string;
  address: string;
}

export interface BoardUpdateRequest {
  title?: string;
  content?: string;
}

export interface Response<T> {
  success: boolean;
  data: T;
  message: string;
}
