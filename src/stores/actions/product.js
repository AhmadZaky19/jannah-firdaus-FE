import axios from "../../utils/axios";

export const getDataProduct = (search, sort, order, page, limit) => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(
      `product/?search=${search}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`
    )
  };
};

export const postProduct = (data) => {
  return {
    type: "POST_PRODUCT",
    payload: axios.post("product/", data)
  };
};

export const updateProduct = (id, data) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axios.patch(`product/${id}`, data)
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios.delete(`product/${id}`)
  };
};
