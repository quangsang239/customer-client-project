import React from "react";
import ProductDetail from "@/components/layout/product-detail";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

type Props = {};

const ProductDetailPage = (props: Props) => {
  return (
    <>
      <Header />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
