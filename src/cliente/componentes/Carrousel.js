import './Carrousel.css';
import { Carousel } from 'react-carousel-minimal';
import Slide1 from '../img/firmadoc1.webp';
import Slide2 from '../img/mettingRoom1.webp';
import Slide3 from '../img/accountingServices1.webp';

function Carrousel() {

    const data = [
        {
            image: Slide1,
            caption: ""
        },
        {
            image: Slide2,
            caption: ""
        },
        {
            image: Slide3,
            caption: ""
        }
    ];

    return (
        <div className='slider' >

            <div>

                <Carousel className='carrousel'
                    data={data}
                    time={5000}
                    width="100%"
                    //height="83.3vh"
                    //captionStyle={captionStyle}
                    radius="0"
                    slideNumber={false}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="none"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    showNavBtn={false}
                    style={{
                        filter: "grayscale(100%)",
                        objectPosition: "center -10%",
                        opacity: "0.8",
                        textAlign: "center",
                        maxWidth: "100%",
                        margin: "0 auto",
                    }}

                />
            </div>
        </div>
    );
}

export default Carrousel;
