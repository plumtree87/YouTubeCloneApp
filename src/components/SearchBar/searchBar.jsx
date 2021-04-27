import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <center>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Video Search</label>
                        <input onChange={this.handleChange} name='search' type="text"/>
                        <input type='submit' value='search'/>
                    </div>
                </form>
            </div>
            </center>
        )
    }
}
export default Searchbar;