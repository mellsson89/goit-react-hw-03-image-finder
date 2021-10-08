import React,{Component} from "react";
import style from './styles/Searchbar.module.scss'


class Searchbar extends Component {

    state= {
       query:''
    }

    handleChangeQuery =(e)=> {
        this.setState({
            query:e.currentTarget.value

        })
    }

    handleSubmitForm =(e) => {
        e.preventDefault();
        this.props.onClick(this.state.query);
        this.setState({
            query:''
        })
    }


    render() {
        const {query}=this.state;
        return (
            <header className={style.SearchBar}>
                <form className={style.SearchForm} onSubmit={this.handleSubmitForm}>
                    <button type="submit" className={style.SearchFormButton}>
                        <span className={style.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={style.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={this.handleChangeQuery}
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;