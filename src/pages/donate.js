import React from "react"

import Blocks from "../components/blocks"

export default () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Give to LDi`
    },
    {
      id: `content`,
      block: `content`,
      content: `<p class="text-center"></p>`
    },
    {
      id: `donate-form`,
      block: `donate`
    }
  ]} />
)
