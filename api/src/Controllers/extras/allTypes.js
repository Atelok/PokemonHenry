const {Type} =require("../../db")

const allTp = (allTypes)=>{
    allTypes.forEach(async (type, index) => {
        await Type.create({name:type, create:false})
    });
} 

module.exports = allTp