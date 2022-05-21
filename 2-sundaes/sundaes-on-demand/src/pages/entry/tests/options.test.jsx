import { render, screen } from '@testing-library/react';

import { Options } from '../options';

test('display img for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);

    // find images
    // when we are waiting for something asynchronously on the page, we must use AWAIT AND FINDBY
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((image) => image.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from server', async () => {
    // Mock Service Worker will return three toppings from server
    render(<Options optionType="toppings" />);

    // find images, expect 3 based on what msw returns
    const images = await screen.findAllByRole('img', { name: /topping$/i });
    expect(images).toHaveLength(3);

    // check the actual alt text for the images
    // @ts-ignore
    const imageTitles = images.map((img) => img.alt);
    expect(imageTitles).toEqual([
        'Cherries topping',
        'M&Ms topping',
        'Hot fudge topping',
    ]);
});