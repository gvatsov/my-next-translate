import Layout from "components/Layout";
import ServerSideTranslations from "services/ServerSideTranslations";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import LocalizationService from "services/LocalizationService";
import useTranslation from "next-translate/useTranslation";

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

const HomePage: NextPage<PageProps> = ({ locale }) => {
  const { t } = useTranslation();

  return (
    <Layout locale={locale}>
      <h1>{t("header:Sports")}</h1>
      {t("account:Account Information")}
    </Layout>
  );
};

export default HomePage;
