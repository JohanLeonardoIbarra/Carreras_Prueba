import Semestre from "@Models/semestre";

export const getAll = async (req, res) => {
    try{
        const semestres = await Semestre.findAll();
        res.status(200).json(semestres);
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error",
        })
    }
}

