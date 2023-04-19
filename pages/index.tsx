import { Box, Flex, H1, H4, Panel } from "@bigcommerce/big-design";
import styled from "styled-components";
import ErrorMessage from "../components/error";
import Loading from "../components/loading";
import { useProducts } from "../lib/hooks";
import Button from "./Button";

const Index = () => {
  //   const { error, isLoading, summary } = useProducts();

  //   if (isLoading) return <Loading />;
  //   if (error) return <ErrorMessage error={error} />;

  return <Button />;
};

export default Index;
