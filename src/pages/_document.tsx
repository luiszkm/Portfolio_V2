import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='PT-BR' className='dark'>
        <Head >

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" />

          <meta name="author" content="Luis Soares" />
          <meta name="description" content="Desenvolvedor web com 1 ano de experiência no mercado, focado em typescript, javascript, react, node, sql, html e css"/>
          <meta name="keywords" content="sites, web, desenvolvimento, react, landing page,"/>
          <meta http-equiv="content-language" content="pt-br, en-US" />
          <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="copyright" content="© 2022 DevSoares" />
          <meta name="generator" content="Next, React" />
          <meta name="rating" content="general" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument