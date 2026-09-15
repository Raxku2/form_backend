import { readFormDB, saveFormDB } from "../utils/db.js";

export const formSubmitHandeler = async (req, res) => {
  try {
    const body = req.body;
    const payload = {};
    if (
      body.name !== undefined &&
      body.name !== "" &&
      body.phone !== undefined &&
      body.phone !== "" &&
      body.id_card !== undefined &&
      body.id_card !== "" &&
      body.salary !== undefined &&
      body.salary !== "" &&
      body.role !== undefined &&
      body.role !== "" &&
      body.dp_id !== undefined &&
      body.dp_id !== "" &&
      body.photo !== undefined &&
      body.photo !== ""
    ) {
      payload.name = body.name;
      payload.phone = body.phone;
      payload.id_card = body.id_card;
      payload.salary = body.salary;
      payload.role = body.role;
      payload.photo = body.photo;
      payload.dp_id = body.dp_id;
    } else {
      res.status(400).json({ message: "Missing Fields" });
      return;
    }

    const result = await saveFormDB(payload);

    if (!result && !result.insertedId) {
      res.status(500).json({ message: "DB error" });
    }

    res.json({ msg: "ok", res: result });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};

export const getFormHandeler = async (req, res) => {
  try {
    const admin_key = req.get("Authorization");

    if (process.env.ADMIN_KEY !== admin_key) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const result = await readFormDB();

    if (!result) {
      res.status(500).json({ message: "DB error" });
    }

    res.json({ msg: "ok", res: result });
  } catch (error) {
    console.error(error);
    res.status(500).json();
  }
};
