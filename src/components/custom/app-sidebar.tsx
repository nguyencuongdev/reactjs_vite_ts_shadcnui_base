import {
  Calendar,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  Home,
  Inbox,
  LogOutIcon,
  MessageCircleHeartIcon,
  Search,
  Settings,
  SettingsIcon,
  User2Icon,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import type { ISidebarMenuItem } from '@/types/common'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import type React from 'react'

// Menu items.
const sidebarMenuItems: ISidebarMenuItem[] = [
  {
    key: 'dashboard',
    title: 'Dasboard',
    path: '/',
    icon: <Home size={16} />,
    permission: true,
  },
  {
    key: 'inbox',
    title: 'Inbox',
    path: '#',
    icon: <Inbox size={16} />,
    permission: true,
    childrens: [
      {
        key: 'message',
        title: 'Message',
        icon: <MessageCircleHeartIcon size={16} />,
        permission: true,
        childrens: [
          {
            key: 'messagea',
            title: 'Call',
            icon: <MessageCircleHeartIcon size={16} />,
            permission: true,
            childrens: [
              {
                key: 'messagea1',
                title: 'Call',
                icon: <MessageCircleHeartIcon size={16} />,
                permission: true,
                childrens: [
                  {
                    key: 'messagea1a',
                    title: 'Call',
                    path: '/messagea1a',
                    icon: <MessageCircleHeartIcon size={16} />,
                    permission: true,
                  },
                  {
                    key: 'messagea1b',
                    title: 'Call',
                    path: '/messagea1b',
                    icon: <MessageCircleHeartIcon size={16} />,
                    permission: true,
                  },
                ],
              },
              {
                key: 'messagea2',
                title: 'Call',
                icon: <MessageCircleHeartIcon size={16} />,
                permission: true,
                childrens: [
                  {
                    key: 'messagea2a',
                    title: 'Call',
                    path: '/messagea2a',
                    icon: <MessageCircleHeartIcon size={16} />,
                    permission: true,
                  },
                  {
                    key: 'messagea2b',
                    title: 'Call',
                    path: '/messagea2b',
                    icon: <MessageCircleHeartIcon size={16} />,
                    permission: true,
                  },
                ],
              },
            ],
          },
          {
            key: 'messageb',
            title: 'Call',
            path: '/messageb',
            icon: <MessageCircleHeartIcon size={16} />,
            permission: true,
          },
          {
            key: 'messagec',
            title: 'Call',
            path: '/messagec',
            icon: <MessageCircleHeartIcon size={16} />,
            permission: true,
          },
        ],
      },
      {
        key: 'call',
        title: 'Call',
        path: '/message',
        icon: <MessageCircleHeartIcon size={16} />,
        permission: true,
      },
    ],
  },
  {
    key: 'calendar',
    title: 'Calendar',
    path: '#',
    icon: <Calendar size={16} />,
    permission: true,
  },
  {
    key: 'search',
    title: 'Search',
    path: '#',
    icon: <Search size={16} />,
    permission: true,
  },
  {
    key: 'setting',
    title: 'Settings',
    path: '#',
    icon: <Settings size={16} />,
    permission: true,
  },
]

export function AppSidebar() {
  const { open: openSidebar, toggleSidebar, setOpen } = useSidebar()
  const location = useLocation()

  const renderDropdownMenuSub = (menuChildren: ISidebarMenuItem[], level: number, parentKey = ''): React.ReactNode => {
    return (
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {menuChildren.map((dropMenuItem, index) => {
            const Icon = dropMenuItem.icon
            const haveIcon = !!dropMenuItem.icon
            const key = `${parentKey}_${dropMenuItem.key}_${index + 1}`
            const isActive = location.pathname === dropMenuItem.path

            if (!dropMenuItem.path && Array.isArray(dropMenuItem.childrens) && dropMenuItem.childrens.length > 0) {
              return (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    className={cn(
                      'flex h-9 w-full cursor-pointer items-center justify-between rounded-md p-2 [&>svg]:hidden',
                      {
                        'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                        'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                      },
                    )}
                  >
                    <span className="inline-flex items-center space-x-2">
                      {haveIcon && Icon}
                      <span>{dropMenuItem.title}</span>
                    </span>
                    <span>
                      <ChevronRightIcon
                        size={14}
                        className="ml-auto size-3.5 text-right"
                      />
                    </span>
                  </DropdownMenuSubTrigger>
                  {renderDropdownMenuSub(dropMenuItem.childrens, level + 1, key)}
                </DropdownMenuSub>
              )
            }

            return (
              <DropdownMenuItem
                key={key}
                className="p-0!"
              >
                <Link
                  to={dropMenuItem?.path || '#'}
                  className={cn('inline-flex h-9 w-full items-center space-x-2 rounded-md p-2', {
                    'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                    'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                  })}
                >
                  {haveIcon && Icon}
                  <span>{dropMenuItem.title}</span>
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    )
  }

  const renderMenuChildren = (menuChildren: ISidebarMenuItem[], level: number, parentKey = ''): React.ReactNode => {
    if (menuChildren.length === 0) return <></>

    if (level === 1) {
      return (
        <SidebarMenuSub className="mt-0.5 mr-0 p-0 pl-2">
          {menuChildren.map((menuItem, index) => {
            const Icon = menuItem.icon
            const haveIcon = !!menuItem.icon
            const key = `${parentKey}_${menuItem.key}_${index + 1}`
            const isActive = location.pathname === menuItem.path

            if (Array.isArray(menuItem.childrens) && menuItem.childrens.length > 0 && !menuItem.path) {
              return (
                <SidebarMenuSubItem key={key}>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger
                      className={cn('flex h-9 w-full cursor-pointer items-center justify-between rounded-md p-2', {
                        'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                        'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                      })}
                    >
                      <span className="inline-flex items-center space-x-2">
                        {haveIcon && Icon}
                        <span>{menuItem.title}</span>
                      </span>
                      <span>
                        <ChevronRightIcon
                          size={14}
                          className="ml-auto size-3.5 text-right"
                        />
                      </span>
                    </DropdownMenuTrigger>
                    {renderMenuChildren(menuItem.childrens, level + 1, key)}
                  </DropdownMenu>
                </SidebarMenuSubItem>
              )
            }
            return (
              <SidebarMenuSubItem key={key}>
                <SidebarMenuSubButton
                  asChild
                  className={cn('h-9! px-0 pl-2', {
                    'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                    'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                  })}
                >
                  <Link
                    to={menuItem.path || '#'}
                    className="inline-flex h-full w-full items-center"
                  >
                    {haveIcon && Icon}
                    <span>{menuItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            )
          })}
        </SidebarMenuSub>
      )
    }

    return (
      <DropdownMenuPortal>
        <DropdownMenuContent
          side="right"
          align="start"
        >
          {menuChildren.map((dropMenuItem, index) => {
            const Icon = dropMenuItem.icon
            const haveIcon = !!dropMenuItem.icon
            const key = `${parentKey}_${dropMenuItem.key}_${index + 1}`
            const isActive = location.pathname === dropMenuItem.path

            if (!dropMenuItem.path && Array.isArray(dropMenuItem.childrens) && dropMenuItem.childrens.length > 0) {
              return (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger
                    className={cn(
                      'flex h-9 w-full cursor-pointer items-center justify-between rounded-md p-2 [&>svg]:hidden',
                      {
                        'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                        'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                      },
                    )}
                  >
                    <span className="inline-flex items-center space-x-2">
                      {haveIcon && Icon}
                      <span>{dropMenuItem.title}</span>
                    </span>
                    <span>
                      <ChevronRightIcon
                        size={14}
                        className="ml-auto size-3.5 text-right"
                      />
                    </span>
                  </DropdownMenuSubTrigger>
                  {renderDropdownMenuSub(dropMenuItem.childrens, level + 1, key)}
                </DropdownMenuSub>
              )
            }

            return (
              <DropdownMenuItem
                key={key}
                className="p-0!"
              >
                <Link
                  to={dropMenuItem?.path || '#'}
                  className={cn('inline-flex h-9 w-full items-center space-x-2 rounded-md p-2', {
                    'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                    'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                  })}
                >
                  {haveIcon && Icon}
                  <span>{dropMenuItem.title}</span>
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    )
  }

  return (
    <Sidebar
      side="left"
      collapsible="icon"
      className="gap-0"
    >
      {/* Sidebar header */}
      <SidebarHeader className="h-14">
        <div className="h-full w-full">
          <h5 className="flex h-full items-center justify-center text-center font-bold text-blue-500 uppercase">
            Legotech tunnel
          </h5>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      {/* Sidebar content */}
      <SidebarContent
        className="overflow-x-hidden"
        onMouseOver={() => {
          setOpen(true)
        }}
      >
        <SidebarGroup>
          <SidebarGroupLabel>Danh mục hệ thống</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenuItems
                .filter(item => item.permission)
                .map((item, index) => {
                  const Icon = item.icon
                  const haveIcon = !!item.icon
                  const key = item.key + '_' + index
                  const isActive = location.pathname === item.path

                  if (Array.isArray(item.childrens) && item.childrens.length > 0) {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <Collapsible
                          defaultOpen
                          className="group/collapsible"
                        >
                          <CollapsibleTrigger className="h-full w-full">
                            <div
                              className={cn(
                                'flex h-8 w-full cursor-pointer items-center justify-between rounded-md p-2',
                                {
                                  'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold':
                                    isActive,
                                  'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)':
                                    !isActive,
                                },
                              )}
                            >
                              <span className="inline-flex items-center space-x-2">
                                {haveIcon && Icon}
                                {openSidebar && <span>{item.title}</span>}
                              </span>
                              {openSidebar && (
                                <span>
                                  <ChevronDownIcon
                                    size={14}
                                    className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"
                                  />
                                </span>
                              )}
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>{renderMenuChildren(item.childrens, 1, key)}</CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuItem>
                    )
                  }
                  return (
                    <SidebarMenuItem key={key}>
                      <SidebarMenuButton
                        asChild
                        className={cn('', {
                          'text-(-color-sidebar-accent-foreground) bg-(--color-sidebar-accent) font-semibold': isActive,
                          'hover:text-(-color-sidebar-accent-foreground) hover:bg-(--color-sidebar-accent)': !isActive,
                        })}
                      >
                        <Link
                          to={item.path || '#'}
                          className="inline-flex h-full w-full items-center"
                        >
                          {haveIcon && Icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* Sidebar footer */}
      <SidebarFooter>
        <div
          className={cn('flex items-center', {
            'flex-col': !openSidebar,
          })}
        >
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className="flex cursor-pointer items-center space-x-2 p-0!">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  {openSidebar && <span className="text-[13px]">User</span>}
                </DropdownMenuTrigger>
                <DropdownMenuContent side="top">
                  <DropdownMenuItem className="flex cursor-pointer items-center space-x-1">
                    <User2Icon />
                    <span>Tài khoản</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer items-center space-x-1">
                    <SettingsIcon />
                    <span>Cài đặt</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer items-center space-x-1">
                    <LogOutIcon />
                    <span>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="h-7 w-7 cursor-pointer"
          >
            {openSidebar ? <ChevronsLeftIcon size={16} /> : <ChevronsRightIcon size={16} />}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
