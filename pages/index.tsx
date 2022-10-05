import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Intro: NextPage = () => {
  const router = useRouter();

  const transition = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
    },
  };

  useEffect(() => {
    setTimeout(function () {
      router.push("https://fake.fm/world");
    }, 2000);
  }, []);

  return (
    <motion.div
      initial="in"
      animate="in"
      exit="out"
      variants={transition}
      transition={{ duration: 0.5, type: "ease-out" }}
    >
      <div className="WebContainer">
        <div>
          <img src="/flags.webp" className="flagbartop" alt="flag bar" />
          <div>
            <img src="/seal_doj.webp" className="seal_doj" alt="DOJ Logo" />
            <img
              src="/seal_homeland.webp"
              className="seal_homeland"
              alt="Homeland Sec Logo"
            />
            <img src="/seal_fbi.webp" className="seal_fbi" alt="FBI Logo" />
          </div>
          <div className="centertext">
            <p className="warning">
              <b>this hidden site has been seized</b>
            </p>
            <p className="subtext">
              <b>
                as part of a joint law enforcement operation by
                <br />
                the Federal Bureau of Investigation, ICE Homeland Security
                Investigations,
                <br />
                and European law enforcement agencies acting through Europol and
                Eurojust
              </b>
            </p>
            <p className="smalltext">
              in accordance with the law of European Union member states
              <br />
              and a protective order obtained by the United States Attorney’s
              Office for the Southern District of New York
              <br />
              in coordination with the U.S. Department of Justice’s Computer
              Crime & Intellectual Property Section
              <br />
              issued pursuant to 18 U.S.C. § 983(j) by the
              <br />
              United States District Court for the Southern District of New York
            </p>
          </div>
          <div>
            <img
              src="/seal_europol.webp"
              className="seal_europol"
              alt="Europol Logo"
            />
            <img
              src="/seal_eurojust.webp"
              className="seal_eurojust"
              alt="Eurojust Logo"
            />
            <img src="/flags.webp" className="flagbarbottom" alt="flag bar" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;
