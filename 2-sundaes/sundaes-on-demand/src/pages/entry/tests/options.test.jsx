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
    expect(altText).toEqual(['Chocolate scoop', 'Vainilla scoop']);
});