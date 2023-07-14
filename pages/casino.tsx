import Layout from "components/Layout";
import ServerSideTranslations from "services/ServerSideTranslations";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import LocalizationService from "services/LocalizationService";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const locale = LocalizationService.getLocaleFromContext(context);

  const messages = await ServerSideTranslations.getForDefault(locale, ["account"]);
  return {
    props: {
      messages,
      locale,
    },
  };
};

const CasinoPage: NextPage = props => {
  const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t("header:Casino")}</h1>
      <div>{t("account:Active bonuses")}</div>
    </Layout>
  );
};

export default CasinoPage;
