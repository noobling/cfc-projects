import React from "react"
import GeneralSection from "../GeneralSection"
import CelebrateImage from "../../images/celebrate.svg"

const Handover = () => {
  return (
    <GeneralSection
      image={CelebrateImage}
      imageName="Celebrate"
      heading="Handover"
      description="Students will handover their work after specified date and we will host a party to celebrate everyone's hard work 🎉"
      link="https://codersforcauses.org"
      linkText="Apply for a Service"
    />
  )
}

export default Handover
