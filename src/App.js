import React, { Suspense, useRef, useEffect } from "react"
import lerp from "lerp"
import { Canvas, Dom, useFrame } from "react-three-fiber"
import Content from "./Components/Content"
import state from "./data"
import Plane from "./Components/plane"
import Banner from "./Components/Banner"
import Porfolio from "./Components/Portfolio"

function Startup() {
  const ref = useRef()
  useFrame(
    () =>
      (ref.current.material.opacity = lerp(
        ref.current.material.opacity,
        0,
        0.025
      ))
  )
  return (
    <Plane
      ref={ref}
      color="#0e0e0f"
      position={[0, 0, 200]}
      scale={[100, 100, 1]}
    />
  )
}

function App() {
  const scrollArea = useRef()

  const onScroll = (e) => {
    state.top.current = e.target.scrollTop
  }
  useEffect(() => {
    onScroll({ target: scrollArea.current })
  }, [])

  return (
    <>
      <Canvas
        concurrent
        pixelRatio={1}
        orthographic
        camera={{ zoom: state.zoom, position: [0, 0, 500] }}
      >
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Banner />
          <Content />
          <Startup />
          <Porfolio />
        </Suspense>
      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {new Array(state.sections).fill().map((_, index) => (
          <div
            key={index}
            id={"0" + index}
            style={{ height: `${(state.pages / state.sections) * 100}vh` }}
          />
        ))}
      </div>
    </>
  )
}

export default App
