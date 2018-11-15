import { AuthenticationState } from "./authentication.reducer";

export interface ApplicationState {
  authentication: AuthenticationState
}

export const getAuthentication = (state: ApplicationState) => state.authentication;
