"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectToWork = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/case");
  }, [router]);

  return null;
};

export default RedirectToWork;
