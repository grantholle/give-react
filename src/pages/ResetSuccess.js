import React from "react"
import Blocks from "../components/blocks"

export default () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Password reset was successful`
    },
    {
      id: `content`,
      block: `content`,
      content: `<p class="text-center">Your password reset was successful. Please follow the link you receive to reset your password.</p>`
    }
  ]} />
)
