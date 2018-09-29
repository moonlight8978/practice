import React from 'react'

const Spinner = () => <div>Spinner</div>

function Loading({ isFetching, children }) {
  return isFetching ? <Spinner /> : children()
}

export default Loading
