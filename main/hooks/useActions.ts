import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { basketActions } from "@/app/globalRedux/feature/basket/basket.slice";
import { productListActions } from "@/app/globalRedux/feature/productList/productList.slice";
import { googleMapActions } from "@/app/globalRedux/feature/checkout/googleMap.slice";

const rootActions = {
  ...basketActions,
  ...productListActions,
  ...googleMapActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
