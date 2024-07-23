import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../Home/components/Navbar";
import { Button, IconButton, Input, Spinner } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { FooterWithLogo } from "../Home/components/Footer";
import { useAuth } from "../../stores";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  CreditCardIcon,
  AcademicCapIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import vizadaLogo from "../../assets/vizada-logo.png";
import Subscription from "./Subscription";
import Credentials from "./Credentials";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import { useParams } from "react-router-dom";
import { useInvoiceStore } from "../../stores/Payment";
import { useSubStore } from "../../stores/Subs";

const Dashboard = (props) => {
  const [tabSelected, setTabSelected] = useState(1);
  const searchParams = new URLSearchParams(location.search);
  const invoiceId = searchParams.get("invoice_id");
  const { GetInvoice } = useInvoiceStore((state) => state);
  const { createSub, getOneSub } = useSubStore((state) => state);

  const navigate = useNavigate();
  const user = useAuth((state) => state.user);
  const [subscriberContent, setSubscriberContent] = useState(null);
  const [activeAcc, setActiveAcc] = useState(-3);
  const [loading, setLoading] = useState(true); // State to track loading state

  useEffect(() => {
    const checkInvoice = async () => {
      try {
        if (!invoiceId || !user) return; // Exit early if no invoiceId or user is provided

        // Fetch invoice details
        const invoiceRes = await GetInvoice(invoiceId, navigate, user.email);
        console.log("Invoice details:", invoiceRes);

        // Check if the user has an existing subscription
        const isSubscribed = await getOneSub(user.id);
        if (isSubscribed.length > 0) {
          setSubscriberContent(isSubscribed[0]);
        } else {
          // Extract subscription details from invoice name
          const invoiceName = invoiceRes.data.items[0].name;
          const [categoryPrefix, typeS] = invoiceName.split(" ");

          // Determine category ID based on categoryPrefix (assuming 'management' corresponds to ID 2, otherwise ID 1)
          const Id_c = categoryPrefix === "management" ? 2 : 1;

          // Prepare subscription creation payload
          const subscriptionData = {
            Id_user: user.id,
            typeS: typeS,
            Id_c: Id_c,
          };

          // Create subscription
          const createdSub = await createSub(subscriptionData);
        }
      } catch (error) {
        console.error("Error in checkInvoice:", error);
        // Handle errors (e.g., display error message, redirect, etc.)
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    checkInvoice(); // Call the async function immediately on mount or when invoiceId changes
  }, [invoiceId, navigate, user]); // Dependency array includes variables used in the async function

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const isSubscribed = await getOneSub(user?.id); // Safely access user.id using optional chaining (user?.id)
        console.log("Subscription details:", isSubscribed);

        if (isSubscribed.length > 0) {
          const subscription = isSubscribed[0];
          if (subscription.active === 1) {
            setActiveAcc(1);
          } else if (subscription.active === 0) {
            setActiveAcc(0);
          } else {
            setActiveAcc(-1); // Handle any other state of 'active' property
          }
          setSubscriberContent(subscription);
        } else {
          setActiveAcc(-2); // Handle scenario where no subscription found
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
        setActiveAcc(-2); // Set activeAcc to -1 in case of error
        // Handle error (e.g., display error message, redirect, etc.)
      } finally {
        setLoading(false); // Set loading to false when done
      }
    };

    checkSubscription(); // Call the async function immediately on mount
  }, [user?.id]); // Dependency array includes user?.id to re-run effect when user changes

  return (
    <div className="min-h-screen bg-gray-50 roboto">
      {user?.role ? <NavbarAdmin /> : <NavbarWithMegaMenu isLogged={true} />}
      <div className="my-10 flex flex-row items-center justify-between w-[90%] mx-auto">
        <h1>Marhaba {user?.name || "ilyes"}!</h1>
        <p className="text-gray-600 text-sm">Need Help ?</p>
      </div>
      <div className="lg:w-[70%] w-[90%] border-orange-900  border-2 border-dashed h-fit  min-h-[350px] mx-auto my-10 p-0  flex flex-row py-0 relative overflow-hidden">
        {activeAcc && (
          <div
            className={`absolute w-[550px] h-[550px] lg:w-[750px] transition-all duration-500 lg:h-[750px] -top-[30%] z-0 -translate-y-[45%] ${
              tabSelected === 2
                ? "lg:-translate-y-[70%] lg:-translate-x-[-20%]"
                : "lg:-translate-y-[40%] lg:-translate-x-[38%]"
            } lg:-translate-y-[40%] -translate-x-[25%] lg:-translate-x-[38%] bg-gradient-to-b from-orange-700 to-red-900 rounded-full left-[50%]`}
          ></div>
        )}
        <div className="w-[30%] lg:w-[20%]   bg-gray-100 min-h-full">
          <div className="text-center border-b-2 z-20   py-5 flex items-center justify-center">
            <img src={vizadaLogo} alt="logo-ct" className="w-24 z-20" />
          </div>
          <div className="space-y-4">
            <h2 className="text-gray-700 mx-2 my-2 text-sm">Menu</h2>
            <div className="flex flex-col items-center gap-3 justify-center  rounded-r-md cursor-pointer">
              <div
                onClick={() => setTabSelected(1)}
                className={` rounded-r-full p-2 w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800  transition-all flex flex-row items-center justify-center gap-4 ${
                  tabSelected === 1 ? "bg-orange-800 text-gray-50" : ""
                }`}
              >
                <CreditCardIcon width={24} />

                <h1>Subscription</h1>
              </div>
              {/* <div
                onClick={() => setTabSelected(2)}
                className={` rounded-r-full p-2  w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800 transition-all flex flex-row items-center justify-center gap-4 ${
                  tabSelected === 2 ? "bg-orange-800 text-gray-50" : ""
                }`}
              >
                <LockClosedIcon width={24} />

                <h1>Credentials</h1>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative content  h-full     w-full items-center  flex flex-col gap-3  ">
          <div className="absolute right-4 lg:right-8 z-0   top-0 rounded-full w-24 h-24 opacity-25 bg-orange-400 blur-xl"></div>
          <div className="absolute left-8 lg:right-16 z-0   bottom-0 rounded-full w-24 h-24 opacity-30 bg-gray-400 blur-xl"></div>
          {/* {document.createElement("img", data[tabSelected - 1].icon)} */}
          {tabSelected === 1 && (
            <div>
              {activeAcc === -3 ? (
                <Spinner />
              ) : (
                <Subscription
                  isActive={activeAcc}
                  subscriberContent={subscriberContent}
                />
              )}
            </div>
          )}
          {/* {tabSelected === 2 && <Credentials />} */}
        </div>
      </div>{" "}
      <FooterWithLogo />
    </div>
  );
};

export default Dashboard;
