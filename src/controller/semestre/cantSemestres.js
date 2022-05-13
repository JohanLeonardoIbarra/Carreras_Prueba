
import Semestre from "../../models/semestre";

export const CantidadSemestres = async (req, res) => {
    try{
        const CantidadDeSemestres = await Semestre.findAndCountAll({
            where: {
                carrera_id: req.params.id,
            }
        });
        res.status(200).json(CantidadDeSemestres);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
} 