import db from "../../db/index.ts";

//:TODO:
//  - Learn how to define obj shapes with variable numbers of entires (e.g possiblity
//    for one or more damageDice or specialFeatures entries)
interface weaponStats {
  name: string;
  damageDice: {};
  weight: number;
  specialFeatures: {};
}

async function createWeapon(req: Request, res: Response) {
  const {
    name: string,
    damageDice,
    weight: number,
    specialFeatures,
  } = req.body;
  await db.query(
    "INSERT INTO weapons (name, damage_dice, weight, special_features) VALUES ($1, $2, $3, $4)",
    [name, damageDice, weight, specialFeatures],
  );
  const { rows } = await db.query("SELECT * FROM weapons WHERE name = $1", [
    name,
  ]);
  res.json({
    data: { rows },
  });
}

async function getAllWeapons(req: Request, res: Response) {
  const { rows } = await db.query("SELECT * FROM weapons");
  res.json({
    data: { rows },
  });
}

async function getWeaponById(req: Request, res: Response) {
  const params = req.params;
  const id: number = Number(params["id"]);
  console.log(id);
  const { rows } = await db.query("SELECT * FROM weapons WHERE id = $1", [id]);
  res.json({
    params: req.params,
    data: { rows },
  });
}

async function updateWeapon(req: Request, res: Response) {
  res.status(200);
}

async function deleteWeapon(req: Request, res: Response) {
  res.status(200);
}

export {
  createWeapon,
  getWeaponById,
  getAllWeapons,
  updateWeapon,
  deleteWeapon,
};
