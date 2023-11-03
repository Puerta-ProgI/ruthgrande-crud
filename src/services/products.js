let panes = require("../data/panes");
const services = {
    listarPanes:()=>{
        return panes
    },
    buscarPan:(id)=>{
        let panes = services.listarPanes() 
        let panAEnviar = panes.find((pan) => {
        return pan.id == id;
    })
    return panAEnviar || {}
    }

}
module.exports = services 
