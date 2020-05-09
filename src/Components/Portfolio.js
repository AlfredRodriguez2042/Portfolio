import React from "react"
import { Block, useBlock } from "./blocks"
import { Dom } from "react-three-fiber"
import Slider from "./Slider"

const Portfolio = () => {
  const { contentMaxWidth: w } = useBlock()

  return (
    <>
      <Block factor={1.2} offset={4}>
        <Dom position={[-w / 1.7, 0.5, -1]}>
          <Slider />
        </Dom>
      </Block>
    </>
  )
}

export default Portfolio
