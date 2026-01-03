import type { ReactNode } from 'react'
import { AppSidebar } from '../custom/app-sidebar'
import { SidebarProvider } from '../ui/sidebar'

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <div>
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
    <main>
      {children}
    </main>
  </div>
}

export default DefaultLayout
