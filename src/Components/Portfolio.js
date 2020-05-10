import React from "react"
import { Block, useBlock } from "./blocks"
import { Dom } from "react-three-fiber"
import Slider from "./Slider"

const Portfolio = () => {
  const { contentMaxWidth: w, mobile } = useBlock()
  // -w / 1.7, 0.5
  return (
    <>
      <Block factor={1.2} offset={4}>
        <Dom position={[mobile ? -w / 2.2 : -w / 1.7, 0.5, 0.5, -1]}>
          <Slider />
        </Dom>
      </Block>
    </>
  )
}

export default Portfolio
