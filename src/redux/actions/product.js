import axios from "axios";
import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    LOAD_PRODUCT,
    FAIL_PRODUCT,
} from "../constants/product";

export  const addProd = (product) => async (dispatch) => {
    try {
        let result = await axios.post('https://localhost/8080/api/v1/prod/add', product);
        dispatch({ type: ADD_PRODUCT, payload: result.data});

    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors});
    }
};


export const updateProd = (id, product) => async (dispatch) => {
    try {
        let result = await axios.put(`https://localhost:8080/api/v1/prod/update/${id}`, product);
        dispatch({ type: UPDATE_PRODUCT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
    }
};


export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
      const allProducts = await axios.get(`https://localhost:8080/api/v1/prod/get`);
      dispatch({ type: GET_ALL_PRODUCTS, payload: allProducts.data });
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
    }
  };
  
  export const getProductByID = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUCT });
    try {
      const result = await axios.get(`https://localhost:8080/api/v1/prod/get/${id}`);
      dispatch({ type: GET_PRODUCT, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
    }
  };

  export const deleteProduct = (id) => async (dispatch) => {
    try {
      await axios.delete(`https://localhost:8080/api/v1/prod/delete/${id}`);
      dispatch(DELETE_PRODUCT);
    } catch (error) {
      dispatch({ type: FAIL_PRODUCT, payload: error.response.data.errors });
    }
  };


