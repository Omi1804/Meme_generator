import React from 'react'

export const Meme = () => {
    
    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    })

    const [allMemeImages,setAllMems] = React.useState([])


    //fetching form the api

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(resp=>resp.json())
        .then(data=>setAllMems(data.data.memes))
    },[])


    function getMemeImg(){
        const random = Math.floor(Math.random()*100)
        const randomMeme = allMemeImages[random].url
        setMeme(prev=>{
            return {
                ...prev,
                url:randomMeme
            }
        })
    }

    function handleChange(event){
        setMeme(prev=>{
            return {
                ...prev,
                [event.target.name]:[event.target.value]
            }
        })
    }
    

    return (
        <div className="meme_cont">

            <div className="Meme">
                <input className='input' type="text" placeholder='Top text' value={meme.topText} onChange={handleChange} name='topText'/>
                <input className='input' type="text" placeholder='Bottom text' value={meme.bottomText} onChange={handleChange} name='bottomText'/>
                <button className='button' onClick={getMemeImg}>Get a new meme Image</button>
            </div>

            {meme.url && <div className="img_cont">
                <h1 className='headingText top'>{meme.topText}</h1>
                <h1 className='headingText bottom'>{meme.bottomText}</h1>
            <img className='memeImg' src={meme.url} alt="" />
            </div>}
        </div>
    )
}
