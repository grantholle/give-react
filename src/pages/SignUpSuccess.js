import React from "react"
import Blocks from "../components/blocks"

export default () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Sign up was successful`
    },
    {
      id: `content`,
      block: `content`,
      content: `<p class="text-center -mb-24">Thanks for signing up! Log in below using your new credentials.</p>`
    },
    {
      id: `signin-form`,
      block: `signin`,
      hideSignup: true
    }
  ]} />
)
