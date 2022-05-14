import Semestre from "@Models/semestre"

export const create = async (req, res) => {
    try{
        const { numero, carrera } = req.body;
        const semestre = await Semestre.create({ numero: numero, carrera_id: carrera });
        res.status(200).json(semestre);
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}