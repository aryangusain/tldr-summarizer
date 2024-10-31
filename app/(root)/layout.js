import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return (
        <main className="flex flex-col justify-between items-center w-full h-full">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
}