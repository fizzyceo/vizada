import { Button, Typography } from "@material-tailwind/react";
import vizadaLogo from "../../../assets/navlogonbg.png";
import tiktoksvg from "../../../assets/tiktok.svg";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import googlePlayIcon from "../../../assets/google-play.png";
import laptopIcon from "../../../assets/laptop.png";
import slickPay from "../../../assets/slickpay.png";
export function FooterWithLogo() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[95%]  bg-[#0e1529] md:w-full md:rounded-none rounded-lg mx-auto p-8 relative">
      <span
        onClick={() => {
          window.scroll({ top: 0, behavior: "smooth" });
        }}
        className="absolute right-4 -top-3 animate-pulse cursor-pointer"
      >
        <ArrowUpCircleIcon width={32} className="text-white" />
      </span>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#0e1529] text-center md:justify-between w-[95%] md:w-[80%] mx-auto">
        <div className="flex flex-row items-center justify-between md:border-b-2 border-white  mx-auto pb-5 w-full">
          <img src={vizadaLogo} alt="logo-ct" className="w-28 invert " />
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://www.facebook.com/Vizada.dz?mibextid=ZbWKwL"
              target="_blank"
              className="bg-[#ffdd00] p-2 rounded-full text-gray-900  "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://www.instagram.com/vizada__academy?igsh=MzMycmY2ZXhhZmVt"
              target="_blank"
              className="bg-[#ffdd00] p-2 rounded-full text-gray-900  "
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://www.tiktok.com/@vizada_academy?_t=8nu8EFMis6P&_r=1"
              className="bg-[#ffdd00] p-2 rounded-full text-gray-900  "
              target="_blank"
            >
              <img src={tiktoksvg} className="h-5 w-5" />
            </Typography>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-6 gap-2 w-full">
          <div className="formation1  text-start">
            <h2 className="mb-4 text-[#4f6ed4] font-medium text-lg">
              Formations
            </h2>
            <ul className="text-[#7191ad] space-y-2">
              <li>
                <a href="/courses/Management/25">Entrepreneurship</a>
              </li>
              <li>
                <a href="/courses/Management/16"> Project Management </a>
              </li>
              <li>
                <a href="/courses/Management/18"> Human Ressources </a>
              </li>
              <li>
                <a href="/courses/Management/24">Organizational Behavior</a>
              </li>
            </ul>
          </div>
          <div className="formation1  text-start">
            <h2 className="mb-4 text-transparent">Formations</h2>
            <ul className="text-[#7191ad] space-y-2">
              <li>
                <a href="/courses/IT/1">Cyber Securite 1.0 </a>
              </li>
              <li>
                <a href="/courses/IT/2">Artificial Intelligence</a>
              </li>
              <li>
                <a href="/courses/IT/12">Network Securite </a>
              </li>
              <li>
                <a href="/courses/IT/8">Web Development</a>
              </li>
            </ul>
          </div>
          <div className="formation1  text-start">
            <h2 className="mb-4 text-[#4f6ed4] font-medium text-lg">
              Solutions
            </h2>
            <ul className="text-[#7191ad] space-y-2">
              <li>
                <a href="/#pricing"> Tarifs </a>
              </li>
              <li>
                <a href=""> Consultation </a>
              </li>
              <li>
                <a href=""> Devenir Formateur </a>
              </li>
              <li>
                <a href=""> Plagiat </a>
              </li>
            </ul>
          </div>
          <div className="formation1  text-start">
            <h2 className="mb-4 text-[#4f6ed4] font-medium text-lg">Support</h2>
            <ul className="text-[#7191ad] space-y-2">
              <li>
                <a href="/#contact"> Nous contacter </a>
              </li>
              <li>
                <a href="/#qa"> F.A.Q </a>
              </li>
              <li>
                <a href="tel:+213540974762"> (+213) 540 974 762 </a>
              </li>
              <li>
                <a href="mailto:contact@vizada.com"> contact@vizada.com </a>
              </li>
            </ul>
          </div>

          <div className=" "></div>
          <div className="formation1  flex flex-col items-end justify-start gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.mobilev2"
              className="border bg-black p-2 rounded-lg text-white border-white flex flex-row gap-1 items-center justify-center"
            >
              <img src={googlePlayIcon} className="w-7" alt="" />
              <div className="text-start mb-1 leading-none">
                <small className="font-light " style={{ fontSize: "9px" }}>
                  DISPONIBLE SUR{" "}
                </small>
                <h1 className="">Google Play</h1>
              </div>
            </a>
            <a
              href="https://www.alphorm.com/formez-vous-en-mobilite"
              className="border bg-black p-2 rounded-lg text-white border-white min-w-36  flex flex-row gap-2 items-center justify-start"
            >
              <img src={laptopIcon} className="w-7" alt="" />
              <div className="text-start mb-1 leading-none">
                <small className="font-light " style={{ fontSize: "9px" }}>
                  Telecharger Pour{" "}
                </small>
                <h1 className="">Desktop</h1>
              </div>
            </a>
          </div>
        </div>
        {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li><a href=""> 
            <Typography
              as="a"
              href="/#formation"
              color="deep-orange"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              Courses
            </Typography>
           </a></li>
          <li><a href=""> 
            <Typography
              as="a"
              href="/#pricing"
              color="deep-orange"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              Tarifs
            </Typography>
           </a></li>

          <li><a href=""> 
            <Typography
              as="a"
              href="/#contact"
              color="deep-orange"
              className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500"
            >
              Contact Us
            </Typography>
           </a></li>
        </ul> */}
        <div className="mt-12 w-full hidden md:flex flex-row items-center justify-between py-4">
          <div className="text-start">
            <Typography
              variant="paragraph"
              className="mb-4  font-normal text-[#71879d] md:mb-0"
            >
              &copy; {currentYear} Vizada - Tous droits réservés
            </Typography>

            <Typography
              variant="paragraph"
              className="mb-4  font-normal text-[#3c4e62] md:mb-0"
            >
              Mention legale
            </Typography>
          </div>
          <div className=" flex  flex-row gap-5 items-center justify-center">
            <Typography
              variant="paragraph"
              className="mb-4 text-center font-normal text-[#4c5b69] md:mb-0"
            >
              Paiement sécurisé
            </Typography>
            <img src={slickPay} className="w-20" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
