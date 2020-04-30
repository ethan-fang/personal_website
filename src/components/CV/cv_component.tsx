import React from "react"
import { CVDataType, Team, Employment } from "./cv_datatype"
import theme from "../../theme"
import moment from 'moment'

const ContactComponent = ({ email }: { email: string }) => {
  return (
    <div>
      <div>{email}</div>
    </div>
  )
}

const TeamComponent = ({ team }: { team: Team }): React.ReactElement => {
  const startText = moment(team.start).format('MMM YYYY');
  const endText = team.end ? moment(team.end).format('MMM YYYY') : 'Now';
  return (
    <div css={{
      marginBottom: '16px',
    }}>
      <div>{startText} - {endText}</div>
      <div>{team.description}</div>
    </div>
  )
}

const EmployementComponent = ({
  employement,
}: {
  employement: Employment
}): React.ReactElement => {
  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "flex-start",
          color: theme.colors.dark,
        }}
      >
        <div>{employement.company}</div>-<div>{employement.location}</div>
      </div>
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
  cvData,
}: {
  cvData: CVDataType
}): React.ReactElement => {
  return (
    <>
      {cvData.employements.map((e, i) => (
        <div key={i}>
          <EmployementComponent employement={e}></EmployementComponent>
        </div>
      ))}
    </>
  )
}

export default CVComponent
