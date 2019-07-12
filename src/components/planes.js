import React from "react"
import { ReactComponent as Left } from "../images/planes-left.svg"
import { ReactComponent as Right } from "../images/planes-right.svg"

export default () => (
  <div className="flex flex-col sm:flex-row pb-8 justify-between w-full sm:w-64 mx-auto">
    <div className="plane-left">
      <Right className="w-full"/>
    </div>
    <div className="plane-right">
      <Left className="w-full"/>
    </div>
  </div>
)
