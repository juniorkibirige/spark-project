const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        success: true,
        id: "SP-USR-95267-UG",
        name: "Admin Katumba",
        email: "katumba@admin.com",
        userType: 'admin',
        token: "dNVH_-JxRzykyNsCeVSUm_:APA91bFj1LUMwfN6ZFpyLSUzO02hyoRzozbY-S5hfhJ_-3B1K0Y2pGdMXqipkGxuTkrwfLNMUC79gMGs_6FAerRSd_tYxrJ72jWLLR9iNtSazptN_Qmh7XaEcy9c7fvN2M6oh9u_Z4cS"
    })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))