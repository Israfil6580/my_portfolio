import Link from "next/link";

const Footer = () => {
  return (
    <footer className="glassmorphism">
      <div className="footer lg:flex-row flex-col justify-start lg:justify-end text-base-content p-4 container mx-auto">
        <aside className="flex flex-col lg:flex-row lg:gap-12 gap-2 text-base">
          <p>© {new Date().getFullYear()} Mironic. All right reserved</p>
          <Link href={""}>Term of Use</Link>
          <Link href={""}>Privacy Policy</Link>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
