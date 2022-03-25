import Header from "../Header";
import Footer from "../Footer";

export default function MainTheme(props) {
  return (
    <div className="bg-black">
      <Header />
      <div className="min-h-screen"></div>

      <Footer />
    </div>
  );
}
