import { BehaviorSubject } from "rxjs";

// Anything exported from this file is importable by other in-browser modules.

export const auth$ = new BehaviorSubject({
    username: "",
    authenticated: false
  });

export function authenticate(username) {
    auth$.next({username: username, authenticated: true});
}

export function unauthenticate() {
    auth$.next({username: null, authenticated: false});
}

export function getUser() {
    return auth$.value;
}
