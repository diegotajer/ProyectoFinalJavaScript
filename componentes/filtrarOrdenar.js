function ordenarFuncionesPorFecha(cosa) {
    const OrdenarPorFecha = cosa.sort ((a,b) =>
      a.dia - b.dia); }
  
  function ordenarFuncionesPorPrecio(cosa) {
    const OrdenarPorPrecio = cosa.sort ((a,b) =>
      a.price - b.price);}

  function verSoloDramas(cosa) {
    return cosa.filter(funcion => funcion.genero =="drama");} 
  
  function verSoloComedias(cosa) {
    return cosa.filter(funcion => funcion.genero =="comedia");} 
  
  function verSoloPolicial(cosa) {
    return cosa.filter(funcion => funcion.genero =="policial");}

  export  {ordenarFuncionesPorPrecio,ordenarFuncionesPorFecha,verSoloDramas,verSoloComedias,verSoloPolicial}