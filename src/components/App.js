import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };
    /** 'async onSearchSubmit(term){ ... await }' 
     * Cette méthode marche également mais lorsqu'on change le state avec 'this.setState({ images: response.data.results});' on obtient l'erreur suivant :
     * 'this.setState is not a function'
     * car le 'this' fait référence au props onSubmit dans '<SearchBar onSubmit={this.onSearchSubmit}/>' */
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App;