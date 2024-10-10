import React from 'react'
import Input from './Input'
import DataProvider from './DataProvider'

export default function App() {
  return (
    <div>
      <Input
        renderProps={(value) => (
          <div>
            <h1>this is value {value}</h1>
          </div>
        )}
      />

      <DataProvider
        render={({ data, loading }) => (
          <div>
            {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
          </div>
        )}
      />
    </div>
  )
}
