import { React, useState, useEffect } from "react";
import OptimizedImageWithFallback from "../../ErrorCollection/Fallback";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (url) => axios.get(url, {}).then((response) => response.data);

const Signup = () => {
  const router = useRouter();
  const [signupStatus, setSignupStatus] = useState(() => {
    return (
      <>
        <div className="justify-self-center ">
          <OptimizedImageWithFallback
            src="/logo.png"
            alt="/"
            width="40"
            height="40"
            min-width="10"
          />
        </div>
        <div className="text-center text-[15vw] md:text-[5vw]">SIGN UP</div>
        <div className="w-[70%] justify-self-center">
          <OptimizedImageWithFallback
            src="/progress.png"
            alt="/"
            width="1291"
            height="100"
          />
        </div>
        <div className="flex justify-center flex-row py-[3vh]">
          <button
            className="transition px-[5vw] py-[2vh] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white rounded-xl text-[2em] md:text-[1.8vw]"
            onClick={() => router.reload()}
          >
            Login NetID
          </button>
        </div>
      </>
    );
  });

  const { data, error } = useSWR("https://compsa.ca/api/session", fetcher);

  const [useAlias, setUseAlias] = useState(false);

  const [username, setUsername] = useState("Loading...");

  const token = "https://compsa.ca/api/confirmation";

  const update = () => {
    axios.get("https://compsa.ca/api/aliases").then((res) => {
      setUseAlias(res.data);
    });
  };

  const back = () => {
    setSignupStatus(() => {
      return (
        <>
          <div className="justify-self-center ">
            <OptimizedImageWithFallback
              src="/logo.png"
              alt="/"
              width="40"
              height="40"
              min-width="10"
            />
          </div>
          <div className="text-center text-[4em] md:text-[5vw]">SIGN UP</div>
          <div className="w-[70%] justify-self-center">
            <OptimizedImageWithFallback
              src="/progress2.png"
              alt="/"
              width="1291"
              height="100"
            />
          </div>
          <div className="flex justify-center flex-row pt-[2vh] text-[1.5em] md:text-[2vw]">
            You will sign up as:
          </div>
          <div className="flex justify-center flex-row pt-[2vh] text-[1.5em] md:text-[2vw]">
            {username}
          </div>
          <div className="grid justify-center">
            <div className="flex justify-center flex-row py-[1vh]">
              <button
                className="relative top-1.5 text-[1em] md:text-[1vw] transition px-4 py-1 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] shadow-none text-white rounded-xl"
                onClick={update}
              >
                Stay Anonymous
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-row py-[3vh]">
            <button
              className="transition px-[5vw] py-[2vh] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white rounded-xl text-[2em] md:text-[1.8vw]"
              onClick={signup2}
            >
              Continue
            </button>
          </div>
        </>
      );
    });
  };

  useEffect(() => {
    if (data && !error) {
      setUsername(data.full_name);
    }
    back();
  }, [data, error]);

  useEffect(() => {
    back();
  }, [username]);

  useEffect(() => {
    setSignupStatus(() => {
      return (
        <>
          <div className="justify-self-center ">
            <OptimizedImageWithFallback
              src="/logo.png"
              alt="/"
              width="40"
              height="40"
              min-width="10"
            />
          </div>
          <div className="text-center text-[4em] md:text-[5vw]">SIGN UP</div>
          <div className="w-[70%] justify-self-center">
            <OptimizedImageWithFallback
              src="/progress2.png"
              alt="/"
              width="1291"
              height="100"
            />
          </div>
          <div className="flex justify-center flex-row pt-[2vh] text-[1.5em] md:text-[2vw]">
            Anonymous Name:
          </div>
          <div className="grid justify-center">
            <div className="flex justify-center flex-row pt-[1vh] text-[1.5em] md:text-[2vw]">
              {useAlias.alias}
            </div>
            <div className="flex justify-center flex-row py-[1vh]">
              <button
                className="relative top-1.5 text-[1.2em] md:text-[2vw] transition px-4 py-1 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] shadow-none text-white  rounded-xl"
                onClick={update}
              >
                Randomize
              </button>
              <button
                className="relative top-1.5 text-[1.2em] md:text-[2vw] transition px-4 py-1 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] shadow-none text-white  rounded-xl"
                onClick={back}
              >
                Back
              </button>
            </div>
            <div className="flex justify-center flex-row md:text-[1vw] pb-[1vh] pt-[1vh]">
              To Refresh, click &ldquo;Randomize&ldquo;
            </div>
          </div>
          <div className="flex justify-center flex-row py-[3vh]">
            <button
              className="transition px-[5vw] py-[2vh] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white rounded-xl text-[2em] md:text-[1.8vw]"
              onClick={signup}
            >
              Continue
            </button>
          </div>
        </>
      );
    });
  }, [useAlias]);

  const signup = () => {
    axios
      .post("https://compsa.ca/api/users", {
        alias_jwt: useAlias.token,
      })
      .then(function (response) {
        console.log(response);
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const signup2 = () => {
    axios
      .post("https://compsa.ca/api/users", {})
      .then(function (response) {
        console.log(response);
        router.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (error) {
    setTimeout(() => {
      router.reload();
    }, 5000);

    return (
      <>
        <div className="flex w-full h-[70px] bg-[#461C6F]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col w-full h-[90vh] bg-[#461C6F] ">
          <div className="w-[30vw] h-[30vw] bg-#461C6F bg-qbert bg-cover self-center justify-self-center absolute top-[15%] md:top-[0%] md:relative"></div>
          <div className="grid place-content-center self-center justify-self-center bg-[#B9B4CE] w-[80%] md:h py-[5vh] rounded-3xl absolute top-[15%] md:top-[0%] md:relative">
            <div className="text-[#2e1844] text-[3vw] px-20 text-center">
              Waiting for service...
              <Link
                href="/circuit/circuitHome"
                className="flex justify-center align-middle pt-[10%]"
              >
                <button className="transition px-[5vw] py-[2%] transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#2e1844] text-white rounded-xl text-[1em] sm:text-[2vw]">
                  Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (data) {
    if (data.registered) {
      return (
        <>
          <div className="flex w-full h-[70px] bg-[#461C6F]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col w-full min-h-[90vh] py-10 bg-[#461C6F]">
            <div className="w-[30vw] h-[30vw] bg-#461C6F bg-qbert bg-cover self-center justify-self-center absolute top-[15%] md:top-[0%] md:relative"></div>
            <div className="grid place-content-center self-center justify-self-center bg-[#B9B4CE] w-[80%] md:h py-[5vh] rounded-3xl absolute top-[15%] md:top-[0%] md:relative">
              <div className="relative justify-self-center h-[50vw] w-[50vw] md:h-[20vw] md:w-[20vw]">
                <OptimizedImageWithFallback
                  src="/logo.png"
                  alt="/"
                  fill
                  contain
                  min-width="10"
                />
              </div>
              <div className="flex justify-center text-center flex-row pt-[2vw] text-[6.5vw] md:text-[2.5vw]">
                Hi, {data.full_name}.<br /> You&lsquo;ve Signed Up!
              </div>
              <div className="flex justify-center flex-row pt-[2vw] text-[4.5vw] md:text-[1.5vw]">
                Bits Acquired: {data.points}
              </div>
              <div className="pt-[2vw] text-[3vw] md:text-[1vw] w-[80%] text-center self-center justify-self-center opacity-50">
                Note: Signup only needs to be done once! <br /> If you need to
                reset your username, please contact us at
                webmaster@compsa.queensu.ca
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="flex w-full h-[70px] bg-[#461C6F]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-col w-full h-[90vh] bg-[#461C6F] ">
        <div className="w-[30vw] h-[30vw] bg-#461C6F bg-qbert bg-cover self-center justify-self-center absolute top-[15%] md:top-[0%] md:relative"></div>
        <div className="grid place-content-center self-center justify-self-center bg-[#B9B4CE] w-[80%] md:h py-[5vh] rounded-3xl absolute top-[15%] md:top-[0%] md:relative">
          {signupStatus}
        </div>
      </div>
    </>
  );
};

export default Signup;
