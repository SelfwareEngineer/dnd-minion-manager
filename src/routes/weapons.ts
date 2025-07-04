import { Router } from "express";
import {
  createWeapon,
  getWeaponById,
  getAllWeapons,
  updateWeapon,
  deleteWeapon,
} from "../handlers/weapons.ts";

const router = Router();

router.post("/", createWeapon);

router.get("/", getAllWeapons);

router.get("/:id", getWeaponById);

router.put("/:id", updateWeapon);

router.delete("/:id", deleteWeapon);

export default router;
