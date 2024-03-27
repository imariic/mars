const authKey = "auth";

export const login = () => localStorage.setItem(authKey, "true");
export const logout = () => localStorage.removeItem(authKey);
export const isLoggedIn = localStorage.getItem(authKey) === "true";
