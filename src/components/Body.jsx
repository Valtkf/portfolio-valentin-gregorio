export default function Body() {
  return (
    <div className="min-h-screen w-full border-2 border-blue-600 bg-stone-900 flex items-center justify-center p-10">
      <div
        className="grid h-full w-full gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)", // 2 colonnes égales
          gridTemplateRows: "250px 200px 250px 200px 200px 200px 200px 200px", // 6 rangées, chaque rangée ayant une hauteur de 2fr
        }}
      >
        <div
          className="relative col-span-3 md:col-span-3 row-span-1  bg-indigo-200 rounded-3xl flex justify-center items-center text-white"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/cb5d/29f8/d76dfd5c87274ae659d0281c6366875e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1Zo~9P9TXn9aDwxrip3OYZa~a2QW1YGU9H~nxw9XBnTW4dBa6SidkAt~9d3iPSqbGeOXtzML3chwMAui8Woxoau5U7k28lBEP0jvs3yTHV5aMAT-mNL3pUiRtsqOdmiZ~DfXloLMGi~v447guhqJCYKnvu~OtbWObQZ9dWXRHZbpLlpRMMGWy7aX~IAes1o9H7Br37j6~Ux6iXLJzIt7-jzwzpas5XCg5~ym-ZDDTM9C8FuOH~DErn3s7aNbPpkmUKhnMgIroq~qOmjImVXG3IsrH3GNNGJayJrsUY23ClNTg5e6DLzJy9UFR4VZGKSaGqz5VXgZDuqZxLK4Fq6Pw__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-55 rounded-3xl "></div>
          <div className="relative z-10 text-center p-4">
            <h1 className="font-poppins text-xl md:text-2xl font-semibold p-2">
              Valentin Gregorio
            </h1>
            <h2 className="border-t-[1px] border-white font-poppins text-lg md:text-xl font-semibold p-2">
              Développeur Front End
            </h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-zinc-700 to-red-300 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-2 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          <div className="shadow-lg shadow-stone-700/40 rounded-3xl bg-slate-200 w-[500px] h-[300px]">
            projets
          </div>
        </div>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 col-span-3 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center p-4 text-white">
          technos
        </div>
        <div className="bg-gradient-to-r from-blue-200 to-cyan-200 col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-3 row-span-3 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          parcours
        </div>
        <div className="bg-gradient-to-r from-slate-500 to-slate-800 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-3 row-span-1 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          réseaux
        </div>
      </div>
    </div>
  );
}
