import { Token } from "./utils/token"

export const useAuth = () => {
  const login = (key: string) => {
    Token.setLoggedInIdentifier(key);
  }

  const logout = () => {
    Token.removeLoggedInIdentifier();
  }

  const isLoggin = (token: string) => {
    Token.getLoggedInIdentifier() === `${token}`
  }

  return { login, logout , isLoggin }
}
export type AuthContext = ReturnType<typeof useAuth>;