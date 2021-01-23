import React from "react";

export default class ImageChange extends React.Component {
    constructor(props) {
        super(props);
        this.changeImage = this.changeImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                {
                    img: '/coding.png'
                },
                {
                    img: '/engineering.jpg'
                }
            ]
        }
    }

    changeImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState( {
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
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
            <div className='container flex justify-center self-center w-1/2 lg:max-h-96 '>
                <img className='object-cover rounded-3xl p-2' src={this.state.images[this.state.currentImage].img} alt='frontPage'/>
            </div>
        );
    }
}
