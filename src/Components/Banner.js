import React from "react"
import { Block, useBlock } from "./blocks"
import { Text } from "./Text"
import { Dom } from "react-three-fiber"

const Banner = () => {
  const { contentMaxWidth: w, mobile } = useBlock()

  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Dom>
            <h1 className="glitch">Portfolio</h1>
          </Dom>
        </Block>
        <Block factor={1.0}>
          <Dom position={[-w / 3.2, -w * 0.08 + 0.25, -1]}>
            Alfredo Rodriguez Garcia{mobile ? <br /> : " "}
          </Dom>
        </Block>
      </Block>
    </>
  )
}

export default Banner
