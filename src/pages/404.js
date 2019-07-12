import React from "react"
import Hero from "../components/blocks/hero"

const NotFoundPage = () => (
  <>
    <section className={`content-block block-hero`}>
      <Hero data={{
        headline: `Page Not Found`
      }} />
    </section>

    <section className="content-block block-content">
      <div className="text-center">
        <div className="text-3xl max-w-xl mx-auto mb-8 pt-10">
          Sorry, this page doesn't exist.
        </div>
        <div className="mb-8">
          <a className="btn" href="//ldi.global/">Go back home</a>
        </div>
        <div className="mb-8">
          <a className="btn" href="//ldi.global/our-schools">Discover our schools</a>
        </div>
        <div className="mb-8">
          <a className="btn" href="//ldi.global/opportunities">Opportunities</a>
        </div>
        <div>
          <a className="btn" href="/signup">Give</a>
        </div>
      </div>
    </section>
  </>
)

export default NotFoundPage
