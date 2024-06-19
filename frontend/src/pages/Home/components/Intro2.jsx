import React from "react";
import Picture from "../../../assets/intropic.png";
import {
  Typography,
  Button,
  IconButton,
  Carousel,
  Avatar,
  Rating,
} from "@material-tailwind/react";

import { ArrowDownIcon } from "@heroicons/react/24/solid";
const Intro2 = () => {
  return (
    <div className="min-h-[550px] relative py-5 mx-auto">
      <div className="flex flex-col justify-between w-full flex-wrap z-10 ">
        <div className="text-center flex flex-col items-center justify-center space-y-10">
          <h1 className="text-6xl teko-600 font-bold  ">
            {" "}
            GROW WITH <span className="gradient-text ">VIZADA</span>
          </h1>
          <Typography className="w-[80%] text-2xl teko-400 text-blue-gray-800">
            Vizada propose une gamme complète de formations sur le management,
            le marketing, la sécurité, la gestion de projet et les systèmes
            d’information.
          </Typography>
          <Button className=" bg-orange-800 flex items-center justify-between rounded-full space-x-4">
            <a
              className="flex items-center justify-between w-full space-x-4"
              onClick={() => {
                const element = document.getElementById("formation");
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <p>Nos Formations</p>
              <ArrowDownIcon className="w-6" />
            </a>
          </Button>
        </div>

        <div className="flex flex-row my-5 gap-5 flex-wrap items-center justify-center">
          <div className="px-8 text-center bg-gradient-to-t w-[45%] lg:w-[30%] from-gray-50 to-orange-400/40 rounded-lg p-2">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-6 text-md "
            >
              &quot;Je me suis abonné pour suivre des formations en VMware,
              Citrix, Hyper-v, XenSources, KVM, … Pas facile au début, mais je
              me suis accroché et ça a payé. Le projet a été un succès, je me
              suis éclaté et j’ai reçu une superbe évaluation !&quot;
            </Typography>
            <Avatar
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image"
              size="lg"
            />
            <Typography variant="h6" className="mt-4">
              Redouane T.{" "}
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              ETUDIANT SYSTÈMES ET RÉSEAUX
            </Typography>
            <Rating value={5} readonly />
          </div>
          <div className="px-8 text-center  w-[45%] lg:w-[30%] bg-gradient-to-t from-gray-50 to-orange-400/40 rounded-lg p-2">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-6 text-md "
            >
              &quot;ça m’a aidé à trouver rapidement mon premier job. J’avais
              plus confiance en moi, et ça s’est ressenti lors des entretiens.
              Aujourd’hui je suis MCSE et je ne compte pas m’arrêter là, je me
              forme en continu !&quot;
            </Typography>
            <Avatar
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image"
              size="lg"
            />
            <Typography variant="h6" className="mt-4">
              Jean-Sébastien F
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              ETUDIANT SYSTÈMES ET RÉSEAUX
            </Typography>
            <Rating value={5} readonly />
          </div>
          <div className="px-8 text-center bg-gradient-to-t  w-[45%] lg:w-[30%] from-gray-50 to-orange-400/40 rounded-lg p-2">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-6 text-md "
            >
              &quot;Je gère un parc serveur avec plein de technologies : AD,
              VMware vSphere/View, Swicth SAN brocade, WSUS, Windows 2012,
              Oracle 11g et Red Hat 6.4. Du top niveau avec de vrais experts,
              pointus dans leur domaine et très pédagogues.&quot;
            </Typography>
            <Avatar
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image"
              size="lg"
            />
            <Typography variant="h6" className="mt-4">
              Blaise P
            </Typography>
            <Typography color="gray" className="mb-4 font-normal">
              INGÉNIEUR IT SYSTÈMES ET STOCKAGE
            </Typography>
            <Rating value={5} readonly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
