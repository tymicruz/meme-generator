import trollFace from '../images/troll-face.png'

const Header = () => {
    return (
        <header className="page--header">
            <div className='page--header-left'>
                <img className="header--logo" src={trollFace} />
                <h2 className="header--title">Memo Generator</h2>
            </div>
            <div className='page--header-right'>
                <h3 className='header--subtitle'>React Course - Project 3</h3>
            </div>
        </header>
    )
}

export default Header