import React from "react"

import Layout from "../components/layout"
import Blocks from "../components/blocks"

export default () => (
  <Layout>
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
  </Layout>
)
