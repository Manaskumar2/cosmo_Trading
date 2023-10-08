import banner1 from '../../images/bannerCosmoTrade.svg'
import banner2 from '../../images/bannerCosmoTrade2.svg';
import banner3 from '../../images/bannerCosmoTrade3.svg';
import Carousel from 'react-bootstrap/Carousel';
import mic from '../../images/mic.svg'
import './Banner.css'
function banner({news}) {
    return (
        < div >
            <div className='banner'>
                <Carousel controls={false}>
                    <Carousel.Item interval={8000}>
                        <img src={banner1} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img src={banner2} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img src={banner3} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='announcement container'>
                <div className='title text-center'><h4>Latest News</h4></div>
            <div className='row marquee-wrapper'>
                <div className='img_marquee'>
                    <img src={mic} alt="" />
                </div>
                <div className='marquee_text'>
                    <marquee direction="left" >
                        {news && news.newsText}
                    </marquee>
                </div>
            </div>
            </div>

        </div>
    )
}

export default banner
