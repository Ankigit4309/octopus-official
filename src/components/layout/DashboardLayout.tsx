// import { Outlet } from 'react-router-dom'
// import { SidebarProvider } from '@/components/ui/sidebar'
// import { AppSidebar } from '@/components/layout/AppSidebar'

// const DashboardLayout = () => {
//   return (
//     <SidebarProvider>
//       <div className="min-h-screen flex w-full">
//         <AppSidebar />
//         <main className="flex-1 overflow-auto">
//           <Outlet />
//         </main>
//       </div>
//     </SidebarProvider>
//   )
// }

// export default DashboardLayout  

import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/AppSidebar'

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 w-full min-h-screen">
        {/* Mobile sidebar trigger - visible only on mobile */}
        <div className="md:hidden sticky top-0 z-40 bg-background border-b px-4 py-2">
          <SidebarTrigger className="p-2" />
        </div>
        
        {/* Main content area with responsive padding */}
        <div className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout
