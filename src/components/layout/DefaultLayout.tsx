import type { ReactNode } from 'react'
import { AppSidebar } from '../custom/app-sidebar'
import { SidebarProvider } from '../ui/sidebar'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  )
}

export default DefaultLayout
