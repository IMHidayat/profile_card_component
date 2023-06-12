import "../sass/home.scss";

import victorImage from "../assets/image-victor.jpg";

export default function Home() {
  return (
    <main className="grid p-5">
      <article>
        <section className="card m-auto">
          <div className="card-header">
            <div className="avatar flex mb-3">
              <div>
                <img src={victorImage} alt="Profile Picture" width={10} height={10} />
              </div>
            </div>
            <div className="profile-name-container flex">
              <p className="mt-10 mb-1">
                Victor Crest <span className=" ms-1">26</span>
              </p>
              <p>London</p>
            </div>
          </div>
          <hr />
          <div className="card-body grid py-6 px-7 ">
            <div className="grid">
              <h2>80K</h2>
              <p>Followers</p>
            </div>
            <div className="grid">
              <h2>803K</h2>
              <p>Likes</p>
            </div>
            <div className="grid">
              <h2>1.4K</h2>
              <p>Photos</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
