import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        className="userImage"
        alt="profile"
      />
      <h1 className="name-sty">Wade Warren</h1>
      <p className="paragraph-1">Software developer at UK</p>
    </div>
    <ul className="list-container">
      {blogsList.map(eachItem => (
        <li key={eachItem.id}>
          <div className="head-container">
            <h1 className="post-head">{eachItem.title}</h1>
            <p className="date-sty">{eachItem.publishedDate}</p>
          </div>
          <p className="description-para">{eachItem.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Home
