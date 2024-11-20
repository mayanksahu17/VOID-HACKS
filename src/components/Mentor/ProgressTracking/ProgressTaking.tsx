import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const pieData = [
  { name: "Completed", value: 400 },
  { name: "In Progress", value: 300 },
  { name: "Not Started", value: 300 },
]

const barData = [
  { name: "Group A", completed: 20, inProgress: 10, notStarted: 5 },
  { name: "Group B", completed: 15, inProgress: 15, notStarted: 10 },
  { name: "Group C", completed: 25, inProgress: 5, notStarted: 5 },
]

// Example `ChartConfig` adjusted to match type
const pieChartConfig = {
  label: "Pie Chart",
  icon: undefined,
  color: COLORS[0], // Example: pick one color for display
  theme: { light: "#f0f0f0", dark: "#202020" },
}

const barChartConfig = {
  label: "Bar Chart",
  icon: undefined,
  color: COLORS[1], // Example: pick one color for display
  theme: { light: "#f0f0f0", dark: "#202020" },
}

export function ProgressTracking() {
  const [selectedGroup, setSelectedGroup] = useState("all")

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Progress Overview
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Groups</SelectItem>
                <SelectItem value="groupA">Group A</SelectItem>
                <SelectItem value="groupB">Group B</SelectItem>
                <SelectItem value="groupC">Group C</SelectItem>
              </SelectContent>
            </Select>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around">
          {/* Pie Chart */}
          <ChartContainer className="h-[300px] w-[300px]" config={pieChartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Bar Chart */}
          <ChartContainer className="h-[300px] w-[500px]" config={barChartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completed" stackId="a" fill="#0088FE" />
                <Bar dataKey="inProgress" stackId="a" fill="#00C49F" />
                <Bar dataKey="notStarted" stackId="a" fill="#FFBB28" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
