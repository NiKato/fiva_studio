export const getLocalizedUrl = (path: any, language: any) => {
    const isRoot = path === '/' || path === '';

    if (language !== 'en') {
        return `/${path}?${language}`;
      }
      return `/${path}`;
  };