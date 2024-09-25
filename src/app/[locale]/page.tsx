import Recipe from '@/features/recipe/components/Recipe';

const recipe = {
  title: 'Szarlotka z cynamonem',
  createdAt: 'November 24, 2024',
  updatedAt: 'November 24, 2024',
  info: {
    prepTime: '25 minut',
    cookTime: '40 minut',
    servings: 4,
  },
  tags: ['Ciasta', 'Święta', 'Deser', 'Domowe'],
  notes: [
    {
      id: '123',
      author: 'Maciej Kłos',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      date: 'about an year ago',
    },
    {
      id: '1234',
      author: 'Maciej Kłos',
      text: 'A delicious recipe that brings back childhood memories. Perfect for family gatherings.',
      date: 'about an year ago',
    },
    {
      id: '1235',
      author: 'Maciej Kłos',
      text: 'I love making this for the holidays. The cinnamon adds a wonderful flavor.',
      date: 'about an year ago',
    },
    {
      id: '1236',
      author: 'Maciej Kłos',
      text: 'Always a hit at parties. The crust is perfectly flaky.',
      date: 'about an year ago',
    },
    {
      id: '1238',
      author: 'Maciej Kłos',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'about an year ago',
    },
    {
      id: '1239',
      author: 'Maciej Kłos',
      text: 'An easy and delicious recipe. My family loves it.',
      date: 'about an year ago',
    },
    {
      id: 'fasdf',
      author: 'Maciej Kłos',
      text: 'I make this every year for Christmas. It’s a family tradition.',
      date: 'about an year ago',
    },
    {
      id: 'asfasdfasfd',
      author: 'Maciej Kłos',
      text: 'The best apple pie recipe I’ve ever tried. Highly recommend!',
      date: 'about an year ago',
    },
    {
      id: 'rewrwer',
      author: 'Maciej Kłos',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      date: 'about an year ago',
    },
  ],
  steps: [
    {
      cathegory: 'Ciasto',
      ingredients: [
        { name: 'dużych jabłek', amount: '6' },
        { name: 'mąki', amount: '1 szkl.' },
        { name: 'żółtek', amount: '6' },
        { name: 'cukru pudru', amount: '1 szkl.' },
        { name: 'masła', amount: '500 g' },
        { name: 'cukier wanilinowy', amount: '1' },
        { name: 'cynamon', amount: '1 łyżka' }, // Added ingredient
      ],
      instructions: [
        'Wsypać do miski mąkę (przesypać przez sitko) i cukier, wymieszać. Wysypać na stolnicę, rozsypać masło (zimne, pokrojone w kostkę) i dodać żółtka. Ugnieść ciasto rękami (powinno być miękkie i plastyczne - nie kruszyć się). Odkroić w stosunku 3/5 do 2/5 całości.',
        'Dużą formę o wymiarach 23x32cm wysmarować masłem i wyłożyć papierem do pieczenia (spód i boki). Większą częścią odkrojonego ciasta wypełnić spód blaszki, ugnieść palcami na równy placek.',
        'Podziurawić widelcem i piec przez 35 minut w 185 stopniach C. Po wyjęciu ostudzić. Ciasto powinno być koloru złotego.',
        'Pokroić jabłka w plasterki i ułożyć na upieczonym spodzie.', // Added step
      ],
      details: {
        temp: '185',
        measure: '24x32cm',
        time: '35 minut',
      },
    },
    {
      cathegory: 'Jabłka',
      ingredients: [
        { name: 'dużych jabłek', amount: '6' },
        { name: 'mąki', amount: '1 szkl.' },
        { name: 'żółtek', amount: '6' },
        { name: 'cukru', amount: '1/2 szkl.' }, // Added ingredient
        { name: 'soku z cytryny', amount: '2 łyżki' }, // Added ingredient
      ],
      instructions: [
        'Obrać i pokroić jabłka na plasterki, skropić sokiem z cytryny, aby nie ciemniały.',
        'Wsypać do miski mąkę (przesypać przez sitko) i cukier, wymieszać. Wysypać na stolnicę, rozsypać masło (zimne, pokrojone w kostkę) i dodać żółtka. Ugnieść ciasto rękami (powinno być miękkie i plastyczne - nie kruszyć się). Odkroić w stosunku 3/5 do 2/5 całości.',
        'Dużą formę o wymiarach 23x32cm wysmarować masłem i wyłożyć papierem do pieczenia (spód i boki). Większą częścią odkrojonego ciasta wypełnić spód blaszki, ugnieść palcami na równy placek.',
        'Podziurawić widelcem i piec przez 35 minut w 185 stopniach C. Po wyjęciu ostudzić. Ciasto powinno być koloru złotego.',
      ],
      details: {
        temp: '185',
        measure: '24x32cm',
        time: '35 minut',
      },
    },
  ],
};

const Home = () => (
  <main className="relative flex min-h-screen flex-col items-center justify-between p-4 md:p-12 lg:p-24">
    <Recipe {...recipe} />
  </main>
);

export default Home;
