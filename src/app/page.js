"use client";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundVideo } from "@/components/video";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import gsap, { Power1 } from "gsap";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Home() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const images = [
    "/artista3.jpeg",
    "/artista1.jpeg", 

    "/artista4.jpeg",
    "/artista5.jpeg",
    "/artista2.jpeg",
    "/artista6.jpeg",
    "/artista7.jpeg",

    "/artista9.jpeg",
    "/artista10.jpeg",
  ];
  const images2 = [
    "/exterior.jpeg",
    "/exterior2.jpeg",
    "/exterior3.jpg",
    "/exterior4.jpeg",
    "/exterior5.jpeg",
    "/exterior6.jpeg",
  ];

  useEffect(() => {
    gsap.to(".title_", {
      opacity: 1,
      delay: 0.2,
      ease: Power1.easeIn,
    });
    gsap.to(".subtitle_", {
      opacity: 1,
      delay: 0.5,
      ease: Power1.easeIn,
    });
    gsap.to(".parallax_", {
      opacity: 1,
      delay: 0.8,
      ease: Power1.easeIn,
    });
  }, []);

  const onSubmit = async (data) => {
    toast({
      title: "Lo siento. No hay cupos disponibles",
      description: "Te tendremos en cuenta para las próximas experiencias.",
    });
    const response = await axios.post("/api/waitlist", data);
    console.log(response.data.data);
    reset()
  };

  return (
    <div className="min-h-screen py-10 bg-black">
      <div className="flex  justify-center flex-col items-center mt-40">
        <p
          style={{ opacity: 0.6 }}
          className="font-bold title_ text-5xl text-center md:text-7xl text-white font-geist tracking-tighter uppercase title"
        >
          Viví la experiencia.
        </p>
        <p
          style={{ opacity: 0.3 }}
          className="text-center subtitle_ font-xs mb-10 font-geist text-white mt-5 md:mb-40 font-bold"
        >
          Una experiencia inolvidable para artistas, productores y músicos
        </p>
        <div style={{ opacity: 0.2 }} className="parallax_">
          <ParallaxScroll images={images} />
        </div>
      </div>
      <div className="mt-40 hidden md:block  ">
        <BackgroundVideo srcFile={"https://res.cloudinary.com/djvid3urc/video/upload/v1710402637/hd0c9s171mm83vcd3ipn.mov"}>
          <div className="grid grid-cols-3 w-[100vw] ">
            <div className="flex flex-col ">
              <p
                className=" text-7xl  mt-10  font-geist  font-bold tracking-tighter text-gray-100"
                style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
              >
                ¿Quienes somos?
              </p>
              <div className="flex justify-center">
                <p
                  className="text-md  font-semibold w-8/12 font-geist text-center mt-5   tracking-tighter text-md text-gray-200"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  SOMOS UNA COMPANIA QUE HACE DE TU PROYECTO UNA EXPERIENCIA.
                </p>
              </div>
            </div>
            <div />
            <div className="w-full ">
              <div className="flex justify-center">
                <p
                  className=" text-7xl text-center mt-10 font-geist  font-bold  xl:w-9/12 tracking-tighter text-gray-100"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  ¿Qué hacemos?
                </p>
              </div>
              <div className="flex justify-center">
                <p
                  className="text-md  w-8/12  font-semibold font-geist  text-center mt-5   tracking-tighter text-md text-gray-200"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  NOS ENCARGAMOS DE CREAR ALGO ÚNICO PARA PROYECTOS ÚNICOS.
                </p>
              </div>
            </div>
          </div>
        </BackgroundVideo>
      </div>
      <div className=" block md:hidden  ">
        <BackgroundVideo srcFile={"https://res.cloudinary.com/djvid3urc/video/upload/v1710402649/d5dk6vhjhbjgecpcxud3.mov"}>
          <div className="flex flex-col justify-between h-[80vh] w-[100vw] ">
            <div className="flex flex-col ">
              <p
                className="text-4xl  mt-10  font-geist  font-bold tracking-tighter text-gray-100"
                style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
              >
                ¿Quienes somos?
              </p>
              <div className="flex justify-center">
                <p
                  className="text-md  font-semibold w-8/12 font-geist text-center mt-5   tracking-tighter text-md text-gray-200"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  SOMOS UNA COMPANIA QUE HACE DE TU PROYECTO UNA EXPERIENCIA.
                </p>
              </div>
            </div>
            <div />
            <div className="w-full ">
              <div className="flex justify-center">
                <p
                  className="text-4xl text-center mt-10 font-geist  font-bold  xl:w-9/12 tracking-tighter text-gray-100"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  ¿Qué hacemos?
                </p>
              </div>
              <div className="flex justify-center">
                <p
                  className="text-md  w-8/12  font-semibold font-geist  text-center mt-5   tracking-tighter text-md text-gray-200"
                  style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
                >
                  NOS ENCARGAMOS DE CREAR ALGO ÚNICO PARA PROYECTOS ÚNICOS.
                </p>
              </div>
            </div>
          </div>
        </BackgroundVideo>
      </div>
      <div className="w-screem flex flex-col items-center justify-center min-h-screen">
        <p
          className="text-4xl md:text-7xl uppercase font-extrabold text-white text-center relative mt-20    font-geist "
          style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.5) " }}
        >
          Proxima experiencia
        </p>

        <span className="flex items-end text-2xl text-center md:text-4xl text-gray-100 mt-5 mb-20 font-geist tracking-tighter font-semibold">
          26 y 27 de Marzo, Argentina
        </span>
        <img src="/logo.jpg" className="w-12/12 md:w-3/12" />

        <ParallaxScroll images={images2} />

        <div className="flex justify-center mt-20 ">
          <span className="flex items-end text-4xl text-gray-100 font-geist tracking-tighter font-semibold">
            ¡No te quedes afuera!
          </span>
        </div>
        <div className="flex justify-center w-screen">
          <form
            className="border  p-5 rounded-xl w-10/12 md:w-3/12  mt-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Label className="font-geist font-bold text-gray-100">
                Nombre Completo
              </Label>
              <Input
                {...register("nombreCompleto", { required: true })}
                className="inputStyles"
              />
            </div>
            <div className="mt-5">
              <Label className="font-geist font-bold text-gray-100">
                Email
              </Label>
              <Input
                {...register("email", { required: true })}
                className="inputStyles"
              />
            </div>
            <div className="mt-5">
              <Label className="font-geist font-bold text-gray-100">
                Celular
              </Label>
              <Input
                {...register("celular", { required: true })}
                className="inputStyles"
              />
            </div>
            <div className="mt-5">
              <Label className="font-geist font-bold text-gray-100">
                Instagram
              </Label>
              <Input {...register("instagram")} className="inputStyles" />
            </div>

            <Button variant="outline" className="mt-5 " type="submity">
              Enviar
            </Button>
          </form>
        </div>
      </div>
      {/* <div className="grid grid-cols-3 mt-40">
        <div className="flex justify-center">
          <div
            className="h-full w-10/12  p-10
         rounded-xl"
          >
            <p
              className="text-3xl text-center mt-5 font-bold tracking-tighter text-gray-100"
              style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.9) " }}
            >
              Talleres Musicales
            </p>
            <div className="flex justify-center w-full">
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
