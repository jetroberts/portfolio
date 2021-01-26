import React from "react";

export default class ImageChange extends React.Component {
    constructor(props) {
        super(props);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            currentImage: 0,
            previousImage: 1,
            images: [
                {
                    img: '/coding.png'
                },
                {
                    img: '/engineering.jpg'
                },
                {
                    img: '/Laravel.png'
                }
            ]
        }
    }

    changeImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                previousImage: this.state.currentImage,
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                previousImage: this.state.currentImage,
                currentImage: 0
            });
        }
        return this.currentImage;
    }

    componentDidMount() {
        setInterval(this.changeImage, 5000);
    }


    render() {
        return (
            <div className='container relative justify-center self-start w-1/2 lg:max-h-96'>
                <img id='frontImage' className='absolute top-0 left-0 z-10 w-1/2 object-cover rounded-3xl p-2 transition-all duration-500' src={this.state.images[this.state.currentImage].img}
                     alt='frontPage'/>
            </div>
        );
    }
}
