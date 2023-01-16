const initialState = {
    naves: [],
   
  };
  
  function navesReducer(state = initialState, action) {
    switch (action.type) {
      case "TRAER_NAVES": {
        return {
          ...state,
          naves: action.payload,
        };
      }
  
      case "BUSCAR_POR_NOMBRE": {
        return {
          ...state,
          copianaves:
            action.payload === "No existen naves con ese nombre"
              ? (alert("No existen naves con ese nombre"),
                [...state.naves])
              : action.payload,
        };
      }
  
      default:
        return {
          ...state,
        };
    }
  }
  
  export default navesReducer;
  