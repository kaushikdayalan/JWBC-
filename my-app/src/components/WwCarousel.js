import React,{useState} from 'react'
import {Carousel, CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap'
import longshot from '../assets/longshot.png'
import WHYUS from '../assets/WHYUS.jpg'
import lake from '../assets/lake.jpg'

const items= [
    {
        src: longshot,
        altText: 'slide1',
        caption:'slide1'
    },
    {
        src:lake,
        altText:'slide2',
        caption:'slide2'
    },
    {
        src:WHYUS,
        altText:'slide3',
        caption:'slide3'
    }
];

const WwCarousel = (props)=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = ()=>{
        if(animating) return;
        const nextIndex = activeIndex ===items.length - 1 ? 0 : activeIndex+1;
        setActiveIndex(nextIndex); 
    }

    const previous = ()=>{
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex-1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex)=>{
        if(animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item)=>{
        return (
            <CarouselItem 
            onExiting={()=>setAnimating(true)}
            onExited={()=>{setAnimating(false)}}
            key = {item.src}
            >
                <img src={item.src} width='75%' className="img-fluid" alt={item.altText}></img>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
            </CarouselItem>
        );
    });
    return (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          background='black'
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      );
}

export default WwCarousel;