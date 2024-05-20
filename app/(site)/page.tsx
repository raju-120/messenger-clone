import Image from "next/image";
import logo from "@/public/images/logo.png";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
      <div className="flex min-h-full flex-col justify-center  sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

            <Image alt="logo" src={logo} height="48" width="48" className="mx-auto w-auto" />
            <h1 className="mt-2 text-center text-3xl tracking-tight text-gray-900">Sign in to your account</h1>

        </div>
        <AuthForm/>
      </div>
    );
  }
  