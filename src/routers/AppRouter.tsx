import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routersPrivate, routersPublic } from './router'
import { BlankLayout, DefaultLayout } from '@/components/layout'

export const AppRouter = () => {
  const _getLayoutPage = (layoutType: string) => {
    switch (layoutType) {
      case 'default': {
        return DefaultLayout
      }
      default: {
        return BlankLayout
      }
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        {routersPublic.map((route, index) => {
          const LayoutComponent = _getLayoutPage(route.layout)
          return (
            <Route
              key={index}
              path={route.path}
              element={<LayoutComponent>{route.element}</LayoutComponent>}
            />
          )
        })}
        {routersPrivate
          .filter(route => !route.hidden)
          .map((route, index) => {
            const LayoutComponent = _getLayoutPage(route.layout)
            return (
              <Route
                key={index}
                path={route.path}
                element={<LayoutComponent>{route.element}</LayoutComponent>}
              />
            )
          })}
      </Routes>
    </BrowserRouter>
  )
}
