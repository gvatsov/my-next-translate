import { Card, Container, Typography, styled } from "@mui/material";
import Layout from "components/Layout";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import LocalizationService from "services/LocalizationService";
import ServerSideTranslations from "services/ServerSideTranslations";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const locale = LocalizationService.getLocaleFromContext(context);

  return {
    props: {
      locale,
      __lang: locale,
      __namespaces: await ServerSideTranslations.getForDefault(locale, ["promotions"]),
    },
  };
};

const promotions = [
  { id: 1, title: "Promotion 1", description: "Description 1" },
  { id: 2, title: "Promotion 2", description: "Description 2" },
  { id: 3, title: "Promotion 3", description: "Description 3" },
];

interface PageProps {
  locale: string;
}

const PromotionsPage: NextPage<PageProps> = ({ locale }) => {
  const { t } = useTranslation();

  return (
    <Layout locale={locale}>
      <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
        <PromoTitle>{t(`default:Betfinal Promotions`)}</PromoTitle>
        <PromoDesc>
          {t(
            "default:Don't miss out on our new casino promotions, including the Cashback deals, Anytime bonus and much more!"
          )}
        </PromoDesc>

        <PromoGrid>
          {promotions.map(promotion => (
            <Card key={promotion.id}>{promotion.title}</Card>
          ))}
        </PromoGrid>
      </Container>
    </Layout>
  );
};

export default PromotionsPage;

export const PromoTitle = styled("h1")(() => ({
  margin: "0",
  padding: "3rem 0 1rem 0",
  fontSize: "3rem",
  textAlign: "center",
  lineHeight: "1",
}));
export const PromoDesc = styled(Typography)(() => ({
  margin: "0",
  padding: "0 0 1rem 0",
  fontSize: "1rem",
  textAlign: "center",
}));
export const PromoGrid = styled("div")(({ theme }) => ({
  margin: "1rem auto 3rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 320px)",
  justifyContent: "center",
  gap: "1rem",
  [theme.breakpoints.up("sm")]: {
    gap: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    gap: "3rem",
  },
}));
