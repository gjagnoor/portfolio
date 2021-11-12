import React from "react"
const Timeline = ({ components }) => {
  return (
    <div className="center">
      <div>
        {components.length
          ? components.map((component, i) => {
              return (
                <React.Fragment>
                  <div class="dot"></div>
                  <span style={{ color: i === 0 ? "#87CEEB" : "grey" }}>
                    {" "}
                    {component}{" "}
                  </span>
                  {i === components.length - 1 ? null : <div class="vl" />}
                </React.Fragment>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Timeline
