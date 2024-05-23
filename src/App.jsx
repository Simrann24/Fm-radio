import React from 'react'
import Bar from './components/nav'
import Page1 from './components1/page1'
import Page2 from './components2/Page2'
import Page3 from './components3/page3'
import Page4 from './components4/Page4'

const App=()=>{
  return(
    <div>

    <Bar/>
    <Page1/>
    <Page2/>

    <div className='card'>

      <div><Page3 imgsrc="images\Layer 31.png" title="CLIENT NAME"/></div>
      <div> <Page3 imgsrc="images\Layer 32.png" title="CLIENT NAME"/></div>
      <div> <Page3 imgsrc="images\Layer 33.png" title="CLIENT NAME"/></div>
      <div> <Page3 imgsrc="images\Layer 34.png" title="CLIENT NAME"/></div>
      <div><Page3 imgsrc="images\Layer 35.png" title="CLIENT NAME"/></div>
      <div> <Page3 imgsrc="images\Layer 36.png" title="CLIENT NAME"/></div>

    </div>

    <Page4/>
    </div>
    
  );
}

export default App
