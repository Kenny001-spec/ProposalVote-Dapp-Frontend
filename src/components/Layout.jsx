import { Text } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div>
      <main className="w-full min-h-screen flex flex-col justify-between bg-stone-950">
        {/* header */}
        <div
          as="header"
          className="w-full h-20 flex justify-between items-center px-4 border-b border-stone-400 bg-stone-950"
        >
          <Text as="h3" className="text-xl font-bold text-blue-600">
            {" "}
            Proposal Dapp
          </Text>
          <appkit-button />
        </div>
        <section className="flex-1 p-8">{children}</section>
        {/* Footer */}
        <footer className="w-full h-20 flex justify-center items-center bg-stone-600">
          <Text as="p" className="text-stone-200">
            Proposal Dapp &copy; 2024. All Right Reserved.
          </Text>
        </footer>
        <ToastContainer theme="dark" position="top-right" />
      </main>
    </div>
  );
};

export default Layout;
