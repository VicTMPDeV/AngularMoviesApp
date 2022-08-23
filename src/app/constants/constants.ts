export class Constants {

    //ASSETS
    public static NO_IMAGE: string = 'assets/images/no_image_available.jpg';
    public static LOGO_IMAGE: string = 'assets/images/logoVictor.png';
    public static LOGO_IMAGE_FILLED: string = 'assets/images/logoVictorFilled.png';
    
    //DIALOGS
    public static MESSAGE_BUTTON_LABEL: string  = 'dialogs.generic.ok';
    public static CREATED_MOVIE_MESSAGE: string = 'dialogs.movies.created';
    public static UPDATED_MOVIE_MESSAGE: string = 'dialogs.movies.updated';
    public static DELETED_MOVIE_MESSAGE: string = 'dialogs.movies.deleted';
    public static MESSAGE_TITLE: string = 'dialogs.movies.title';
    public static MESSAGE_QUESTION: string = 'dialogs.generic.question';
    public static MESSAGE_RESPONSE_YES: string = 'dialogs.generic.yes';
    public static MESSAGE_RESPONSE_NO: string = 'dialogs.generic.no';
    public static DIALOG_WIDTH: string = '300px';
    public static MESSAGE_DURATION: number = 250000;

    //DETAIL-MOVIE
    public static MOVIEDETAIL_RATING_LABEL: string = 'pages.movies.detail.labels.rating';
    public static MOVIEDETAIL_DURATION_LABEL: string = 'pages.movies.detail.labels.duration';
    public static MOVIEDETAIL_ACTORS_LABEL: string = 'pages.movies.detail.labels.actors';
    public static MOVIEDETAIL_COMPANY_LABEL: string = 'pages.movies.detail.labels.company';
    public static MOVIEDETAIL_GENRES_LABEL: string = 'pages.movies.detail.labels.genres';

    //ERRORS
    public static ERROR: string = 'ERROR: ';

    //FORM-LABELS
    public static MOVIE_TITLE_LABEL: string = 'pages.movies.add.form.title';
    public static MOVIE_POSTER_LABEL: string = 'pages.movies.add.form.imageUrl';
    public static MOVIE_GENRE_LABEL: string = 'pages.movies.add.form.genres';
    public static MOVIE_ACTORS_LABEL: string = 'pages.movies.add.form.actors';
    public static MOVIE_COMPANY_LABEL: string = 'pages.movies.add.form.company';
    public static MOVIE_YEAR_LABEL: string = 'pages.movies.add.form.year';
    public static MOVIE_DURATION_LABEL: string = 'pages.movies.add.form.duration';
    public static MOVIE_RATING_LABEL: string = 'pages.movies.add.form.rating';

    //HEADER
    public static MOVIE_LIST: string = 'layout.header.movies-list-label';
    public static ADD_MOVIE: string = 'layout.header.movies-add-label';
    public static EDIT_MOVIE: string = 'layout.header.movies-edit-label';
    public static ACTOR_LIST: string = 'layout.header.actors-list-label';
    public static COMPANY_LIST: string = 'layout.header.companies-list-label';
    
    //LAYOUT
    public static MENU_LABEL: string = 'layout.sidenav.menu-label';
    public static MOVIES_LABEL: string = 'layout.sidenav.movies-label';
    public static ACTORS_LABEL: string = 'layout.sidenav.actors-label';
    public static COMPANIES_LABEL: string = 'layout.sidenav.companies-label';

    //NOT-FOUND
    public static NOTFOUND_TITLE: string = "pages.notfound.title";
    public static NOTFOUND_BUTTON_LABEL: string = "pages.notfound.button-label";

    //NUMBERS
    public static ZERO: number = 0;
    public static ONE: number = 1;
    public static FIVE: number = 5;
    public static TWENTY: number = 20;

    //ROUTES
    public static ROUTE_MOVIES: string = '/movies';
    public static ROUTE_MOVIES_ADD: string = '/movies/add';
    public static ROUTE_NOT_FOUND: string = 'not-found';
    public static ROUTE_PARAM_ID: string = 'id';

    //SERVICES
    public static EMPTY_VALUE: string = '';

}