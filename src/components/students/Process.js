import React from "react"
import Application from "./Application"
import Interview from "./Interview"
import DankLine from "../DankLine"
import Learn from "./Learn"
import Build from "./Build"
import Handover from "./Handover"

const Process = () => {
  return (
    <div>
      <Application />
      <DankLine />
      <Interview />
      <DankLine />
      <Learn />
      <DankLine />
      <Build />
      <DankLine />
      <Handover />
    </div>
  )
}
export default Process
