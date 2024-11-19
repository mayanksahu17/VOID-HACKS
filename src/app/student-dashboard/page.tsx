import { StudentSidebar } from "@/components/Student/StudentSidebar/StudentSidebar"
import { Notifications } from "@/components/Student/Notifications/Notifications"
import { TaskList } from "@/components/Student/Task/Tasklist"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function StudentDashboard() {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <StudentSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <header className="flex justify-between items-center p-4 border-b">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <Notifications />
          </header>
          <main className="p-4">
            <TaskList />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}