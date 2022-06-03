import React from 'react';
import { BookItem } from '../../Components/BookItem/book-item';
import './home-page.css';

const BOOKS = [
    {
        id: 1,
        image: '/image-covers/don-quijote-de-la-mancha.jpeg',
        title: 'Дон Кихот',
        link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
        zhanry: ['Сказки', 'История', 'Зарубежные'],
        description: "Сюжет Обедневший дворянин из Ла-Манчи, немолодой Алонсо Кихано, сойдя с ума от круглосуточного чтения рыцарских романов и отсутствия свежего воздуха, возжелал стать странствующим рыцарем.",
    },
    {
        id: 2,
        image: '/image-covers/fairy-tales.jpeg',
        title: 'Fairy Tales by H.C.Andersen',
        link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        zhanry: ['Сказки', 'Сборник', 'Зарубежные'],
        description: 'В книгу вошли самые красивые и романтичные сказки Андерсена: "Дюймовочка", "Русалочка" и "Дикие лебеди". Добрые и трогательные истории о любви и преданности, силе духа и самоотверженности никого не оставят равнодушными'
    },
    {
        id: 3,
        image: '/image-covers/ficciones.jpeg',
        title: 'Jorge Louis Ficciones',
        link: "https://en.wikipedia.org/wiki/Ficciones\n",
        zhanry: ['Вымышленные истории', 'Фэнтези'],
        description: '«Вымышленные истории» — сборник рассказов аргентинского писателя и поэта Хорхе Луиса Борхеса, куда входят такие выдающиеся работы как «Вавилонская библиотека», «Сад расходящихся тропок» и «Фунес, чудо памяти».'
    },
    {
        id: 4,
        image: '/image-covers/l-etranger.jpeg',
        title: 'Посторонний Альбер Камю',
        link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
        zhanry: ['Повесть', 'Роман'],
        description: '«Посторонний» — дебютный роман французского писателя Альбера Камю, классическая иллюстрация идей экзистенциализма. В переводе Г. В. Адамовича именуется «Незнакомец».'
    },
    {
        id: 5,
        image: '/image-covers/le-pere-goriot.jpeg',
        title: 'Отец Горио',
        link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        zhanry: ['Роман', 'Зарубежные'],
        description: '«Оте́ц Горио́» — роман французского писателя Оноре де Бальзака, впервые опубликованное в декабре 1834 — феврале 1835 года в журнале «Парижское обозрение» и впоследствии вошедшее в цикл «Человеческая комедия». Роман входит во Всемирную библиотеку.'
    },
    {
        id: 6,
        image: '/image-covers/molloy-malone-dies-the-unnamable.jpeg',
        title: 'Моллой (Molloy)',
        link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        zhanry: ['Роман', 'Художественная проза', 'Зарубежные'],
        description: '«Молло́й» — роман ирландского писателя Сэмюэла Беккета. Написан Беккетом на французском языке, а впоследствии переведён им же в сотрудничестве с другим переводчиком на английский. Составляет наряду с романами «Мэлон умирает» и «Безымянный» единую трилогию, считающуюся одной из вершин прозаического творчества писателя'
    },
]

export const HomePage = () => {
    return (
        <div className="home-page">
            { BOOKS.map(book => <BookItem book={book} key={book.id}/>) }
        </div>
    )
}