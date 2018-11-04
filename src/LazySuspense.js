import React, { Component, lazy, Suspense } from 'react';
// import Album from './Album';
const Album = lazy(() => import('./Album.js'));
console.log(Album);

export default class LazySuspense extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: {}
        };
    }

    componentDidMount() {
        fetch('https://itunes.apple.com/in/rss/topalbums/limit=100/json')
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    list: resJson
                });
            });
    }

    render() {
		var albums = [];
		const loadingImage = <div className="loadingImage"><img alt="loading" src="https://www.highpointatl.church/assets/loaders/colorful.gif" />This is suspense fallback</div>;
		try {
			albums = this.state.list.feed.entry.map((album, index) => {
				return <Suspense fallback={loadingImage} key={index}>
					<Album
						name={album.title.label}
						albumArt={album["im:image"][2].label}
						link={album.id.label}
						id={index}
					/>
				</Suspense>
			});
		}
		catch(err) {
			console.log("undefined caught");
		}
        return (
            <>
				<div className="headerAlbums">
					List of Top 100 Albums in iTunes
				</div>
                <div>
					{albums}
                </div>
            </>
        );
    }
}