import { useState, useEffect } from 'react'
import Slider from 'react-slick'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [bannerHeight, setBannerHeight] = useState(400)

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        beforeChange: (current, next) => {
            // Remove animation class before transition
            const titleElements = document.querySelectorAll('.title')
            titleElements.forEach(el => el.classList.remove('animated', 'fadeInUp'))
        },
        afterChange: (index) => {
            setCurrentSlide(index)
            // Add animation class after transition
            setTimeout(() => {
                const titleElements = document.querySelectorAll('.title')
                titleElements.forEach(el => el.classList.add('animated', 'fadeInUp'))
            }, 100)
        }
    }

    const slides = [
        {
            image: '/images/banner01.jpg',
            title: 'Growth is a way of life at Munoth.',
            subtitle: 'When dedicated efforts are put in the right direction growth is inevitable.'
        },
        {
            image: '/images/banner02.jpg',
            title: 'Growth is a way of life at Munoth.',
            subtitle: 'When dedicated efforts are put in the right direction growth is inevitable.'
        },
        {
            image: '/images/banner03.jpg',
            title: 'Growth is a way of life at Munoth.',
            subtitle: 'When dedicated efforts are put in the right direction growth is inevitable.'
        },
        {
            image: '/images/banner04.jpg',
            title: 'Growth is a way of life at Munoth.',
            subtitle: 'When dedicated efforts are put in the right direction growth is inevitable.'
        }
    ]

    // Height calculation function (from original jQuery code)
    useEffect(() => {
        const setHeight = () => {
            const vBMinHeight = 400
            const vBMaxHeight = 716
            const vHHeight = document.getElementById('header')?.offsetHeight || 0
            const vWHeight = window.innerHeight
            let vBHeight = vWHeight - vHHeight

            if (vBHeight > vBMaxHeight) vBHeight = vBMaxHeight
            if (vBHeight < vBMinHeight) vBHeight = vBMinHeight

            setBannerHeight(vBHeight)
        }

        setHeight()
        window.addEventListener('resize', setHeight)

        return () => window.removeEventListener('resize', setHeight)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        const target = document.getElementById(targetId)
        if (target) {
            const headerHeight = document.getElementById('header')?.offsetHeight || 0
            window.scrollTo({
                top: target.offsetTop - headerHeight,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="banner">
            <Slider {...sliderSettings} className="slides">
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div style={{ position: 'relative', height: `${bannerHeight}px` }}>
                            <img
                                src={slide.image}
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="title animated fadeInUp">
                                <h2>{slide.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: slide.subtitle.replace(' <br> ', '<br>') }} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <a href="/" className="logo">
                <img src="/images/logo.png" alt="Munoth Capital" />
            </a>

            <a
                href="#about-us"
                className="down-arrow"
                onClick={(e) => handleNavClick(e, 'about-us')}
            >
                <img src="/images/down-arrow.png" alt="" />
            </a>
        </section>
    )
}

export default Banner
