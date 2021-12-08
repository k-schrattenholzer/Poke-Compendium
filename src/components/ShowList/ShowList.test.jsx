import { screen, render } from "@testing-library/react";
import ShowList from './ShowList.jsx';

it('should render showList', () => {
  render (
    <ShowList shows={[
      {
        id: 44,
        name: 'Scorpion',
        lang: 'English',
        premiere: '2014-09-22',
        image: 'url',
        summary: 'inspired by a true story, is a high-octane drama about eccentric genius Walter OBrien and his team of brilliant misfits who comprise the last line of defense against complex, high-tech threats of the modern age. As Homeland Securitys new think tank, OBriens team includes Toby Curtis an expert behaviorist who can read anyone; Happy Quinn, a mechanical prodigy; and Sylvester Dodd, a statistics guru. Pooling their extensive technological knowledge to solve mind-boggling predicaments amazes federal agent Cabe Gallo, who shares a harrowing history with OBrien. However, while this socially awkward group is comfortable with each others humor and quirks, life outside their circle confounds them, so they rely on Paige Dineen, who has a young, gifted son, to translate the world for them. At last, these nerdy masterminds have found the perfect job',
        url: 'https://www.tvmaze.com/shows/45/ncis-new-orleans',
        genres: [
          'genre1',
          'genre2',
          'genre3'
        ],
      },
      {
        id: 46,
        name: 'Forever',
        lang: 'English',
        premiere: '2014-09-22',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/128/322484.jpg',
        summary: 'Doctor Henry Morgan, New York Citys star medical examiner, has a secret. He doesnt just study the dead to solve criminal cases',
        url: 'https://www.tvmaze.com/shows/47/witches-of-east-end',
        genres: [
          "Drama",
          "Fantasy",
          "Romance"
      ],
      }
    ]}/>
  )

  const showList = screen.getByText(/Scorpion/);
  expect(showList).toMatchSnapshot()
})