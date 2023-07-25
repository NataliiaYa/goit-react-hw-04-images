import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'


class Searchbar extends Component {
    state = {
        query: '',
    }

    static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };

handleInput = evt => {
    this.setState({
        query: evt.currentTarget.value.toLowerCase().trim(),
    });
    }
    
    handleOnSubmit = e => {
        e.preventDefault();
        const { query } = this.state;
        this.props.onSubmit(query)
            this.setState({
        query: '',
    });
    }

    render() {
        const { query } = this.state;
    return (
        <header className={css.searchbar}>
            <form className={css.form} onSubmit={this.handleOnSubmit}>
                <button type="submit" className="button">
                    <span className={css["button-label"]}>Search</span>
                </button>

                <input onChange={this.handleInput}
                    value={query}
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
    }

}
export default Searchbar;