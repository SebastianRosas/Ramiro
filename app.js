const carrito = ['Krontiras', 'PielYHueso'];

const vinos = {
    marca: 'Krontiras',
    variedad: 'Malbec',
}

const nuevoVino = { ...vinos };

nuevoVino.marca = 'PielYHueso';
nuevoVino.variedad = 'Naranjo';

const vinosActualizados = [vinos, nuevoVino];

console.table(vinosActualizados);
