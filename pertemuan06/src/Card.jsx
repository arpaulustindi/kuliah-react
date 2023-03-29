function Card() {
  return (
    <>
      <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600">
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
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="gender"
              >
                Gender
              </label>
              <div>
                <input
                  class="border py-2 text-grey-800"
                  type="radio"
                  name="gender"
                  id="pria"
                />
                <label
                class="mb-2 text-gray-900"
                for="pria"
                > Pria</label>
              </div>
              <div>
                <input
                  class="border py-2 text-grey-800"
                  type="radio"
                  name="gender"
                  id="wanita"
                />
                <label
                class="mb-2 text-gray-900"
                for="wanita"
                > Wanita</label>
              </div>
            </div>
            <div class="flex flex-col mb-4">
              <label
                class="mb-2 font-bold text-lg text-gray-900"
                for="agama"
              >
                Agama
              </label>
              <select
                class="border py-2 px-3 text-grey-800"
                name="agama"
                id="agama"
              >
                <option value="Protestan">Kristen Protestan</option>
                <option value="Katholik">Katholik</option>
                <option value="Islam">Islam</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Kepercayaan">Aliran Kepercayaan</option>
              </select>
            </div>
            <button
              class="block bg-blue-400 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-4 rounded"
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
