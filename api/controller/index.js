import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import {Client, Site, Status} from '../model/index.js'
import { Router } from 'express'

// code to fix error: __dirname is not defined
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const route = express.Router();

// Create a client instance
const client = new Client();

route.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Client's Route
// Login
route.post('/login', bodyParser.json(), (req, res) => {
    client.login(req, res);
})

// get all clients: works
route.get('/clients', (req, res)=>{
    client.fetchClients(req, res);
});

// get a user : works
route.get('/client/:id', (req, res)=>{
    client.fetchClient(req, res);
});

// Update : works
route.put('/client/:id',bodyParser.json(), (req, res)=>{
    client.updateClient(req, res);
});
// Register : works
route.post('/register', bodyParser.json(), (req, res)=> {
    client.createClient(req, res);
})
// Delete : works
route.delete('/client/:id', (req, res)=>{
    client.deleteClient(req, res);
});


// Fetch all perfumes
const site = new Site();

route.get('/sites', (req, res)=> {
    site.fetchSites(req, res);
})

// Fetch a single perfume
route.get('/site/:id', (req, res) => {
    site.fetchSite(req, res);
})

route.get('/sites/:id', (req, res) => {
    site.fetchClientsSites(req, res);
})

// Add a new perfume
route.post('/sites/:id', bodyParser.json(), (req, res)=> {
    site.createSite(req, res);
})

// Update a product
route.put('/site/:id', bodyParser.json(), (req, res)=> {
    site.updateSite(req, res);
})

route.put('/status-update/:id', (req, res)=> {
    site.statusUpdate(req, res);
})

route.put('/status-update2/:id', (req, res)=> {
    site.statusUpdateSkip(req, res);
})

// Delete a product
route.delete('/site/:id', (req, res)=> {
    site.deleteSite(req, res);
})


// // =====Purchase======
const status = new Status();

// // Fetch all purchases
route.get('/statuses', (req, res)=> {
    status.fetchStatuses(req, res);
})

route.get('/status/:id', (req, res)=> {
    status.fetchStatus(req, res);
})

// // Fetch a single purchase
// route.get('/purchase/:id', (req, res) => {
//     purchase.fetchPurchase(req, res);
// })

route.put('/status/:id', bodyParser.json(), (req, res)=> {
    status.updateStatus(req, res);
})

// // Add a new purchase
route.post('/status', bodyParser.json(), (req, res)=> {
    status.createStatus(req, res);
})

route.delete('/status/:id', (req, res)=> {
    status.deleteStatus(req, res);
})

export default route;