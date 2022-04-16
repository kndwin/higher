import { useState, useEffect } from "react";
import { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const withAuth = (PageComponent: NextPage) => (props: any) => {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(null);
  const { data: session } = useSession();

  const router = useRouter();

  const checkSession = async () => {
    if (!!session?.user) {
      setLoggedIn(true);
    } else {
      const fetchedSession = await getSession();
      if (!!fetchedSession?.user) {
        setLoggedIn(true);
      } else {
        router.push("/");
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    checkSession();
    setLoading(false);
  }, [router]);

  if (loggedIn === true) {
    return <PageComponent {...props} />;
  }

  return null;
};
