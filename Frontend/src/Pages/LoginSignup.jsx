import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./Home";
import App from "../App";
import StarterPage from "./StarterPage";

const LoginSignup = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <StarterPage />;
  }

  return (
    <>
      {isAuthenticated ? (
        <App />
      ) : (
        <section className="bg-gray-100 text-gray-800">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              Welcome To
              <span className="text-violet-600"> SkyDine</span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
            Experience the convenience of in-flight dining at your fingertips. Browse our selection of delicious meals and refreshing drinks, and place your order with just a few taps. Enjoy a seamless and delightful dining experience during your flight.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                onClick={loginWithRedirect}
                className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50"
              >
                Login And Continue
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginSignup;
