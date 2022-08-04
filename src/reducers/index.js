import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constants";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Kishan Shrivastava",
      email: "kishan.svt0108@gmail.com",
      phone: "7033656018",
    },
    {
      id: 2,
      name: "Amrit Singh",
      email: "26amritsingh@gmail.com",
      phone: "9472028902",
    },
    {
      id: 3,
      name: "Bajrang Kumar",
      email: "bajrang.kumar@consultant.bedbath.com",
      phone: "9123369269",
    },
    {
      id: 4,
      name: "Laxman Nadimetla",
      email: "laxman.nadimetla@consultant.bedbath.com",
      phone: "7304632777",
    },
    {
      id: 5,
      name: "Sanjay Singh",
      email: "sanjay.kumar@consultant.bedbath.com",
      phone: "9953664318",
    }
  ],
  contact: {},
  selectedContacts: [],
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id === action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    default:
      return state;
  }
};
