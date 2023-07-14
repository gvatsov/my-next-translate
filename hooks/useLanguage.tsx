const RTL_LANGUAGES = ["ar", "ku"];

const useLanguage = (locale: string) => {
  const isRtl = RTL_LANGUAGES.indexOf(locale) > -1;
  return { isRtl };
};

export default useLanguage;
