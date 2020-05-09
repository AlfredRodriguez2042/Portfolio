import React from "react"
import { Block, useBlock } from "./blocks"
import { Text } from "./Text"
import { Dom } from "react-three-fiber"
import SocialMedia from "./SocialMedia"
// -w /
const Banner = () => {
  const { contentMaxWidth: w, mobile } = useBlock()

  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text
            left
            size={mobile ? w * 0.08 : w * 0.08}
            position={[-w / 3.2, 0.5, -1]}
            color="#d40749"
          >
            Portfolio
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[mobile ? -w / 2.9 : -w / 4.6, -w * 0.08 + 0.05, -1]}>
            <h1 className="banner-subtitle"> Alfredo Rodriguez Garcia</h1>
            {mobile ? <br /> : " "}
            <SocialMedia />
          </Dom>
        </Block>
      </Block>
    </>
  )
}

export default Banner
