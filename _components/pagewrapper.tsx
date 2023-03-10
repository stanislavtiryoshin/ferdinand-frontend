"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "../app/loading";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1900);
  }, []);
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <div className={loading ? "page loading" : "page"}>
            <motion.div>{children}</motion.div>
          </div>
        )
      }
    </>
  );
}

