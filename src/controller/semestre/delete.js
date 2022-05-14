import Semestre from "@Models/semestre";

export const deleteS = async (req, res) => {
    try{
        const call = await Semestre.findOne({ where: { id: req.params.id } });
        const numero = call.get('numero');  
        call.destroy();
        res.send(200).json({
            message: `Semestre ${ numero } eliminado con exito`
        })
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}