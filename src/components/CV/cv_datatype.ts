import React from "react"
export type CVDataType = {
  email: string
  employements: Employment[]
}

export type Team = {
  start: Date
  end: Date | null
  description: React.ReactNode
}

export type Employment = {
  company: string
  location: string
  position: string
  teams: Team[]
}
