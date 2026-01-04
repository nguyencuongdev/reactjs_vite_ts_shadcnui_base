import type React from 'react'

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

export interface ISidebarMenuItem {
  key: string
  title: string
  path?: string
  icon: React.ReactNode
  permission: boolean
  childrens?: ISidebarMenuItem[]
}
