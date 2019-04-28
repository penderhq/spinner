import React from 'react'
import {css, cx, keyframes} from 'emotion'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }   
`

const Spinner = ({className, size, width, height, speed}) => {

    speed = speed || 600
    size = size || width || height || 32

    return (
        <div
            className={cx(
                css`
      display: inline-block;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 2px solid #D3DAE6;
      border-color: #07f #D3DAE6 #D3DAE6 #D3DAE6;
      animation: ${spin} ${speed}ms infinite linear;
    `, className
            )}
        />
    )
}

export default Spinner