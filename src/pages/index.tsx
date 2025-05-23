import React from "react";
import Head from "next/head";
import NavBar from "@/components/layout/NavBar";
// import { getServerSession } from "next-auth";
// import { GetServerSideProps } from "next";
import LandingPage from "@/containers/landingPage";
// import AuthConfig from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanceFlow</title>
        <meta name="description" content="FinanceFlow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar>
        <LandingPage />
      </NavBar>
    </>
  );
}

// const redirectToSignIn = (context) => {
//   const { code } = context.query;
//   if (code) {
//     const redirectUrl = `/api/auth/callback/Safaricom?code=${code}`;

//     context.res.writeHead(302, {
//       Location: redirectUrl,
//     });
//     context.res.end();
//   }
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   redirectToSignIn(context);

//   const authOptions = { ...AuthConfig };
//   const session = await getServerSession(context.req, context.res, authOptions);
//   if (session) {
//     return {
//       redirect: {
//         destination: "/dashboard",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
