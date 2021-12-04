import { screen, render } from "@testing-library/react";
import Show from './Show.jsx';

it('should render one show component', () => {
  render (
    <Show show={{
      id: 6,
    name:'What We Do in the Shadows',
    lang: "English",
    premiere: '01*01*01',
    image: 'https://assets.fxnetworks.com/cms/prod/2021/07/22/web_poster_540x796.jpg',
    summary: 'a rag tag group learns the meaning of christmas',
    url: 'https://assets.fxnetworks.com/cms/prod/2021/07/22/web_poster_540x796.jpg',
    genres: ['horror', 'thriller', 'family']
    }}/>
  )
})