import React, { Component } from 'react';
import HeartButton from '../Components/HeartButton'
import UserInput from '../Components/UserInput'

class ArtistsContainer extends Component{

    state = {
        artists: [
            {
                id: 0,
                name: 'Drake',
                genre: 'Rap',
                intro: 'Aubrey Drake Graham is a Canadian rapper, singer, songwriter, record producer, actor, and entrepreneur. A prominent figure in popular music, Drake is widely credited for popularizing the Toronto sound to the music industry.',
                albums: [
                    {
                        id: 1,
                        name: 'Take Care',
                        artwork: 'https://www.udiscovermusic.com/wp-content/uploads/2018/11/Drake-Take-Care-Album-Cover-web-optimised-820.jpg',
                        songs: ['Over My Dead Body', 'Shot For Me', 'Headlines', 'Crew Love', 'Take Care', `Marvin's Room`],
                        releaseDate: '2011'
                    },
                    {
                        id: 2,
                        name: 'Nothing Was The Same',
                        artwork: 'https://www.udiscovermusic.com/wp-content/uploads/2018/09/Drake-Nothing-Was-The-Same-deluxe-album-cover-web-optimised-820.jpg',
                        songs: ['Tuscan Leather', 'Worst Behaviour', 'From Time', 'All Me', 'Pound Cake', 'Too Much'],
                        releaseDate: '2013'
                    }
                ]
            },
            {
                id: 3,
                name: 'Dvsn',
                genre: 'RnB',
                intro: 'Dvsn is a Canadian R&B duo, composed of singer Daniel Daley and producer Nineteen85. The duo is signed to OVO Sound.',
                albums: [
                    {
                        id: 4,
                        name: 'SEPT. 5TH',
                        artwork: 'https://images.genius.com/46d61946e850b973b8ca0f8d230fa2c9.999x999x1.jpg',
                        songs: ['Angela', 'The Line', 'Hallucinations', 'Another One', 'Too Deep', `Do It Well`],
                        releaseDate: '2016'
                    },
                    {
                        id: 5,
                        name: 'Morning After',
                        artwork: 'https://images.genius.com/ac336e320e1ecc42710721b5c473b0f1.1000x1000x1.jpg',
                        songs: ['Run Away', 'Morning After', 'Nuh Time / Tek Time', 'Body Smile', 'Coversations in a Diner', 'Claim'],
                        releaseDate: '2017'
                    }
                ]
            }
        ]
    };

    render() {
        return (
            <main>
                <h1 align="middle">My Favourite Artists</h1>
                
                <div id='artists'>{this.state.artists.map(artist => {
                    return (
                            <div key={artist.id}>
                                <h2 className='artistName'>{artist.name}</h2>
                                <h4 className='artistGenre'>{artist.genre}</h4>
                                <p className='artistIntro'>{artist.intro}</p>
                                <HeartButton />
                            </div>
                    )
                })}</div>

                <UserInput />

            </main>
        )
    }
}

export default ArtistsContainer;