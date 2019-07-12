import React from "react"

import Layout from "../components/layout"
import Blocks from "../components/blocks"

export default () => (
  <Layout>
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
  </Layout>
)
