import React from 'react'

const DescriptionList = ({ list }) => {
  return (
    <span>
      <span>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </span>
    </span>
  )
}

export default DescriptionList
