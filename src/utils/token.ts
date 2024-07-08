export class Token {
  public static readonly LOGGED_IN_IDENTIFIER = 'logged_in'

  public static getLoggedInIdentifier = ():string | null =>
    localStorage.getItem(this.LOGGED_IN_IDENTIFIER)

  public static setLoggedInIdentifier = (key: string):void => {
    localStorage.setItem(this.LOGGED_IN_IDENTIFIER, key)
  }

  public static removeLoggedInIdentifier = ():void => {
    localStorage.removeItem(this.LOGGED_IN_IDENTIFIER)
  }
}