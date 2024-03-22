export class AuthTokenError extends Error{
    constructor(){
        super("Errp with authentication token.")
    }
}