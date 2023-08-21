import { Link } from 'react-router-dom'
import './Game.css'
import game1 from '../../images/Big & Small Game.svg'
import game2 from '../../images/RiseUp.svg'
import Profile from '../../images/img-profile.svg'
import Winner from '../../images/icon-winner.svg'

function GameSection() {
    return (
        <div className='game'>
            <div className="container">

                <div className="col-12 game">
                    <Link to='/growUp'>
                        <div className='game-banner'>
                            <img src={game1} alt="" />
                            <div className="game_user_row1">
                                <div className="game_user_col">
                                    <div className="game_user_img">
                                        <img src={Profile} alt="" />
                                    </div>
                                    <div className="game_user_name">
                                        Bharat Jena
                                    </div>
                                </div>

                                <div className="game_win_col">
                                    <div className="game_user_img">
                                        <img src={Winner} alt="" />
                                    </div>
                                    <div className="game_user_name">
                                        Win 300.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link>
                        <div className='game-banner trx'>
                        <img src={game2} alt="" />
                        <div className="game_user_row">
                            <div className="game_user_col">
                                <div className="game_user_img">
                                    <img src={Profile} alt="" />
                                </div>
                                <div className="game_user_name">
                                    Rajesh Barik
                                </div>
                            </div>

                            <div className="game_win_col">
                                <div className="game_user_img">
                                    <img src={Winner} alt="" />
                                </div>
                                <div className="game_user_name">
                                    Win 260.00
                                </div>
                            </div>
                        </div>
                        </div>
                        </Link>
                </div>
                {/*<div className="col-12 game"><button><div></div></button></div>*/}
            </div>

        </div>
    )
}

export default GameSection
