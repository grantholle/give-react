import React from "react"
import Blocks from "../components/blocks"

const SignIn = () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Reset your password`
    },
    {
      id: `reset-form`,
      block: `reset`
    }
  ]} />
)

export default SignIn
