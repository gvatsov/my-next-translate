import Layout from "components/Layout";
import ServerSideTranslations from "services/ServerSideTranslations";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import LocalizationService from "services/LocalizationService";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const locale = LocalizationService.getLocaleFromContext(context);

  return {
    props: {
      locale,
      __lang: locale,
      __namespaces: await ServerSideTranslations.getForDefault(locale, ["account"]),
    },
  };
};

interface PageProps {
  locale: string;
}

const CasinoPage: NextPage<PageProps> = ({ locale }) => {
  const { t } = useTranslation();

  return (
    <Layout locale={locale}>
      <h1>{t("header:Casino")}</h1>
      <div>{t("account:Active bonuses")}</div>
    </Layout>
  );
};

export default CasinoPage;
