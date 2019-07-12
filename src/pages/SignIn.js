import React from "react"
import Blocks from "../components/blocks"

export default () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Sign in to Give`
    },
    {
      id: `signin-form`,
      block: `signin`
    }
  ]} />
)
