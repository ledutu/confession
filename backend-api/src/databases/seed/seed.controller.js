var express = require('express');
const Seeder = require('../../utils/seeder');
const {
    User,
} = require('../../models');

async function createUser(request, response) {
    let { times, locale } = request.query;
    times = parseInt(times);

    if (!times) {
        times = 5;
    }

    try {
        seeders = await Seeder.createUserDatabaseSeed(times, locale);
        console.log("User database: ");

        await User.insertMany(seeders.users);
        // await Profile.insertMany(seeders.profiles);

        console.info('Create user database successful');
        response.status(200).json({
            status: 'OK',
        });
    } catch (error) {
        console.error(error);
        console.error('Creaate user database fail, Please try again');
        response.status(500).json({
            status: 'FAIL',
        });;
    }
}

module.exports = {
    createUser,
}