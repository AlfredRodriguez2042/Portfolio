import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"

const slides = [
  {
    id: 0,
    url: require("../assets/ecomerce1.png"),
  },
  {
    id: 1,
    url: require("../assets/restaurant1.png"),
  },
  {
    id: 2,
    url: require("../assets/restaurant2.png"),
  },
  { id: 3, url: require("../assets/api-blog-1.png") },
]
const Slider = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 4000),
    []
  )
  return transitions.map(({ item, props, key }) => (
    <div>
      <animated.div
        key={key}
        className="bg"
        style={{
          ...props,
          backgroundImage: `url(${item.url})`,
        }}
      >
        {/* <div>{item.id}</div> */}
      </animated.div>
    </div>
  ))
}
export default Slider
