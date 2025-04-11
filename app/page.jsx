export default function Home() {
  return (
    <>
      <section
        style={{ backgroundImage: `url('./bg.png')` }}
        className="mx-auto max-w-lg min-h-screen bg-cover bg-center p-10 "
      >
        <section className="flex justify-between">
          <img src="./Q-s.png" alt="" className="w-15" />
          <img src="./AG1-i.png" alt="" className="w-15" />
        </section>
        <section className="mt-30">
          <form className="w-full relative ">
            <div className="max-w-40 absolute left-0 right-0 mx-auto -top-15 ">
              <img className="w-full" src="./envelop.png" alt="" />
            </div>
            <textarea
              className="border-2 border-[#7c6551] w-full bg-[#f5dbb0] outline-none px-10 pb-4 pt-15 rounded-lg"
              name="msg"
              id=""
              rows={8}
              placeholder="লিখুন..."
              autoFocus={true}
            ></textarea>
          </form>
          <input
            className="mt-4 px-4 py-1.5 bg-[#3e2b16] text-white rounded-md cursor-pointer block mx-auto"
            type="submit"
            value="পাঠান"
          />
        </section>
        <section></section>
      </section>
    </>
  );
}
