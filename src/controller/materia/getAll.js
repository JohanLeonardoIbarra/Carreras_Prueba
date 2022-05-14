import Materia from '@Models/materia';

export const getAll = async (req, res) => {
    try{
        const materias = await Materia.findAll();
        res.status(200).json(materias);
    }catch(err){
        console.error(err);
        res.status(500);
    }
}