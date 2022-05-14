import Materia from "@Models/materia";

export const deleteM = async (req, res) => {
    try{
        const call = await Materia.findOne({ where: { id: req.params.id } });
        const nombre = call.get('nombre');  
        call.destroy();
        res.send(200).json({
            message: `Materia ${ nombre } eliminada con exito`
        })
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}