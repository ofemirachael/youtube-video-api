import React from "react";


class SearchBar extends React.Component {
    state = { term: ''};

    OnInputChange = event =>{
        this.setState({term: event.target.value})
    };

    onFormSubmit = event =>{
        event.preventDefault();
        //callback from parent component
        this.props.onFormSubmit(this.state.term)
    };

    render(){
        return (
            <div className="search-bar ui segment">
                    <form onSubmit={ this.onFormSubmit } className="ui form">
                        <div className="field">
                            <label>Video search</label>
                            <input 
                                type="text" 
                                value={this.state.term}
                                onChange={this.OnInputChange}
                            />
                        </div>
                    </form>
            </div>
        );
    }
}

export default SearchBar;