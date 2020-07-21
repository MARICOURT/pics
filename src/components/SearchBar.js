import React from 'react';

class SearchBar extends React.Component { 

    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        /** Notre objet 'props' contient une fonction 'onSubmit' qui va récupérer la valeur soumise par l'utilisateur
         * Les données passent de l'enfant au parent */ 
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                {/* onSubmit={event => this.onFormSubmit(event)} */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                       <input 
                        type="text" 
                        value={this.state.term}
                        // On récupére la valeur en dehors de l'évenement à l'aide du 'state'
                        onChange={(e) => this.setState({ term: e.target.value})}
                        /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;