const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const PORT = 8000;

const characters = {
  buliara: {
    name: "Buliara",
    title: "Gerudo Captain of the Guard",
    race: "Gerudo",
    image:
      "https://www.zeldadungeon.net/wiki/images/4/4a/Buliara_-_TotK_Character_Profile_art.png",
  },

  deku: {
    name: "The Great Deku Tree",
    title: "Great Spirit of Korok Forest",
    race: "Tree",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/b5/Great_Deku_Tree_-_TotK_Character_Profile_art.png",
  },

  "deku tree": {
    name: "The Great Deku Tree",
    title: "Great Spirit of Korok Forest",
    race: "Tree",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/b5/Great_Deku_Tree_-_TotK_Character_Profile_art.png",
  },

  dorephan: {
    name: "King Dorephan",
    title: "Former King of the Zora",
    race: "Zora",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/a5/Exalted_Dorephan_-_TotK_Character_Profile_art.png",
  },

  ganondorf: {
    name: "Ganondorf",
    tite: "The Demon King",
    race: "Demon",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/b6/Ganondorf_-_TotK_Character_Profile_art.png",
  },

  "great deku tree": {
    name: "The Great Deku Tree",
    title: "Great Spirit of Korok Forest",
    race: "Tree",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/b5/Great_Deku_Tree_-_TotK_Character_Profile_art.png",
  },

  hestu: {
    name: "Hestu",
    title: "Spirited Musician of Korok Forest",
    race: "Korok",
    image:
      "https://www.zeldadungeon.net/wiki/images/5/50/Hestu_-_TotK_Character_Profile_art.png",
  },

  hudson: {
    name: "Hudson",
    title: "Co-owner of Hudson Construction",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/4/4a/Hudson_-_TotK_Character_Profile_art.png",
  },

  impa: {
    name: "Impa",
    title: "The Sheikah Elder",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/af/Impa_-_TotK_Character_Profile_art.png",
  },

  josha: {
    name: "Josha",
    title: "Head of Depths Research",
    race: "HYlian",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/bb/Josha_-_TotK_Character_Profile_art.png",
  },

  "king dorephan": {
    name: "King Dorephan",
    title: "Former King of the Zora",
    race: "Zora",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/a5/Exalted_Dorephan_-_TotK_Character_Profile_art.png",
  },

  "king rauru": {
    name: "King Rauru",
    title: "King of Hyrule",
    race: "Zonai",
    image:
      "https://www.zeldadungeon.net/wiki/images/d/d3/Rauru_-_TotK_Character_Profile_art.png",
  },

  kohga: {
    name: "Master Kohga",
    title: "Leader of the Yiga Clan",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/a7/Master_Kohga_-_TotK_Character_Profile_art.png",
  },

  link: {
    name: "Link",
    title: "Champion of Hyrule",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/d/d9/Link_Crouching_-_TotK_key_art_nobg.png",
  },

  "master kohga": {
    name: "Master Kohga",
    title: "Leader of the Yiga Clan",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/a7/Master_Kohga_-_TotK_Character_Profile_art.png",
  },

  mineru: {
    name: "Mineru",
    title: "The Sage of Spirit",
    race: "Zonai",
    image:
      "https://www.zeldadungeon.net/wiki/images/0/0c/Mineru_-_TotK_Character_Profile_art.png",
  },

  paya: {
    name: "Paya",
    title: "Chief of Kakariko Village",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/1/13/Paya_-_TotK_Character_Profile_art.png",
  },

  purah: {
    name: "Purah",
    title: "Head of Lookout Landing",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/b/b0/Purah_-_TotK_Character_Profile_art.png",
  },

  "queen sonia": {
    name: "Queen Sonia",
    title: "First Queen of Hyrule",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/8/8f/Sonia_-_TotK_Design_Art.png",
  },

  rauru: {
    name: "King Rauru",
    title: "King of Hyrule",
    race: "Zonai",
    image:
      "https://www.zeldadungeon.net/wiki/images/d/d3/Rauru_-_TotK_Character_Profile_art.png",
  },

  riju: {
    name: "Riju",
    title: "The Sage of Lightning",
    race: "Gerudo",
    image:
      "https://www.zeldadungeon.net/wiki/images/3/39/Riju_-_TotK_key_art_nobg.png",
  },

  rhondson: {
    name: "Rhondson",
    title: "Co-owner of Hudson Construction",
    race: "Gerudo",
    image:
      "https://www.zeldadungeon.net/wiki/images/0/03/Rhondson_-_TotK_Character_Profile_art.png",
  },

  robbie: {
    name: "Robbie",
    title: "Head of Purah Pad Development",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/4/45/Robbie_-_TotK_Character_Profile_art.png",
  },

  sidon: {
    name: "Sidon",
    title: "The Sage of Water",
    race: "Zora",
    image:
      "https://www.zeldadungeon.net/wiki/images/0/0b/Sidon_-_TotK_key_art_nobg.png",
  },

  sonia: {
    name: "Queen Sonia",
    title: "First Queen of Hyrule",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/8/8f/Sonia_-_TotK_Design_Art.png",
  },

  tauro: {
    name: "Tauro",
    title: "Zonai Survey Team Leader",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/e/e5/Tauro_-_TotK_Character_Profile_art.png",
  },

  teba: {
    name: "Teba",
    title: "The New Rito Elder",
    race: "Rito",
    image:
      "https://www.zeldadungeon.net/wiki/images/8/89/Teba_-_TotK_Character_Profile_art.png",
  },

  tulin: {
    name: "Tulin",
    title: "The Sage of Wind",
    race: "Rito",
    image:
      "https://www.zeldadungeon.net/wiki/images/4/4f/Tulin_-_TotK_key_art_nobg.png",
  },

  yona: {
    name: "Yona",
    title: "Queen of the Zora",
    race: "Zora",
    image:
      "https://www.zeldadungeon.net/wiki/images/a/a0/Yona_-_TotK_Character_Profile_art.png",
  },

  yunobo: {
    name: "Yunobo",
    title: "The Sage of Fire",
    race: "Goron",
    image:
      "https://www.zeldadungeon.net/wiki/images/3/31/Yunobo_-_TotK_key_art_nobg.png",
  },

  zelda: {
    name: "Zelda",
    tite: "Princess of Hyrule",
    race: "Hylian",
    image:
      "https://www.zeldadungeon.net/wiki/images/3/31/Zelda_-_TotK_Character_Profile_art.png",
  },

  unknown: {
    name: "Unknown",
    title: "Unknown",
    race: "Unknown",
    image: "Unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api", (req, res) => {
  res.json(characters);
});

app.get("/api/:name", (req, res) => {
  const charName = req.params.name.toLowerCase();
  if (characters[charName]) {
    res.json(characters[charName]);
  } else {
    res.json(characters["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
