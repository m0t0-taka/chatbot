import React from 'react'
import {Answer} from './index'

const AnswersList = () => {
  return(
    <div className="c-grid_answer">
      <Answer content={"hoge"}/>
      <Answer content={"huga"}/>
      <Answer content={"foo"}/>
      <Answer content={"bar"}/>

    </div>
  )
}

export default AnswersList