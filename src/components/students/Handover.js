import React from "react"
import GeneralSection from "../GeneralSection"
import CelebrateImage from "../../images/celebrate.svg"

const Handover = () => {
  return (
    <GeneralSection
      image={CelebrateImage}
      imageName="Celebrate"
      heading="Handover"
      description="Deliver the project to client and a party to celebrate your work 🎉"
      link="https://codersforcauses.org"
      linkText="Apply Now"
    />
  )
}

export default Handover
