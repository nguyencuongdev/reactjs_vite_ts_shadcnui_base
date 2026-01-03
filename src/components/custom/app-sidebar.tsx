import { Calendar, ChevronsLeftIcon, ChevronsRightIcon, Home, Inbox, LogOutIcon, Search, Settings, SettingsIcon, User2Icon } from "lucide-react"

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
  useSidebar,
} from "@/components/ui/sidebar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Link, useLocation } from "react-router-dom"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { open: openSidebar, toggleSidebar } = useSidebar()
  const location = useLocation()


  return (
    <Sidebar side="left" collapsible="icon" className="gap-0">
      <SidebarHeader className="h-14 border-b">
        <div className="h-full w-full">
          <h5 className="text-blue-500 font-bold uppercase text-center">Legotech tunnel center</h5>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Danh mục hệ thống</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={cn('', {
                    'bg-gray-200 font-semibold': openSidebar && location.pathname.includes(item.url)
                  })}>
                    <Link to={item.url} className="inlin-flex items-center w-full h-full">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className={cn('flex items-center', {
          'flex-col': !openSidebar
        })}>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-0! flex items-center space-x-2 cursor-pointer">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  {openSidebar && <span className="text-[13px]">User</span>}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem className="flex items-center space-x-1 cursor-pointer">
                    <User2Icon />
                    <span>Tài khoản</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-1 cursor-pointer">
                    <SettingsIcon />
                    <span>Cài đặt</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-1 cursor-pointer">
                    <LogOutIcon />
                    <span>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <Button onClick={toggleSidebar} variant="ghost" className="p-2!">
            {openSidebar
              ? (<ChevronsLeftIcon />)
              : (<ChevronsRightIcon />)
            }
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
