// VUE JS
var app = new Vue ({
    el: '#root',
    data: {
        inputBar: '',
        movieArray: []
    },
    methods: {
        // Richiamo l'api e pusho nell'array
        inputSearchResult() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=8a8133740665dc34053c39e30c913e2d', {
                params: {
                    language: 'it-IT',
                    query: this.inputBar,
                    page: 1
                }
            })
            .then((response) => {
                const result = response.data;
                this.movieArray = result.results;
            });
        }
    },
    mounted() {
        
    }
});