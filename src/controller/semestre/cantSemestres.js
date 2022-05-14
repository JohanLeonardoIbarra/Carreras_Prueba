import connection from "@DB/connection";

export const CantidadSemestres = async (req, res) => {
    try{
        const CantidadDeSemestres = await connection.query("SELECT Carrera.nombre, count(Semestre.id) from Carrera inner join Semestre on Carrera.id = Semestre.carrera_id GROUP BY Carrera.nombre");
        res.status(200).json(CantidadDeSemestres.reverse().pop());
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
} 