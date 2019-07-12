import React from "react"
import Hero from "./hero"
import Content from "./content"
import Cta from "./cta"
import CenteredHeadline from "./centered-headline"
import Accordion from "./accordion"
import SignIn from "./signin-form"
import CreateAccount from "./create-account-form"
import Donate from "./donate-form"
import Reset from "./reset-form"

const blocks = {
  hero: Hero,
  content: Content,
  button_action: Cta,
  centered_headline: CenteredHeadline,
  accordion: Accordion,
  signin: SignIn,
  create_account: CreateAccount,
  donate: Donate,
  reset: Reset,
}

const Blocks = ({ content }) => {
  if (!content) {
    return <div className="py-24">This block not implemented yet.</div>
  }

  return (
    <>
      {content.map(item => {
        const Block = blocks[item.block]

        if (Block) {
          return (
            <section key={item.id} className={`content-block block-${item.block}`}>
              <Block data={item} />
            </section>
          )
        }

        return <div key={item.id}></div>
      })}
    </>
  )
}

export default Blocks
