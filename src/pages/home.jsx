import "../sass/home.scss";

import victorImage from "../assets/image-victor.jpg";

export default function Home() {
  return (
    <main className="grid p-5 items-center">
      <article>
        <section className="CARD_PROFILE card shadow-2xl">
          <div className="card-header">
            <div className="avatar flex mb-3">
              <div className="rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                <img src={victorImage} alt="Profile Picture" width={10} height={10} />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-[130px]">
              <p className="mt-10 mb-1 text-lg font-bold">
                Victor Crest <span className="font-light ms-1">26</span>
              </p>
              <p className="font-light text-sm">London</p>
            </div>
          </div>
          <hr />
          <div className="card-body p-6 px-7 grid grid-cols-3">
            <div className="grid justify-items-center">
              <h2 className="font-bold text-lg tracking-wide">80K</h2>
              <p className="font-light text-[.6rem] tracking-[.1rem]">Followers</p>
            </div>
            <div className="grid justify-items-center">
              <h2 className="font-bold text-lg tracking-wide">803K</h2>
              <p className="font-light text-[.6rem] tracking-[.1rem]">Likes</p>
            </div>
            <div className="grid justify-items-center">
              <h2 className="font-bold text-lg tracking-wide">1.4K</h2>
              <p className="font-light text-[.6rem] tracking-[.1rem]">Photos</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
