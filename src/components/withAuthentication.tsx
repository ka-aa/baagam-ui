import { NextComponentType, NextPageContext } from "next";
import { redirect } from "next/navigation";

const withAuthentication = (Component: NextComponentType<NextPageContext, any, {}>) => {
  const AuthenticatedComponent = () => {
    const isUserLoggedIn = false;

    if (!isUserLoggedIn) {
      redirect("/signin");
    }
    return <Component/>;
  }

  return AuthenticatedComponent;
}

export default withAuthentication;