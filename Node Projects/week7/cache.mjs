import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


/*
This script was created with help from Gemini 2.5 pro.
It is only to reduce the stress on the Pokemon api server.
*/






const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_FILE_PATH = path.join(__dirname, 'cache.json');

let cache = {};

function readCache() {
    try {
        const data = fs.readFileSync(CACHE_FILE_PATH, 'utf8');
        cache = JSON.parse(data);
    } catch (error) {
        cache = {};
    }
}

function writeCache() {
    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(cache, null, 2));
}

export async function fetchAndCache(url) {
    if (cache[url]) {
        return cache[url];
    }

    const response = await fetch(url);
    const data = await response.json();
    
    cache[url] = data;
    
    return data;
}

// Initialize the cache when the module is loaded
readCache();

// Register a an exit handler to save the cache
process.on('exit', () => {
    writeCache();
});