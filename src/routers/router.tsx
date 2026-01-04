import { DashboardPage, LoginPage, MassagePage } from '@/pages'
import PATH from './paths'

export const routersPublic = [
  {
    path: PATH.LOGIN,
    element: <LoginPage />,
    layout: 'blank',
  },
]

export const routersPrivate = [
  {
    path: PATH.DASHBOARD,
    element: <DashboardPage />,
    layout: 'default',
    hidden: false,
  },
  {
    path: '/message',
    element: <MassagePage />,
    layout: 'default',
    hidden: false,
  },
]
