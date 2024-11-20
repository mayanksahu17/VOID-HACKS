'use client'

import { useState } from "react"
import { MentorSidebar } from "@/components/Mentor/MentorSidebar/MentorSidebar"
import { TaskAssignment } from "@/components/Mentor/TaskAssignment/TaskAssignment"
import { StudentGroups } from "@/components/Mentor/SudentGroup/StudentGroup"
import { ProgressTracking } from "@/components/Mentor/ProgressTracking/ProgressTaking"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState("tasks")

  const notifications = [
    { id: 1, message: "New task submission from John Doe", type: "info" },
    { id: 2, message: "Group A has completed all tasks", type: "success" },
    { id: 3, message: "Reminder: Weekly mentor meeting tomorrow", type: "warning" },
  ]

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <MentorSidebar />
        <SidebarInset className="flex-1 overflow-auto">
          <header className="flex justify-between items-center p-4 border-b">
            <h1 className="text-2xl font-bold">Mentor Dashboard</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="cursor-pointer">
                    <span className={`mr-2 h-2 w-2 rounded-full bg-${notification.type}`} />
                    {notification.message}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <main className="p-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="tasks">Task Management</TabsTrigger>
                <TabsTrigger value="groups">Student Groups</TabsTrigger>
                <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
              </TabsList>
              <TabsContent value="tasks">
                <TaskAssignment />
              </TabsContent>
              <TabsContent value="groups">
                <StudentGroups />
              </TabsContent>
              <TabsContent value="progress">
                <ProgressTracking />
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}