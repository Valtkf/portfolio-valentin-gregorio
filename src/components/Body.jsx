export default function Body() {
  return (
    <div className="min-h-screen w-full border-2 border-blue-600 bg-stone-900 flex items-center justify-center p-8 ">
      <div className="grid h-full w-full grid-cols-2 grid-rows-12 md:grid-cols-10  md:grid-rows-14 gap-4">
        <div
          className="relative col-span-2 row-span-2 md:col-span-10 md:row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center text-white"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/cb5d/29f8/d76dfd5c87274ae659d0281c6366875e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1Zo~9P9TXn9aDwxrip3OYZa~a2QW1YGU9H~nxw9XBnTW4dBa6SidkAt~9d3iPSqbGeOXtzML3chwMAui8Woxoau5U7k28lBEP0jvs3yTHV5aMAT-mNL3pUiRtsqOdmiZ~DfXloLMGi~v447guhqJCYKnvu~OtbWObQZ9dWXRHZbpLlpRMMGWy7aX~IAes1o9H7Br37j6~Ux6iXLJzIt7-jzwzpas5XCg5~ym-ZDDTM9C8FuOH~DErn3s7aNbPpkmUKhnMgIroq~qOmjImVXG3IsrH3GNNGJayJrsUY23ClNTg5e6DLzJy9UFR4VZGKSaGqz5VXgZDuqZxLK4Fq6Pw__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-55 rounded-3xl border-2 border-stone-900"></div>
          <div className="relative z-10 text-center p-4">
            <h1 className="font-poppins text-xl md:text-2xl font-semibold p-2">
              Valentin Gregorio
            </h1>
            <h2 className="border-t-[1px] border-white font-poppins text-lg md:text-xl font-semibold p-2">
              Développeur Front End
            </h2>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-5 row-span-2 md:row-span-6 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          projets
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-5 row-span-2 md:row-span-4 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          technos
        </div>
        <div className="col-span-2 sm:col-span-2 md:col-span-5 row-span-3 md:row-span-6 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          parcours
        </div>
        <div className="col-span-2 sm:col-span-2 md:col-span-5 row-span-2 md:row-span-4 bg-indigo-200 rounded-3xl flex justify-center items-center p-4">
          réseaux
        </div>
      </div>
    </div>
  );
}
