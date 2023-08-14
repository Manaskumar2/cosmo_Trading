import { Link } from 'react-router-dom'
import './Game.css'
import game1 from '../../images/Big & Small Game.svg'
import game2 from '../../images/second.png'
function GameSection() {
    return (
        <div className='game'>
            <div className="container">

                <div className="col-12 game">
                    <Link to='/growUp'>
                        <div className='game-banner'>
                            <img src={game1} alt="" />
                        </div>
                        </Link>
                        <Link>
                        <div className='game-banner trx'>
                        <img src={game2} alt="" />
                        </div>
                        </Link>
                </div>
                <div className="col-12 game"><button><div></div></button></div>
            </div>

        </div>
    )
}

export default GameSection
