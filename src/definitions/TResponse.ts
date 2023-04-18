export interface IResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
  error?: string;
  metadata?: IMeta;
}

export interface IMeta {
  currentPage: number;
  limit: number;
  page: number;
  total: number;
  totalFiltered: number;
}

export interface IRQMeta {
  page: number;
  limit: number;
}
