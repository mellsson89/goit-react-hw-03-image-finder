import React,{Component} from "react";
import fetchGallery from './services/gallery-api'
import Searchbar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from './components/Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import style from './styles/app.module.scss'


class App extends Component {

    state = {
        imgGallery: [],
        searchQuery: '',
        page: 1,
        largeImageURL: '',
        isLoading: false,
        activeButton: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }
    }

    onChangeQuery = (query) => {
        this.setState({
            searchQuery: query,
            page: 1,
            imgGallery: [],
        })
    }

    onOpenImgGallery = (id) => {
        const {largeImageURL}=this.state.imgGallery.find(img => img.id === id);

        this.setState({
          largeImageURL
        })
    }

    onCloseImgGallery = () => {
        this.setState({
            largeImageURL: ''
        })
    }


    fetchImages = () => {
        const {searchQuery, page} = this.state;

        this.setState({
            isLoading: true,
            activeButton: true
        })

const options={searchQuery,page};

        fetchGallery(options)
            .then((hits) => this.setState(prevState => ({
                    imgGallery: [...prevState.imgGallery, ...hits],
                    page: prevState.page + 1,
                    activeButton: false

                })
            )).then(()=> {
                if(page >1){
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    })
                }
        }).finally(() => this.setState({isLoading: false}))

    }

    render() {
        const {imgGallery, largeImageURL, searchQuery, isLoading, activeButton} = this.state;
        return (
            <>
                <Searchbar onClick={this.onChangeQuery}/>
                <ImageGallery imgGallery={imgGallery} onClickImg={this.onOpenImgGallery}/>
                {isLoading &&
                <Loader type="Oval" color="#00BFFF" height={30} width={30} timeout={3000} className={style.spinner}/>}
                {imgGallery.length > 0 && !isLoading &&
                <Button text="Load mode" onClick={this.fetchImages} status={activeButton}/>}
                {largeImageURL && <Modal onClose={this.onCloseImgGallery} imgLarge={largeImageURL} altImg={searchQuery}/>}

            </>
        )
    }
}

export default App;
