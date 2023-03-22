import { ICarouselItem } from '../../app/Usuario/Components/carousel/Icarousel-item.metadata';

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
    {
        id: 1,
        title: {
            first: 'Nuestra',
            second: 'Cocha',
        },
        subtitle: 'Ver más',
        link: '/tema_mes',
        image: 'assets/images/carousel1-min.jpg'
    },
    {
        id: 2,
        title: {
            first: 'Ciudad',
            second: 'jardín'
        },
        subtitle: 'Ver más',
        link: '/donde_ir',
        image: 'assets/images/carousel2-min.jpg'
    },
    {
        id: 3,
        title: {
            first: 'Mi',
            second: 'llajta'
        },
        subtitle: 'Ver más',
        link: '/que_hacer',
        image: 'assets/images/carousel3-min.jpg'
    }
];
