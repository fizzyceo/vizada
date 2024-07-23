import { CheckIcon } from "@heroicons/react/24/solid";
import { Button, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../stores/Auth";
import { useInvoiceStore } from "../../../../stores/Payment";

const ItCard = () => {
  const [activePlan, setActivePlan] = useState(1);
  const [loading, setLoading] = useState(false);
  const user = useAuth((state) => state.user);
  const navigate = useNavigate();
  const { CreateInvoice } = useInvoiceStore((state) => state);

  const InitiatePayment = async () => {
    setLoading(true);
    if (user && Object.keys(user).length > 0) {
      let body = {
        amount: activePlan === 1 ? 35000 : 3500,
        url: `${import.meta.env.VITE_PUBLIC_URL}/dashboard`,
        items: [
          {
            name: `IT ${activePlan === 1 ? "yearly" : "monthly"}`,
            price: activePlan === 1 ? 35000 : 3500,
            quantity: 1,
          },
        ],
        firstname: user.last_name,
        lastname: user.first_name,

        email: user.email,
        phone: user.ntel,
        address: "xxxxxx",
      };
      console.log(body);
      await CreateInvoice(body, navigate);
    } else {
      navigate("/login");
    }

    setLoading(false);
  };

  return (
    <div className="rounded-xl border-t-[3px] scale-105 transition-all w-[350px] shadow-lg md:w-[350px] border-t-orange-700 p-5 space-y-5 roboto bg-white">
      <div className="self-start grid grid-cols-2 items-center border border-gray-300 cursor-pointer w-fit">
        <small
          onClick={() => setActivePlan(1)}
          className={` p-1 text-[11px]   transition-all ${
            activePlan === 1
              ? "bg-orange-700 text-white "
              : "bg-inherit text-gray-700"
          }`}
        >
          Annuel
        </small>
        <small
          onClick={() => setActivePlan(2)}
          className={` p-1 text-[11px]  transition-all ${
            activePlan === 2
              ? "bg-orange-700 text-white"
              : "bg-inherit text-gray-700"
          }`}
        >
          Mensuel
        </small>
      </div>
      <h1 className="text-[#f77d48] font-medium text-xl">
        Information Technology
      </h1>

      <p className="font-normal text-sm text-[#a6a1ab] lg:w-[85%]">
        Commencez votre nouvelle carrière informatique maintenant
      </p>
      <div className="pricesection relative h-[100px] ">
        <div
          className={`transition-all ${
            activePlan !== 1
              ? "translate-x-52 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className={`text-4xl font-medium text-blue-700 transition-all `}>
            2917 <span className="text-xs ">DZD/Mois</span>
          </h1>
          <div className="bg-[#02c58c] mt-1 mb-3 rounded-md py-1 px-2 text-xs text-white w-fit">
            Gagner 2 Mois GRATUITS
          </div>
          <p className="text-gray-600 opacity-75 text-xs">
            Facturé annuellement (35000 DZD)
          </p>
        </div>
        <div
          className={`absolute top-0 left-0 transition-all ${
            activePlan === 1
              ? "translate-x-52 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h1 className="text-4xl font-medium text-blue-700">
            3500 <span className="text-xs ">DZD/Mois</span>
          </h1>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Accès à toutes les formations
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Téléchargement des ressources
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Attestation de fin de formation
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Espace d'échange pour apprenants
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Accès hors ligne
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm">
              Accès via les applications mobiles
            </Typography>
          </li>
        </ul>
      </div>
      <div>
        <Button
          style={{ textTransform: "initial" }}
          ripple={false}
          onClick={InitiatePayment}
          loading={loading}
          className="w-full rounded-lg  bg-[#3767da] py-3 text-base text-white font-medium"
        >
          Démarrer
        </Button>
      </div>
    </div>
  );
};

export default ItCard;
