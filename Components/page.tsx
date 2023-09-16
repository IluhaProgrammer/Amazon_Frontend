"use client"

import { NextPage } from "next"
import Catalog from "./ui/catalog/Catalog";
import { IProduct, TypePaginationProduct } from "../types/product.types";
import Layout from "./Layouts/layout";
import CatalogPagination from "./ui/catalog/CatalogPagination";

const HomePage: NextPage<TypePaginationProduct> = ({products, length}) => {
  return (
    <Layout>
      <CatalogPagination data={{products, length}} title="Freshed Products"/>
    </Layout>
  )
}

export default HomePage;