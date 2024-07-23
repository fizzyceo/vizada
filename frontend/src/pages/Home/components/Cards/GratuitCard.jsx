import { CheckIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const GratuitCard = () => {
  return (
    <div className="rounded-xl border-t-[3px] hover:scale-105  w-[350px] md:w-[350px] transition-all border-t-green-300 p-5 space-y-5 roboto bg-white">
      <h1 className="text-[#04c590] font-medium text-2xl mt-6">Gratuit</h1>

      <p className="font-normal text-base text-[#a6a1ab] max-w-[300px] ">
        Développez vos compétences sans frais avec plusieurs formations
        gratuites
      </p>
      <div className="pricesection relative h-[100px] ">
        <div className={`transition-all `}>
          <h1 className={`text-4xl font-medium text-[#04c590] transition-all `}>
            0 <span className="text-xs ">DZD/Mois</span>
          </h1>
          <div className="text-xs text-gray-500 line-through">
            3500 DZD/Mois
          </div>
          <p className="text-gray-600 opacity-75 text-xs">
            Compte 100% GRATUIT ! Pas de surprises, Aucune carte de crédit
            requise.
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-4 ">
          <li className="flex items-center gap-1 ">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm ">
              Accès à toutes les formations
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474] text-sm ">
              Téléchargement des ressources
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474]  text-sm ">
              Attestation de fin de formation
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474]  text-sm ">
              Espace d'échange pour apprenants
            </Typography>
          </li>
          <li className="flex items-center gap-1">
            <span className="rounded-full border border-white/20  p-1">
              <CheckIcon className="w-4 text-yellow-900" />
            </span>
            <Typography className="font-normal text-[#747474]  text-sm ">
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
        <button
          onClick={() => {
            window.location =
              "https://auth.alphorm.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dfrontclient%26redirect_uri%3Dhttps%253A%252F%252Fwww.alphorm.com%252Fsignin%253Fpath%253D%252Ftarifs%252F%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%26state%3D2b5cc7c0068b41ac867c3d429b23cf34%26code_challenge%3DJRJpowujPfSnwGiVtnsm6r-nPuxiYvdonFuFgVAWLlk%26code_challenge_method%3DS256%26response_mode%3Dquery";
          }}
          className="w-full rounded-lg bg-[#ffdd00] py-3 text-base text-black font-medium"
        >
          Démarrer gratuitement
        </button>
      </div>
    </div>
  );
};

export default GratuitCard;
