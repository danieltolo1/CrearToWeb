import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  console.log("LOCALE CARGADO:", locale);

  const messages =
    (await import(`../../messages/${locale}.json`)).default;

  console.log("TITLE:", messages.Hero?.title);

  return {
    locale,
    messages
  };
});