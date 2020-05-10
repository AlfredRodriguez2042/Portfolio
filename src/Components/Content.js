import React, { useMemo } from "react"
import { useLoader, Dom } from "react-three-fiber"
import { useBlock, Block } from "./blocks"
import { MultilineText } from "./Text"
import { TextureLoader, LinearFilter } from "three"
import state from "../data"
import Plane from "./plane"
import Paragraph from "./Paragraph"

const Content = () => {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(
    () => images.forEach((texture) => (texture.minFilter = LinearFilter)),
    [images]
  )
  const { contentMaxWidth: w, canvasWidth, canvasHeight } = useBlock()
  return (
    <>
      <Block factor={1.2} offset={3.5}>
        <MultilineText
          top
          left
          size={w * 0.15}
          lineHeight={w / 5}
          position={[-w / 2.0, 0, -1]}
          color="#2fe8c3"
          text={"some\nexamples"}
        />
      </Block>
      {state.paragraphs.map((props, index) => (
        <Paragraph key={index} index={index} {...props} image={images[index]} />
      ))}
      {state.stripes.map(({ offset, color, height }, index) => (
        <Block key={index} factor={-1.5} offset={offset}>
          <Plane
            args={[50, height, 32, 32]}
            shift={-4}
            color={color}
            rotation={[0, 0, Math.PI / 8]}
            position={[0, 0, -10]}
          />
        </Block>
      ))}
      <Block factor={1.25} offset={5}>
        <Dom
          className="bottom-left"
          position={[-canvasWidth / 2, -canvasHeight / 2, 0]}
        >
          {"Copyright © Alfredo Rodriguez Garcia "}

          {new Date().getFullYear()}
          {"."}
        </Dom>
      </Block>
    </>
  )
}

export default Content
