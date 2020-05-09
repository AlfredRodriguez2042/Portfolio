import React from "react"
import { Block, useBlock } from "./blocks"
import { Text } from "./Text"
import { Dom } from "react-three-fiber"
import SocialMedia from "./SocialMedia"
// -w / 6.1
const Banner = () => {
  const { contentMaxWidth: w, mobile } = useBlock()

  return (
    <>
      <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text
            left
            size={mobile ? w * 0.1 : w * 0.08}
            position={[-w / 3.2, 0.5, -1]}
            color="#d40749"
          >
            Portfolio
          </Text>
        </Block>
        <Block factor={1.0}>
          <Dom position={[mobile ? -w / 2.1 : -w / 6.1, -w * 0.08 + 0.25, -1]}>
            Alfredo Rodriguez Garcia{mobile ? <br /> : " "}
            <SocialMedia />
          </Dom>
        </Block>
      </Block>
    </>
  )
}

export default Banner
