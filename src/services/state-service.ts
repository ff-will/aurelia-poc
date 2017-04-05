/* Singleton class to hold the user data over different views. I assume it would make sense if the data would be saved to the local store to keep it arround for when the user leaves the page and then returns. */
export class StateService {
    userData: Object = {};
}