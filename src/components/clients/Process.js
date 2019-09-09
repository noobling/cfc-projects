import React from "react"
import Application from "./Application"
import DankLine from "../DankLine"
import Approved from "./Approved"
import Meetings from "./Meetings"
import Build from "./Build"
import Handover from "./Handover"

const Process = () => {
  return (
    <>
      <Application />
      <DankLine />
      <Approved />
      <DankLine />
      <Meetings />
      <DankLine />
      <Build />
      <DankLine />
      <Handover />
    </>
  )
}

export default Process
