import React from "react"
import Blocks from "../components/blocks"

export default () => (
  <Blocks content={[
    {
      id: `hero`,
      block: `hero`,
      headline: `Create a Give Account`
    },
    {
      id: `content`,
      block: `content`,
      content: `<p class="text-center"></p>`
    },
    // {
    //   id: `accordion-1`,
    //   block: `accordion`,
    //   title: `Can I do this thing?`,
    //   content: `<p class="mb-0">You sure can, pal.</p>`,
    //   addTopSpace: false,
    //   addBottomSpace: false
    // },
    // {
    //   id: `accordion-2`,
    //   block: `accordion`,
    //   title: `Can I do this thing?`,
    //   content: `<p class="mb-0">You sure can, pal.</p>`,
    //   addTopSpace: false,
    //   addBottomSpace: false
    // },
    {
      id: `signup-form`,
      block: `create_account`
    }
  ]} />
)
