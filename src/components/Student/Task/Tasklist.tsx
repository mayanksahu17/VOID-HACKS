'use client'
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

type Task = {
  id: number
  title: string
  description: string
  completed: boolean
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Weekly Report", description: "Submit weekly progress report", completed: false },
    { id: 2, title: "Project Presentation", description: "Prepare slides for project presentation", completed: false },
    { id: 3, title: "Code Review", description: "Review and comment on team's code", completed: true },
  ])

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [description, setDescription] = useState("")

  const handleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleTaskSelection = (task: Task) => {
    setSelectedTask(task)
    setDescription(task.description)
  }

  const handleDescriptionUpdate = () => {
    if (selectedTask) {
      setTasks(tasks.map(task => 
        task.id === selectedTask.id ? { ...task, description } : task
      ))
      setSelectedTask(null)
      setDescription("")
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Tasks</h2>
      {tasks.map(task => (
        <Card key={task.id} className="cursor-pointer" onClick={() => handleTaskSelection(task)}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => handleTaskCompletion(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? "line-through" : ""}>{task.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{task.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
      {selectedTask && (
        <Card>
          <CardHeader>
            <CardTitle>Update Task Description</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter new description"
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleDescriptionUpdate}>Update</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}