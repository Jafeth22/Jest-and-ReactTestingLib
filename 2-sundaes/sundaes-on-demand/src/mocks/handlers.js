import { rest } from 'msw';

export const handlers = [
    rest.get("https://localhost:3030/scoops", (req, res, ctx) => {
        return res(
            ctx.json([
                {name: 'Chocolate',  imagePath: '/images/chocolate.phg'},
                {name: 'Vainilla', imagePath: '/images/vainilla.png'}
            ])
        ) 
    })
];