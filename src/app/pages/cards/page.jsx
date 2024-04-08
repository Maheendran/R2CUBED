"use client";
import React from 'react';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0 
        };
    }

    handleClick = (index) => {
        this.setState({ activeIndex: index });
    }

    render() {
        const images = [
            { src: '/Image/1.png', alt: '1', name: 'Automotive', role: 'web3 Developer' },
            { src: '/Image/2.png', alt: '2', name: 'Warehousing operations', role: 'wordpress Developer' },
            { src: '/Image/3.png', alt: '3', name: 'Oil and Gas', role: 'java Developer' },
            { src: '/Image/4.png', alt: '4', name: 'Food & Beverage', role: 'web Developer' },
            { src: '/Image/5.png', alt: '5', name: 'Industrial Power Plants', role: 'php Developer' },
            { src: '/Image/6.png', alt: '6', name: 'Building management', role: 'seo Developer' },
            { src: '/Image/7.png', alt: '7', name: 'military applications.', role: 'sql Developer' }
        ];

        return (
        
            <div className="slider-container common">
                <div className="slider-images">
                    {images.map((imageaa, index) => (
                        <div key={index} 
                        className={`slider-img ${index === this.state.activeIndex - 1 ? 'active' : ''}`}
                         onClick={() => this.handleClick(index + 1)}>
                            <img src={imageaa.src} alt={imageaa.alt} />
                            <h1>{imageaa.name}</h1>
                            <div className="details">
                                <h2>{imageaa.name}</h2>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ImageSlider;