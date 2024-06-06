const Mux=require('@mux/mux-node')

const express=require("express");

const cors=require("cors");
const { Video } = new Mux(process.env.MUX_ACCESS_TOKEN, process.env.MUX_SECRET);

const app=express();


