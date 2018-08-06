let express = require('express');
let router = express.Router();
const auth = require('../controller/auth.controller');
const registration = require('../controller/registration.controller');
const userRecord = require('../controller/user.record.controller');
const propertyRecord = require('../controller/property.record.controller');
const entityRecord = require('../controller/entity.record.controller');
const streetRecord = require('../controller/street.record.controller');
const support = require('../controller/support.controller');
const oracle = require('../controller/oracle.controller');

router.post('/authenticate', auth.authenticateUser); //authenticate user
router.post('/authenticate/mobile', auth.authenticateMobileUser); //authenticate mobile user
router.post('/authenticate/organisation', auth.authenticateOrganisationUser); //authenticate organisation user
router.post('/user', registration.addUser); //add new user
router.post('/organisation', registration.addOrganisationUser); //add new organisation user
router.post('/street', streetRecord.addNewStreet); //add new street data
router.post('/property', propertyRecord.addNewProperty); //add new property data
router.post('/entity', entityRecord.addNewEntity); //add new property entity data
router.post('/support', support.add); //add new support message

//router.get('/analytics', oracle.getAnalytics);
router.get('/w3w/engine/start', oracle.w3wEngineStart); //w3w Engine Start
router.get('/make/love/:code', oracle.generateLove); //make love
router.get('/headers', oracle.generateHeaders); //generate headers
router.get('/current/version/:app', oracle.getCurrentVersion); //get app current version

router.get('/support/:id', support.getOne); //get one
router.get('/support', support.getAll); //get all

router.get('/user/:id', userRecord.getUser); //single user data
router.get('/users', userRecord.getUsers); //all users data
router.get('/organisation/users/:owner', userRecord.getOrganisationUsers); //all users data for organisation
router.get('/verify/:email', userRecord.verifyUser); // verify user
router.get('/verify/organisation/:email', userRecord.verifyOrganisation); // verify organisation

router.get('/user/streets/:id', streetRecord.getStreetsByUser); //get all street data by specified user
router.get('/gis/street/:id', streetRecord.getStreetsByGIS); //street data by GIS ID
router.get('/street/:id', streetRecord.getStreet); //single street data
router.get('/streets/:start/:limit', streetRecord.getStreets); //all street data
router.get('/search/streets/:owner/:search/:start/:limit', streetRecord.searchOrganisationStreets); //search all street data for organisation
router.get('/search/streets/:search/:start/:limit', streetRecord.searchStreets); //search all street data


router.get('/street/properties/:id', propertyRecord.getPropertiesByStreet); //properties in specified street
router.get('/property/:id', propertyRecord.getProperty); //single property data
router.get('/properties/:start/:limit', propertyRecord.getProperties); //all properties data


router.get('/distinct/properties', propertyRecord.getDistinctProperties); //all distinct properties data for Admin

router.get('/all/properties/:skip', propertyRecord.getAllProperties); //all properties data for Admin
router.get('/all/streets/:skip', streetRecord.getAllStreets); //all streets data for Admin

router.get('/organisation/properties/:owner/:skip', propertyRecord.getOrganisationProperties); //all properties data for organisation
router.get('/organisation/streets/:owner/:skip', streetRecord.getOrganisationStreets); //all streets data for organisation

router.get('/individual/properties/:owner', propertyRecord.getIndividualProperties); //all properties data for an individual
router.get('/individual/streets/:owner', streetRecord.getIndividualStreets); //all streets data for an individual

router.get('/entity/:id', entityRecord.getEntity); //single entity
router.get('/entities/:start/:limit', entityRecord.getEntities); //all property entities
router.get('/property/entities/:id', entityRecord.getPropertyEntities); //single property entities

router.patch('/user', userRecord.patchUser); //update user
router.patch('/organisation', userRecord.patchOrganisationUser); //update organisation user
router.patch('/user/device', userRecord.patchUserDevice); //update user device
router.patch('/user/device/remove', userRecord.removeDevice); //remove user device
router.patch('/user/avatar', userRecord.patchAvatar); //update user avatar
router.patch('/user/onesignal', userRecord.patchUserPlayerId); //update user OneSignal Player ID
router.patch('/user/security', userRecord.patchUserSecurity); //update user password

router.patch('/street', streetRecord.patchStreet); //update street data
router.patch('/property', propertyRecord.patchProperty); //update property data
router.patch('/entity', entityRecord.patchEntity); //update entity data

router.patch('/street/photo', streetRecord.patchStreetPhoto); //update street photo
router.patch('/property/photo', propertyRecord.patchPropertyPhoto); //update property photo
router.patch('/entity/photo', entityRecord.patchEntityPhoto); //update property entity photo

router.patch('/remove/user', userRecord.deleteUser); //delete user
router.patch('/remove/street', streetRecord.deleteStreet); //delete street record
router.patch('/remove/property', propertyRecord.deleteProperty); //delete property record

module.exports = router;
