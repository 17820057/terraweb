const express = require('express');
const compression = require('compression');
const cache = require('apicache').middleware;
const app = express();

app.use(compression()); // Compresión de datos
app.use(cache('5 minutes')); // Implementación de caché

// Ruta para servir archivos estáticos
app.use(express.static('public'));

// API optimizada
app.get('/api/data', (req, res) => {
    // Optimización de recursos y minimización de tamaño de datos
    const data = {
        key: 'value',
        // Datos optimizados
    };
    res.json(data);
});

// Inicio del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
