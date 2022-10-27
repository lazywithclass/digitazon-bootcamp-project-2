import React, { useState, useEffect } from 'react';


export default function Show(props) {

  let [positions, setPositions] = useState([])

  let canvas = document.getElementById('canvas')
  canvas.style.position = 'fixed'
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.zIndex = 9001;
  canvas.style.border = '1px solid white'
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'

  async function getPositions() {
    let res = await fetch('http://localhost:8080/api/positions/all')
    let pos = await res.json()
    setPositions(pos)

    pos.map((p) => {
      ctx.fillRect(p.x / 5, p.y / 5, 1, 1)
    })
  }

  function clearPositions() {
    fetch('http://localhost:8080/api/positions', {
      method: 'DELETE'
    })
  }

  document.addEventListener('keydown', function (event) {
    if (event.key == 'q') {
      getPositions()
    }
    if (event.key == 'c') {
      clearPositions()
    }
  }, false);

  return (
    <div>
      {positions.length} points found
    </div>
  )
}
