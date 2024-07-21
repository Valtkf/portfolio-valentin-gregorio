export default function Body() {
  return (
    <div className="min-h-screen w-full  bg-stone-900 flex items-center justify-center p-10">
      <div
        className="grid h-full w-full gap-4 mt-20"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)", // 3 colonnes égales
          gridTemplateRows: "250px 200px 250px 200px 200px 200px 200px 200px", // Hauteur des rangées en pixels
        }}
      >
        <div
          id="header"
          className="relative col-span-3 md:col-span-3 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center text-white"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/cb5d/29f8/d76dfd5c87274ae659d0281c6366875e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1Zo~9P9TXn9aDwxrip3OYZa~a2QW1YGU9H~nxw9XBnTW4dBa6SidkAt~9d3iPSqbGeOXtzML3chwMAui8Woxoau5U7k28lBEP0jvs3yTHV5aMAT-mNL3pUiRtsqOdmiZ~DfXloLMGi~v447guhqJCYKnvu~OtbWObQZ9dWXRHZbpLlpRMMGWy7aX~IAes1o9H7Br37j6~Ux6iXLJzIt7-jzwzpas5XCg5~ym-ZDDTM9C8FuOH~DErn3s7aNbPpkmUKhnMgIroq~qOmjImVXG3IsrH3GNNGJayJrsUY23ClNTg5e6DLzJy9UFR4VZGKSaGqz5VXgZDuqZxLK4Fq6Pw__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-55 rounded-3xl"></div>
          <div className="relative z-9 text-center p-4">
            <h1 className="font-poppins text-4xl font-semibold p-2">
              Valentin Gregorio
            </h1>
            <h2 className="border-t-[1px] border-white font-poppins text-3xl font-semibold p-2">
              Développeur Front End
            </h2>
            <div className="mt-10 text-stone-300 font-poppins text-xl font-medium">
              Recherche une mission freelance
            </div>
          </div>
        </div>
        <div
          id="projects"
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-gradient-to-r from-zinc-700 to-red-300 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-2 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center p-4"
          style={{
            backgroundImage: "url('/images/mockupcrazeeburger.png')",
            backgroundSize: "contain",
          }}
        ></div>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center p-8 text-white">
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/icons8-react-native.svg')",
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/icons-tailwind-css.svg')",
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/icons-typescript.svg')",
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/icons-nextjs.svg')",
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/styled-components.svg')",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        </div>

        <div
          id="about"
          className="bg-gradient-to-r from-blue-200 to-cyan-200 col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3 row-span-3 bg-indigo-200 rounded-3xl text-center flex flex-col justify-center items-center p-4"
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-white text-4xl font-semibold mb-8 border-b-2 border-white p-4">
            Mon parcours
          </h1>
          <p className="text-white text-2xl font-semibold p-4">
            Ayant fait mon apprentissage en autodidacte , j'ai suivis des
            formations en ligne qui m'ont permis de me spécialiser sur des
            technologies telles que React , Typescript et Nextjs. Je cherche
            également à me perfectionner et améliorer toujours plus la qualité
            de mon code tout en faisant un travaille de veille technologique.
          </p>
        </div>
        <div
          id="contact"
          className="bg-gradient-to-r from-slate-500 to-slate-800 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center flex-col p-4"
        >
          <div className="text-white border-b-[1px] border-white font-poppins text-xl md:text-2xl font-semibold mr-4 mb-4">
            <h1>Réseaux</h1>
          </div>
          <div className="flex space-x-4">
            <a href="https://x.com/Grego13Valentin">
              <div
                className="w-12 h-12 bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/icons-x.svg')",
                  backgroundSize: "contain",
                }}
              ></div>
            </a>
            <a href="https://www.linkedin.com/in/valentin-gregorio-33510826a/">
              <div
                className="w-12 h-12 bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/icons-linkedin.svg')",
                  backgroundSize: "contain",
                }}
              ></div>
            </a>
            <a href="https://github.com/Valtkf">
              <div
                className="w-12 h-12 bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/icons-github.svg')",
                  backgroundSize: "contain",
                }}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
