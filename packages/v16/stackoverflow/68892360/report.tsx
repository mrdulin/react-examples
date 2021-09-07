import { lazy } from "react";
import { pageLoader } from "./utils";

const Shop = lazy(pageLoader(() => import("./shop")));
const Item = lazy(pageLoader(() => import("./item")));
