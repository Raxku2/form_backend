import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUB,
  privateKey: process.env.IMAGE_KIT_PRI,
  urlEndpoint: process.env.IMAGE_KIT_URL,
});

export const imageKitAuth = (req, res) => {
  try {
    const authParams = imagekit.getAuthenticationParameters();
    res.json(authParams);
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};
