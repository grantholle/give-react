import React from "react"

import Nav from "./nav"
import Footer from "./footer"
import "./layout.css"

export default ({ children, whiteNav }) => (
  <>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
)
