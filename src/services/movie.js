export class MovieService {
    _getMovies() {
        return JSON.parse(localStorage.getItem('movies')) || [];
    }

    _saveMovies(movies) {
        localStorage.setItem('movies', JSON.stringify(movies));
    }

    /**
     * Récupère tous les films stockés dans le localStorage.
     *
     * @returns {Promise<Array>} Une promesse qui résout avec le tableau des films.
     */
    getAllMovies() {
        const movies = this._getMovies();
        return Promise.resolve(movies);
    }

    /**
     * Récupère un film par son identifiant.
     *
     * @param {string} id - L'identifiant unique du film.
     * @returns {Promise<Object>} Une promesse qui résout avec l'objet film s'il est trouvé, ou rejette une erreur si non trouvé.
     */
    getMovieById(id) {
        return new Promise((resolve, reject) => {
            const movies = this._getMovies();
            const movie = movies.find(movie => movie.id === id);
            if (movie) {
                resolve(movie);
            } else {
                reject(new Error('Movie not found'));
            }
        });
    }

    /**
     * Crée un nouveau film et l'ajoute au localStorage.
     *
     * @param {Object} movieData - Un objet contenant les données du film (title, description, releaseDate, imageUrl).
     * @returns {Promise<Object>} Une promesse qui résout avec le film créé.
     */
    createMovie(movieData) {
        return new Promise((resolve, reject) => {
            try {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (!currentUser) {
                    throw new Error('User must be authenticated');
                }

                const movie = {
                    id: Date.now().toString(),
                    ...movieData,
                    userId: currentUser.id
                };

                const movies = this._getMovies();
                movies.push(movie);
                this._saveMovies(movies);
                resolve(movie);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Met à jour un film existant dans le localStorage.
     *
     * @param {string} id - L'identifiant du film à mettre à jour.
     * @param {Object} movieData - Un objet contenant les nouvelles données du film.
     * @returns {Promise<Object>} Une promesse qui résout avec le film mis à jour.
     */
    updateMovie(id, movieData) {
        return new Promise((resolve, reject) => {
            try {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                const movies = this._getMovies();
                const movieIndex = movies.findIndex(movie => movie.id === id);

                if (movieIndex === -1) {
                    throw new Error('Movie not found');
                }

                if (movies[movieIndex].userId !== currentUser?.id) {
                    throw new Error('Unauthorized');
                }

                movies[movieIndex] = {
                    ...movies[movieIndex],
                    ...movieData
                };

                this._saveMovies(movies);
                resolve(movies[movieIndex]);
            } catch (error) {
                reject(error);
            }
        });
    }

    /**
     * Supprime un film du localStorage.
     *
     * @param {string} id - L'identifiant du film à supprimer.
     * @returns {Promise<void>} Une promesse qui se résout une fois le film supprimé.
     */
    deleteMovie(id) {
        return new Promise((resolve, reject) => {
            try {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                const movies = this._getMovies();
                const movieIndex = movies.findIndex(movie => movie.id === id);

                if (movieIndex === -1) {
                    throw new Error('Movie not found');
                }

                if (movies[movieIndex].userId !== currentUser?.id) {
                    throw new Error('Unauthorized');
                }

                movies.splice(movieIndex, 1);
                this._saveMovies(movies);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
}
