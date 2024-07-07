import About_me from "@/components/homepage/About_me";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Education from "@/components/homepage/Education";
import Skills from "@/components/homepage/Skills";

export default function Home() {
  return (
    <main className="contaier mx-auto md:px-20 px-5">
      <Banner />
      <About_me />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
