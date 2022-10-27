import React, {useState, useEffect} from 'react';

export default function Mouse(props) {

  let [position, setPosition] = useState({})

  document.onmousemove = event => {
    console.log({x: event.pageX, y: event.pageY})
    setPosition({x: event.pageX, y: event.pageY})
  }

  useEffect(() => {
    const send = async () => {
      fetch('http://localhost:8080/api/positions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(position)
      })
    }

    send()
  })

  return (
    <></>
  )
}
