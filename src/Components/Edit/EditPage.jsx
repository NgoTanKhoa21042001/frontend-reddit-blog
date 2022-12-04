import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../InputFields/Input";
import "./Edit.css";
import { update } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiRequest";
const EditPage = (props) => {
  const { setEdited } = props;
  const avaUrl = [
    "https://s1.wallpapermaiden.com/image/2022/11/28/castle-anime-girl-hero-princesspixiv-fantasia-anime-52774-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/bmw-m3-e46-black-cars-front-view-vehicles-52776-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/ice-lagoon-iceland-scenery-clouds-landscape-52770-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/heterochromia-animal-ears-nekomimi-tail-anime-52790-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/ponytail-bang-dream-girls-band-partyimai-lisa-kimono-anime-52787-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/smoliv-pokemon-pink-food-cute-anime-52786-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/light-bulb-electricity-dark-others-52785-thumb.jpeg",
    "https://s1.wallpapermaiden.com/image/2022/11/28/stolas-octaviahelluva-boss-movies-52736-thumb.jpeg",
    "https://images-ext-2.discordapp.net/external/WVTMSOzuIX6zQq9kySYOABCX4PeykgJQCBRweO0ehSM/https/images.wallpapersden.com/image/download/sasuke-uchiha-and-naruto-uzumaki_bGVmamuUmZqaraWkpJRmbmdlrWZlbWU.jpg?width=1116&height=628",
  ];
  // lấy userSlice ra
  const user = useSelector((state) => state.user);
  // truyền hành động vào store
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.theme);
  const [ava, setAva] = useState(user.avaUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdited(false);
    // lấy ra initial thì khi submit truyền vào redux
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: ava,
      themeColor: theme,
    };
    updateUser(updatedUser, dispatch);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container ">
          <button className="close">SAVE</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" data={user.name} setData={setName} />

            <Input label="Age" data={user.age} setData={setAge} />

            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              data={user.about}
              setData={setAbout}
            />
            <label>Profile Picture</label>
            <div className="input-image-container">
              {avaUrl.map((ava, index) => {
                return (
                  <div key={index}>
                    <img
                      onClick={(e) => setAva(e.target.src)}
                      src={ava}
                      className="input-image"
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditPage;
