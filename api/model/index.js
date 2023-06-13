// database configuration
import db from '../config/index.js'

// bcrypt module
import {hash, compare, hashSync, genSaltSync} from 'bcrypt'

// middleware for creating a token
import createToken from '../middleware/AuthenticateClient.js'

// create a User class
export class Client {
    // log in
    login(req, res){
        const {email_add, client_pass} = req.body;
        const qryStr = `
            SELECT client_id, first_name, last_name, cellphone, email_add, client_pass, is_admin
            FROM clients
            WHERE email_add = '${email_add}';
        `;
        db.query(qryStr, async (err, data) => {
            console.log(data);
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err: 'Not registered'
                })
            }
            else {
                await compare(client_pass, data[0].client_pass, (_err, _result) => {
                    if (_err) throw _err;
                    // create a jw token
                    const jwToken = createToken({
                        email_add, client_pass
                    });

                    // saving 
                    res.cookie('LegitClient', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    });

                    if(_result) {
                        res.status(200).json({
                            msg: 'Logged in',
                            jwToken,
                            result: data[0]
                        });
                    }
                    else {
                        res.status(401).json({
                            err: 'You entered an invalid password or did not register.'
                        })
                    };
                })
            }
        });
    }

    // fetch Clients
    fetchClients(req, res){
        const qryStr = `
        SELECT client_id, first_name, last_name, cellphone, email_add, client_pass, is_admin
        FROM clients;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Clients
    fetchClient(req, res){
        const qryStr = `
        SELECT client_id, first_name, last_name, cellphone, email_add, client_pass, is_admin
        FROM client
        WHERE client_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async createClient(req, res) {
        // payload: data from the user
        let detail = req.body;
        console.log(detail);

        // hashing the password
        let salt = genSaltSync(15); 
        console.log(detail.client_pass);
        detail.client_pass = await hash(detail.client_pass, salt);

        // this information will be used for client authentication
        let client = {
            emailAdd: detail.email_add,
            clientPass: detail.client_pass
        }

        // sql query
        const qryStr = 'INSERT INTO clients SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            const jwToken = createToken(client);
            // This token will be saved in the cookie.
            // duration in milliseconds
            res.cookie('LegitClient', jwToken, {
                maxAge: 3600000,
                httpOnly: true
            });
            res.status(200).json({msg: 'User successfully registered'});
        }) 
    }

    // update client details
    updateClient(req, res) {
        let data = req.body;
        if( (data.client_pass !== null) || (data.client_pass !== undefined)){
            data.client_pass = hashSync(data.client_pass, 15);
        }
        const qryStr = `
            UPDATE client
            SET ?
            WHERE client_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "User record has been updated."
            });
        });
    }
    
    // delete a client record
    deleteClient(req, res) {
        const qryStr = `
            DELETE FROM clients
            WHERE client_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'User record has been removed successfully.'
            });
        });  
    }
}

// create a Vehicles class
export class Site {
    // fetch all Vehicles
    fetchSites(req, res){
        const qryStr = `
        SELECT sites.site_id, sites.site_name, sites.site_description, sites.status_id, sites.client_id, sites.site_type, sites.design, statuses.status_name
        FROM sites
        LEFT JOIN statuses
        on sites.status_id = statuses.status_id
        ;
        `;

        db.query(qryStr, (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Vehicle
    fetchSite(req, res){
        const qryStr = `
        SELECT sites.site_id, sites.site_name, sites.site_description, sites.status_id, sites.client_id, sites.site_type, sites.design, statuses.status_name
        FROM sites
        LEFT JOIN statuses
        on sites.status_id = statuses.status_id
        WHERE sites.site_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    fetchClientsSites(req, res){
        const qryStr = `
        SELECT sites.site_id, sites.site_name, sites.site_description, sites.status_id, sites.client_id, sites.site_type, sites.design, statuses.status_name
        FROM sites
        LEFT JOIN statuses
        on sites.status_id = statuses.status_id
        WHERE sites.client_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // create a Client
    async createSite(req, res) {
        // payload: data from the user
        let detail = req.body;
        console.log(detail);

        // sql query
        const qryStr = 'INSERT INTO sites SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(200).json({msg: 'Site successfully created'});
        });
    }

    // update client details
    updateSite(req, res) {
        let data = req.body;
        const qryStr = `
            UPDATE sites
            SET ?
            WHERE site_id = ?;`

        db.query(qryStr, [data, req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Site record has been updated."
            });
        });
    }

    statusUpdate(req, res) {
        const qryStr = `
            UPDATE sites
            SET status_id = status_id + 1 
            WHERE site_id = ?;`

        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Development status updated"
            });
        });
    }

    statusUpdateSkip(req, res) {
        const qryStr = `
            UPDATE sites
            SET status_id = status_id + 2 
            WHERE site_id = ?;`

        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: "Development status updated"
            });
        });
    }
    
    // delete a client record
    deleteSite(req, res) {
        const qryStr = `
            DELETE FROM sites
            WHERE site_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Site has been removed successfully.'
            });
        });  
    }
}

// create a Purchase
export class Status {
    // fetch all Vehicles
    fetchStatuses(req, res){
        const qryStr = `
        SELECT status_id, status_name, status_description
        FROM statuses
        ;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    fetchStatus(req, res){
        const qryStr = `
        SELECT status_id, status_name, status_description
        FROM statuses
        WHERE status_id = ?;
        `;

        db.query(qryStr, [req.params.id], (err, data) => {
            if (err) throw err;
            res.status(200).json({
                results: data
            });
        });
    }

    // fetch Vehicle
    

    // create a Client
    async createStatus(req, res) {
        // payload: data from the user
        let detail = req.body;

        // sql query
        const qryStr = 'INSERT INTO statuses SET ?;';
        db.query(qryStr, [detail], err => {
            if (err) {
                res.status(401).json({err});
                return;
            }
            res.status(201).json({msg: 'Status created successfully.'});
        });
    }

    // update client details
    
    // delete a client record
    deleteStatus(req, res) {
        const qryStr = `
            DELETE FROM statuses
            WHERE status_id = ?;`
    
        db.query(qryStr, [req.params.id], (err) => {
            if (err) throw err;
            res.status(200).json({
                msg: 'Status successfully deleted'
            });
        });  
    }

}