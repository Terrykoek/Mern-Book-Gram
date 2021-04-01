const express =require("express")
const sessions=express.Router()

// new session (login)
sessions.get('/new')