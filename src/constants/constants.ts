import type { IFilter, IOptionSelect } from '@/types/common'

export const DEFAULT_PAGE: number = 1

export const PAGE_SIZE_OPTION: string[] = ['10', '20', '30', '50']

export const DEFAULT_FILTER: IFilter = {
  page: 1,
  size: 20,
  totalRecords: 0,
  totalPages: 0,
}

export const ALL_OPTION = {
  label: 'Tất cả',
  value: null,
}

export const GENDER_OPTIONS: IOptionSelect[] = [
  { label: 'MALE', value: 'MALE' },
  { label: 'FEMALE', value: 'FEMALE' },
]

export const SIDE_OPTIONS: IOptionSelect[] = [
  { label: 'LEFT', value: 'LEFT' },
  { label: 'RIGHT', value: 'RIGHT' },
]

export const MODAL_TYPE = {
  ADD: 'add',
  VIEW: 'view',
  EDIT: 'edit',
  DELETE: 'delete',
}
