export const getLocalizedUrl = (path: any, language: any) => {
    if (language !== 'en') {
        return `/${path}?lang=${language}`;
      }
      return `/${path}`;
  };