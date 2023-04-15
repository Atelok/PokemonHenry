const {Type} =require("../../db")

const allTp = (allTypes)=>{
    allTypes.forEach(async (type, index) => {
        await Type.create({id:index+1, name:type, create:false})
    });
} 

module.exports = allTp