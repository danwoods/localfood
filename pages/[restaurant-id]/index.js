/** @file Individual restaurant pages */
import Restaurants from '../../restaurants.json'

export default () => <div>{'hit'}</div>

export const getStaticPaths = (props) => {
  const paths = Restaurants.map((r) => ({ params: { 'restaurant-id': r.id } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  return { props: { 'restaurant-id': params['restaurant-id'] } }
}
