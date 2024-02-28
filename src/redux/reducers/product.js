const {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    LOAD_PRODUCT,
    FAIL_PRODUCT,
} = require("../constants/product");

const initialState = {
products: [],
product: {},
errors: [],
load: false,
};

const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PRODUCT:
            return { ...state, load: true};
        case ADD_PRODUCT:
            return { ...state, product: payload.product,  load: false};
        case UPDATE_PRODUCT:
            return { ...state, product: payload.product,  load: false};
        case DELETE_PRODUCT:
            return {  ...state, products: state.products.filter(product => product.id !== payload.productId), load: false };
        case FAIL_PRODUCT:
            return { ...state, errors: payload, load: false };
        case GET_ALL_PRODUCTS:
            return { ...state, products: payload.products, load: false };
        case GET_PRODUCT:
            return { ...state, product: payload.product, load: false };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        default:
            return state;
    }
};
export default productReducer;