import express from 'express';
import { characters } from '../lib/axios/index.js';

// Router
export const routes = express.Router();

// Routes
routes.get('/characters', characters);