import { useRouter } from "next/router";

const RTL_LANGUAGES = ["ar", "ku"];

const useLanguage = () => {
  const router = useRouter();
  const language = router.locale ?? router.defaultLocale ?? "en";
  const isRtl = RTL_LANGUAGES.indexOf(language) > -1;

  console.log("useLanguage", { language, isRtl });

  return { language, isRtl };
};

export default useLanguage;
