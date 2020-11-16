const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

API();


function API() {
    let emp = null;
    let pro = null;

    app.set('json spaces', 2);
    app.get("/employee", (req, res) => {
        fs.readFile('./employee.json', (err, result) => {
            if (err) {
                res.json({ status: 'ERROR' });
            } else {
                res.json(JSON.parse(result));
            }
        })
    })

    app.get("/employee/:id", (req, res) => {
        let params = req.params;
        fs.readFile('./employee.json', (err, result) => {
            if (err) {
                res.json({ status: 'ERROR' });
            } else {
                let JSONData = JSON.parse(result);
                emp = JSONData.filter((employee) => {
                    return params.id == employee.id;
                })
                if (emp.length > 0) {
                    
                    app.get("/getemployeedetails", (req2, res2) => {
                        fs.readFile('./project.json', (err2, result2) => {
                            if (err2) {
                                res2.json({ status: 'ERROR' });
                            } else {
                                let JSONData2 = JSON.parse(result2);
                                let pro2 = JSONData2.filter((project) => {
                                    return emp[0].projectID == project.id;
                                })
                                if (pro2.length > 0) {
                                    let details = emp[0];
                                    details.projectName = pro2[0].name;
                                    details.projectDesc = pro2[0].details;
                                    delete details.id;
                                    delete details.projectID;
                                    res2.json(details);
                                } else {
                                    res2.json({ status: 'ERROR', message: "Employee doesn't exist"});
                                }
                            }
                        })
                    })

                    res.json(emp[0]);

                } else {
                    res.json({ status: 'ERROR', message: 'Employee not found' });
                }
            }
        })
    })

    app.get("/project", (req, res) => {
        fs.readFile('./project.json', (err, result) => {
            if (err) {
                res.json({ status: 'ERROR' });
            } else {
                res.json(JSON.parse(result));
            }
        })
    })

    app.get("/project/:id", (req, res) => {
        let params = req.params;
        fs.readFile('./project.json', (err, result) => {
            if (err) {
                res.json({ status: 'ERROR' });
            } else {
                let JSONData = JSON.parse(result);
                pro = JSONData.filter((project) => {
                    return params.id == project.id;
                })
                if (pro.length > 0) {
                    res.json(pro[0]);
                } else {
                    res.json({ status: 'ERROR', message: 'Project not found' });
                }
            }
        })
    })

    app.listen(port, (err) => {
        console.log('server running on port ' + port);
    })
}
