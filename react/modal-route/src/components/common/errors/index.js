import React from 'react'

function error(code, content) {
  const Error = () => (
    <div className="d-flex justify-content-center align-items-center" id="main">
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">{code}</h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead" id="desc">{content}</h2>
      </div>
    </div>
  )

  return Error
}

export const NotFound = error(404, 'The page you requested was not found.')
