const model = require("../model/model");

const createRide=aysnc function (req,res){
    try{
        const ride={
           startLat:req.body.startLat,
           startLong:req.body.startLong,
           endLat:req.body.endLat,
           endLong:req.body.endLong,
           riderName:req.body.rideName,
           driverName:req.body.driverName,
           driverVehicle:req.body.driverVehicle,
        }
        if(ride.startLat< -90 || ride.startLat > 90 || ride.startLong <-180 || ride.startLong > 180){
            return res.status(403).send({message:'Start latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'})
        }
        if (ride.endLat < -90 || ride.endLat > 90 || ride.endLong < -180 || ride.endLong > 180) {
            return res.status(403).send({
                message: 'End latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'
            });
        }
        if (typeof ride.riderName !== 'string' || ride.riderName.length < 1) {
            return res.status(403).send({
                message: 'Rider name must be a non empty string'
            });
        }
        if (typeof ride.driverName !== 'string' || ride.driverName.length < 1) {
            return res.status(403).send({
                message: 'Rider name must be a non empty string'
            });
        }
        if (typeof ride.driverVehicle !== 'string' || ride.driverVehicle.length < 1) {
            return res.status(403).send({
                message: 'Rider name must be a non empty string'
            });
        }
        const rides = await User.create(ride);
        return res.status(201).send({message:"Ride Created",data:rides})
    }catch(error){
        return res.status(500).send({message:error.message}) 
    }
}

module.exports.createRide=createRide

