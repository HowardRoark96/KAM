export interface PaginatedResultDto<T> {
  data?: T[];
  page?: PageInfo;
}

export interface PageInfo {
  page?: number;
  perPage?: number;
  pages?: number;
  items?: number;
}
