function Card() {
  return (
    <>
      <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-orange-500 to-orange-600">
        <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
          <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Registrasi
          </h1>
          <form action="/" method="post">
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="nama"
              >
                Nama
              </label>
              <input
                class="border py-2 px-3 text-grey-800"
                type="text"
                name="nama"
                id="nama"
              />
            </div>
            <button
              class="block bg-orange-400 hover:bg-orange-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Buat Akun
            </button>
          </form>
          <a
            class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
            href="/"
          >
            Telah memiliki Akun?
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
