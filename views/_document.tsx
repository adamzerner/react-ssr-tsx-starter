import { Document, Head, Main } from "@react-ssr/express";

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Calibration Training</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
}
