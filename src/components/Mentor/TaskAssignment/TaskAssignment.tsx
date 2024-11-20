import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskAssignment() {
  const [task, setTask] = useState({ title: "", description: "", group: "" })
  const groups = ["Group A", "Group B", "Group C"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Task assigned:", task)
    // Here you would typically send this data to your backend
    setTask({ title: "", description: "", group: "" })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assign New Task</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            placeholder="Task Title"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
          <Textarea
            placeholder="Task Description"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
          />
          <Select value={task.group} onValueChange={(value) => setTask({ ...task, group: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a group" />
            </SelectTrigger>
            <SelectContent>
              {groups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button type="submit">Assign Task</Button>
        </CardFooter>
      </form>
    </Card>
  )
}