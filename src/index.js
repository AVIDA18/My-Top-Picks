import React from 'react'
import ReactDOM  from 'react-dom'
import Card from './Cards';
import sData from './sData';

ReactDOM.render(
    <>
    <h1 className='heading_style'>Top Anime Picks</h1>
    {/* we can do this as well */}
    {sData.map(function Anime(val){
        const {id} = val
        return(
            <Card key={id} {...val}
            // imgsrc = {val.imgsrc}
            // title = {val.title}
            // sname = {val.sname}
            // link = {val.link}
            />
        )
    })}

    {/* <Card
        imgsrc = {sData[0].imgsrc}
        title = {sData[0].title}
        sname = {sData[0].sname}
        link = {sData[0].link}
    />
        <Card
        imgsrc = {sData[1].imgsrc}
        title = {sData[1].title}
        sname = {sData[1].sname}
        link = {sData[1].link}
    />
        <Card
        imgsrc = {sData[2].imgsrc}
        title = {sData[2].title}
        sname = {sData[2].sname}
        link = {sData[2].link}
    /> */}
    </>,
    document.getElementById('root')
    
);