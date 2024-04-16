export class AuthModel {
  token: string;
  refreshBefore: string;
  refreshToken: string;

  constructor(token: string, refreshBefore: string, refreshToken: string) {
    this.token = token;
    this.refreshBefore = refreshBefore;
    this.refreshToken = refreshToken;
  }
}
