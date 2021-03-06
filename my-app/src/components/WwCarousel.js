import React,{useState} from 'react'
import {Carousel, CarouselItem,CarouselControl,CarouselIndicators} from 'reactstrap'
import longshot from '../assets/buffalo.jpg'
import WHYUS from '../assets/cow.jpg'
import lake from '../assets/horse.jpg'

const items= [
    {
        src: longshot
    },
    {
        src:lake
    },
    {
        src:WHYUS
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
            width='100%'
            >   
                <img src={item.src} className="img-fluid text-center image-edges" style={{height:'500px', width:'350px'}} alt={item.altText}></img>
            </CarouselItem>
        );
    });
    return (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      );
}

export default WwCarousel;