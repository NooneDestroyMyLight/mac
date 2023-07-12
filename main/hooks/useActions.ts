import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { basketActions } from "@/app/globalRedux/feature/basket/basket.slice";
import { productListActions } from "@/app/globalRedux/feature/productList/productList.slice";

const rootActions = {
  ...basketActions,
  ...productListActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
