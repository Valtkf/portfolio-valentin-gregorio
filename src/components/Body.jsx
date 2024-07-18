export default function Body() {
  return (
    <div className="border-2 border-blue-600 grid grid-rows-6 grid-flow-col gap-4 text-white p-4">
      <div className="relative row-span-6 col-span-1 border-[1px] border-stone-800 h-[500px] w-[500px] p-4 z-10 rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 rounded-3xl"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/cb5d/29f8/d76dfd5c87274ae659d0281c6366875e?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1Zo~9P9TXn9aDwxrip3OYZa~a2QW1YGU9H~nxw9XBnTW4dBa6SidkAt~9d3iPSqbGeOXtzML3chwMAui8Woxoau5U7k28lBEP0jvs3yTHV5aMAT-mNL3pUiRtsqOdmiZ~DfXloLMGi~v447guhqJCYKnvu~OtbWObQZ9dWXRHZbpLlpRMMGWy7aX~IAes1o9H7Br37j6~Ux6iXLJzIt7-jzwzpas5XCg5~ym-ZDDTM9C8FuOH~DErn3s7aNbPpkmUKhnMgIroq~qOmjImVXG3IsrH3GNNGJayJrsUY23ClNTg5e6DLzJy9UFR4VZGKSaGqz5VXgZDuqZxLK4Fq6Pw__')",
          }}
        ></div>
        <div className="relative z-10">
          <div className="border-2 border-cyan-600 rounded-full w-[200px] h-[200px] flex justify-center items-center mx-auto">
            photo
          </div>
          <p className="text-center mt-4">description de Profile</p>
        </div>
      </div>
      <div className="col-span-2 border-2 border-rose-500">02</div>
      <div className="row-span-2 col-span-2 border-2 border-green-600">
        parcours
      </div>
      <div className="row-span-3 col-span-1 border-2 border-green-600">
        projet 1
      </div>
      <div className="row-span-3 col-span-1 border-2 border-green-600">
        projet 2
      </div>
    </div>
  );
}
