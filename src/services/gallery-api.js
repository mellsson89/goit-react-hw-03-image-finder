import axios from "axios";


export default function fetchGallery ({searchQuery='',page=1})  {
    return (
        axios.get(`https://pixabay.com/api/?q=${searchQuery}
        &page=${page}&key=21751177-a266d6ba191f1accff72cdd2b&image_type=photo&orientation=horizontal&per_page=12`)
    ).then(({data: {hits}}) => hits)
}
