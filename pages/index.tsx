
import React from "react";
import Landing from "@/components/landing";
import Sidebar from "@/components/Sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className="tracking-wider">
      <Head>
        <title> mercyknight</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Sidebar />
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

