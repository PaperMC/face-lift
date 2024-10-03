export interface HangarProjectList {
  pagination: HangarProjectListPagination;
}

export interface HangarProjectListPagination {
  limit: number;
  offset: number;
  count: number;
}
