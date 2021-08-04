import React, {useState} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';



const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }       


    const items = [
        {
          src: 'img/slider/s-1.jpg',
          altText: 'Slide 1',
          caption: 'Всегда свежие цветы'
        },
        {
          src: 'img/slider/s-2.jpg',
          altText: 'Slide 2',
          caption: 'Быстрая доставка цветов'
        },
        {
          src: 'img/slider/s-3.jpg',
          altText: 'Slide 3',
          caption: 'Гарантия качества цветов'
        }
      ];

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >

            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src={`${process.env.PUBLIC_URL}${item.src}`} alt=""/>
                        </div>
                        
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <div className="title-slider">{item.caption}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </CarouselItem>
        );
      });



    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    autoPlay = {true}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>    
            </div>
        </div>
        
    )
}

export default Slider