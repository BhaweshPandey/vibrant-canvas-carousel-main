
import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Define state types
interface GlobalState {
  isLoggedIn: boolean;
  user: {
    name: string | null;
    email: string | null;
  };
  favorites: number[];
  cart: {
    hotels: number[];
    cars: number[];
    activities: number[];
  };
}

// Define action types
type Action = 
  | { type: 'LOGIN', payload: { name: string, email: string } }
  | { type: 'LOGOUT' }
  | { type: 'ADD_TO_FAVORITES', payload: number }
  | { type: 'REMOVE_FROM_FAVORITES', payload: number }
  | { type: 'ADD_TO_CART', payload: { type: 'hotels' | 'cars' | 'activities', id: number } }
  | { type: 'REMOVE_FROM_CART', payload: { type: 'hotels' | 'cars' | 'activities', id: number } }
  | { type: 'CLEAR_CART' };

// Initial state
const initialState: GlobalState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
  },
  favorites: [],
  cart: {
    hotels: [],
    cars: [],
    activities: [],
  }
};

// Reducer function
const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: {
          name: action.payload.name,
          email: action.payload.email
        }
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: {
          name: null,
          email: null
        }
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.type]: [...state.cart[action.payload.type], action.payload.id]
        }
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.type]: state.cart[action.payload.type].filter(id => id !== action.payload.id)
        }
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: {
          hotels: [],
          cars: [],
          activities: []
        }
      };
    default:
      return state;
  }
};

// Create context
const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

// Provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
