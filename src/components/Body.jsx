export default function Body() {
  return (
    <div className="border-2 border-blue-600 grid grid-rows-6 grid-flow-col gap-4 text-white p-4">
      <div className="row-span-6 ... border-2 border-white">
        <img src="" alt="" />
        Photo de Profile
        <div className="border-2 border-cyan-600 rounded-full h-[200px] w-[200px]  flex justify-center items-center ml-10 mr-10">
          photo
        </div>
      </div>
      <div className="col-span-2 ... border-2 border-rose-500">02</div>
      <div className="row-span-2 col-span-2 ... border-2 border-green-600">
        parcours
      </div>
      <div className="row-span-3 col-span-1 ... border-2 border-green-600">
        projet 1
      </div>
      <div className="row-span-3 col-span-1 ... border-2 border-green-600">
        projet 2
      </div>
    </div>
  );
}
