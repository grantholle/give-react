import React from "react"

import Layout from "../components/layout"
import Blocks from "../components/blocks"

const SignIn = () => (
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
        content: `<p class="text-center">Thank you for your gift... and other content</p>`
      },
      {
        id: `donate-form`,
        block: `donate`
      }
    ]} />
  </Layout>
)

export default SignIn
