import Link from "next/link";

const Footer = () => {
  return (
    <footer className="W-glassmorphism">
      <div className="footer justify-center py-4">
        <p className="text-primary">
          © {new Date().getFullYear()} Mironic. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
