import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Student = {
  id: string
  name: string
  email: string
}

type Group = {
  id: string
  name: string
  students: Student[]
}

export function StudentGroups() {
  const [groups, setGroups] = useState<Group[]>([
    {
      id: "1",
      name: "Group A",
      students: [
        { id: "1", name: "John Doe", email: "john@example.com" },
        { id: "2", name: "Jane Smith", email: "jane@example.com" },
      ],
    },
    {
      id: "2",
      name: "Group B",
      students: [
        { id: "3", name: "Alice Johnson", email: "alice@example.com" },
        { id: "4", name: "Bob Williams", email: "bob@example.com" },
      ],
    },
  ])

  const [newGroupName, setNewGroupName] = useState("")

  const addGroup = () => {
    if (newGroupName) {
      setGroups([...groups, { id: Date.now().toString(), name: newGroupName, students: [] }])
      setNewGroupName("")
    }
  }

  const removeStudent = (groupId: string, studentId: string) => {
    setGroups(
      groups.map((group) =>
        group.id === groupId
          ? { ...group, students: group.students.filter((student) => student.id !== studentId) }
          : group
      )
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Create New Group</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Group Name"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={addGroup}>Create Group</Button>
        </CardFooter>
      </Card>

      {groups.map((group) => (
        <Card key={group.id}>
          <CardHeader>
            <CardTitle>{group.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeStudent(group.id, student.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}