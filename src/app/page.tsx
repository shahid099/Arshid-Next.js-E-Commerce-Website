import Header from "../../components/Header";
import Main from "../../components/Main";
import Fix from "../../components/Fix";


import FunctionsProvider from "../../contextApi/FunctionsProvider";

export default function Home() {
  return (
    <FunctionsProvider>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <Header />
        <Fix />
        <Main />
      </div>
    </FunctionsProvider>
  );
}

