import React from "react"
import ApprovedImage from "../../images/approved.svg"
import GeneralSection from "../GeneralSection"

const Approved = () => {
  return (
    <GeneralSection
      image={ApprovedImage}
      imageName="Approved"
      link="https://google.com"
      linkText="Learn about approval process"
      heading="Approved"
      description="Your service request gets approved by committee"
    />
  )
}

export default Approved
