// gatsby-node.js

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const languages = ['en', 'sr'];

  const defaultLanguage = 'en';

  languages.forEach(lang => {
    const path = lang === defaultLanguage ? '/' : `/${lang}/`;

    createPage({
      path,
      component: require.resolve('./src/pages/index.tsx'),
      context: { language: lang },
    });
  });
};
