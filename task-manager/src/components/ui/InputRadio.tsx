'use client'

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "./RadioGroup"
import { Label } from "./Label"
import { Card, CardContent } from "./Card"

interface RadioFilterProps {
  filter: string
  setFilter: (value: string) => void
}

export default function RadioFilter({ filter, setFilter }: RadioFilterProps) {
  const [selected, setSelected] = useState<string>("all")

  const handleChange = (value: string) => {
    setSelected(value)
    setFilter(value)
  }

  return (
    <Card className="w-full max-w-2xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-3">
      <CardContent className="p-4">
        <RadioGroup
          defaultValue="all"
          value={selected}
          onValueChange={handleChange}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label
              htmlFor="all"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Todas las tareas
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pending" id="pending" />
            <Label
              htmlFor="completed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tareas no completadas
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="completed" id="completed" />
            <Label
              htmlFor="pending"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tareas completadas
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}

