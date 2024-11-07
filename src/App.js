import React from 'react';
import './App.css'; // Импорт CSS для стилизации компонентов

const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <MainContent />
            <Player />
        </div>
    );
};

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="playlists">
                <h2>Мои Плейлисты</h2>
                <button className="create-playlist-btn">Создать плейлист</button>
            </div>
        </div>
    );
};

const MainContent = () => {
    return (
        <div className="main-content">
            <SearchBar />
            <Categories />
            <MoodGenres />
        </div>
    );
};

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Найти исполнителя" />
        </div>
    );
};

const Categories = () => {
    const albums = [
        { title: 'Hit Em Up', artist: 'Майби Бэйби', year: '2024' },
        { title: 'Sex O-Bomb', artist: 'LOLWIZ', year: '2024' },
        { title: 'LOVESONGS', artist: 'Дора', year: '2024' },
        { title: 'светлая сторона', artist: 'mzlf', year: '2024' },
        { title: 'Valorant', artist: 'lxster, quandxo, рутно', year: '2024' },
        // Добавьте остальные альбомы, как в примере выше
    ];

    return (
        <div className="categories">
            {albums.map((album, index) => (
                <div key={index} className="album">
                    <img src={`path/to/${album.title}.jpg`} alt={album.title} />
                    <div className="album-info">
                        <h3>{album.title}</h3>
                        <p>{album.artist} - {album.year}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const MoodGenres = () => {
    const genres = [
        'Русский хип-хоп',
        'Поп',
        'Танцы и электроника',
        'Рок',
        'Хип-хоп',
        'Фолк и акустика',
        // Добавьте остальные жанры
    ];

    return (
        <div className="mood-genres">
            {genres.map((genre, index) => (
                <button key={index} className="genre-button">{genre}</button>
            ))}
        </div>
    );
};

const Player = () => {
    return (
        <div className="player">
            <div className="player-controls">
                <button className="play-btn">Play</button>
                <div className="track-info">
                    <p>Sex O-Bomb - LOLWIZ</p>
                </div>
            </div>
        </div>
    );
};

export default App;
