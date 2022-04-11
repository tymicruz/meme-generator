import { useState, useEffect } from "react"

const Meme = () => {

    const defaultImg = ""

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(resJson => setAllMemes(resJson.data.memes))
    }, [])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: defaultImg
    })

    const handleFormText = (e) => {
        const name = e.target.name
        const value = e.target.value

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const getRandomMeme = () => {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomNum].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: randomUrl
            }
        })
    }

    return (
        <main>
            <form className="meme--form" onSubmit={handleSubmit}>
                <div className="meme--inputs">
                    <input name="topText" type="text" value={meme.topText} onChange={handleFormText} placeholder="Top text" className="meme--input meme--input-top"></input>
                    <input name="bottomText" type="text" value={meme.bottomText} onChange={handleFormText} placeholder="Bottom text" className="meme--input meme--input-bottom"></input>
                </div>
                <button onClick={getRandomMeme} className="meme--button">Get a new meme image 🖼</button>
                <div className="meme">
                    <img className="meme--image" src={meme.randomImg} />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

            </form>
        </main>
    )
}

export default Meme