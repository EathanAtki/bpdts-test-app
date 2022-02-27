const https = require('https')
const axios = require('axios')
const haversine = require('../controllers/haversine')

const getUsers = async (req, res) => {
    let londonBasedUsersRequest = axios.get('http://bpdts-test-app.herokuapp.com/city/London/users')
    let londonCoordUsersRequest = axios.get('http://bpdts-test-app.herokuapp.com/users')

    axios.all([londonBasedUsersRequest, londonCoordUsersRequest]).then(
        axios.spread((londonBasedUsers, londonCoordUsers) => {
            const allLondonUsers = []
            const filteredUsers = londonCoordUsers.data.filter(haversine.execute)
            allLondonUsers.push(filteredUsers, londonBasedUsers.data)
            res.status(200).json({message: 'success', data: allLondonUsers})
        })
    ).catch(errors => {
        return res.status(500).json({message: errors.message})
    });
};

module.exports = {getUsers}