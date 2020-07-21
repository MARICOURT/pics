import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans:0 };

        this.imageRef = React.createRef();
    }

    /**L'objectif et de récupérer la hauteur de l'image, seulement on ne peut pas récupérer cette information directement en appelant 'this.imageRef.current.clientHeight'
     * On passe donc par un eventListener avec une fonction callback
     */
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10 );

        this.setState({spans})
    }

    render() {

        const {description, urls} = this.props.image;

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard