export interface IFilter {
  page: number
  size: number
  totalRecords: number
  totalPages: number
}

export interface IOptionSelect {
  value: string | number | null
  label: string | number
}
