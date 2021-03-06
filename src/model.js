import image from './assets/image.png'
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: '350px'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Чистый JavaScript',
        'Без использования библиотек',
        'Проект за один вечер'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }

    }),
    new TextBlock('Маленький проект за один вечер на чистом JavaScript, именуемый "Конструктор сайтов"', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })

]