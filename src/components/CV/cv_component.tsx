import React from "react"
import { CVDataType, Team, Employment } from "./cv_datatype";


const ContactComponent = ({ email }: { email: string }) => {
  return (
    <div>
      <div>{email}</div>
    </div>
  )
}

const TeamComponent = ({ team }: { team: Team }): React.ReactElement => {
  return (
    <>
      <div>{team.start.toString()}</div>
      <div>{team.end?.toString()}</div>
      <div>{team.description}</div>
    </>
  )
}

const EmployementComponent = ({
  employement,
}: {
  employement: Employment
}): React.ReactElement => {
  return (
    <div>
      <div >{employement.company}</div>
      <div css={{
          color: `red`,
          // Pseudo styles are supported!
          ':hover': {
            textDecoration: `underline`,
          },
          // As are media queries!
          '@media (min-width: 400px)': {
            color: `blue`,
          },
        }}>{employement.location}</div>
      <div>{employement.position}</div>
      {employement.teams.map((team, index) => (
        <div key={index}>
          <TeamComponent team={team} />
        </div>
      ))}
    </div>
  )
}

const CVComponent = ({
  cvData
}: {cvData: CVDataType}): React.ReactElement => {
  return (
    <>
      {cvData.employements.map((e, i) => (
        <div key={i}>
          <EmployementComponent employement={e}></EmployementComponent>
          EmployementComponent>
        </div>
      ))}</>
  )
}

export default CVComponent
