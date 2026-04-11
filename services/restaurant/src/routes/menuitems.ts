import express from "express";
import { isAuth, isSeller } from "../middlewares/isAuth.js";
import { addMenuItem, deleteMenuItem, getAllItems, toggleMenuItemAvailability } from "../controllers/menuitems.js";
import uploadFile from "../middlewares/multer.js";

const router = express.Router()

router.post("/new" , isAuth  , uploadFile, addMenuItem);
router.get("/add/:id" , isAuth , getAllItems);
router.delete("/:itemId" , isAuth  , deleteMenuItem);
router.put("/status/:itemId" , isAuth  , toggleMenuItemAvailability);


export default router;