import React from "react"

export default ({ data }) => (
  <div className="bg-white">
    <div
      dangerouslySetInnerHTML={{ __html: data.content }}
      className="container"
    />
  </div>
)