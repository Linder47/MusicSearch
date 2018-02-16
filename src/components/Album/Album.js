import React, {Component} from 'react';
import './Album.css';
import { Thumbnail } from 'react-bootstrap';

class Album extends Component {
    onChoseAlbum = (album) => {
        sessionStorage.setItem('albumSearch', JSON.stringify(album));
    }

    render() {
        return (
            <div className='album'>
                <Thumbnail
                    src={this.props.image}
                    alt={this.props.id}
                    href={'/MusicSearch/album/' + this.props.name}
                    onClick={() => { this.onChoseAlbum(this.props.album) } }/>
            </div>
        )
    }
}



    export default Album;