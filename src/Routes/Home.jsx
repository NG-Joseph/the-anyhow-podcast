import React from 'react'
import Page from '../components/page'
import Page2 from '../components/page2'
import Page3 from '../components/page3'
import Community from '../components/community'
import Episodes from '../components/episodes'
import Video from '../components/video'

const Home = () => {
  return (
    <div>
        <Page/>
        <Page2 />
        <Page3 />
        <Community />
        <Episodes /> 
        <Video />
    </div>
  )
}

export default Home