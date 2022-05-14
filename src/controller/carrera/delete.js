import Carrera from "@Models/carrera";

export const deleteC = async (req, res) => {
    try{
        const call = await Carrera.findOne({ where: { id: req.params.id } });
        const nombre = call.get('nombre');  
        await call.destroy();
        res.send(200).json({
            message: `Carrera ${ nombre } eliminada con exito`
        })
    }catch(err){
        console.error(err);
        res.status(500).send("Server Error");
    }
}