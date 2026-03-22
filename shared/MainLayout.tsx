import {ReactNode} from "react";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Sidebar from "@/shared/Sidebar";

export default function MainLayout({children}: {children: ReactNode}) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>

          <div className="flex flex-1 flex-col md:flex-row">
              <main className="flex-1 p-6 bg-white">
                  <div className="max-w-4xl mx-auto w-full p-6">
                      {children}
                  </div>
              </main>
          </div>

          <Footer/>
      </div>
    );
}