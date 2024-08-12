export interface DisasterResponse {
  id: number;
  locationName: string;
  msg: string;
  classification: string;
  level: string;
  sendTime: string; // ISO 형식의 날짜 문자열
  serialNumber: number;
}

export interface DisasterResponses {
  disasterResponses: DisasterResponse[];
}
