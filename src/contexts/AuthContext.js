/* ========== EXTERNAL MODULES ========== */
import { createContext, useContext, useState } from 'react';

/* ========== INTERNAL MODULES ========== */

/* ========== CONTEXTS ========== */
const AuthContext = createContext();


/* ========== EXPORTS ========== */
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {

  /* --- STATE HOOKS --- */
  const [ currentUser, setCurrentUser ] = useState();

  /* --- LIFECYCLE METHODS --- */

  /* --- EVENT HANDLERS --- */
  const logIn = email => {
    return setCurrentUser(email);
  }

  const logOut = () => {
    return setCurrentUser('');
  }

  /* --- RENDERER --- */
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logIn,
        logOut,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}