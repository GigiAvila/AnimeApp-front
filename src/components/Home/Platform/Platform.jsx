import React, {useState} from 'react'
import {PlatformBg, PlatformTop} from './Platform.Styles'
import Preview from './Preview/Preview'
import List from './List/List'
import LastReading from './LastReading/LastReading'

const Platform = () => {

const [selectedManga, setSelectedManga] = useState({})


  return <PlatformBg>
    <PlatformTop>
    <Preview selectedManga={selectedManga} />
    <LastReading />

    </PlatformTop>
   
    <List setSelectedManga ={setSelectedManga}/> 
  </PlatformBg>
}

export default Platform
