import Layout from '../../common/layout/Layout'
import Amazing from '../body/Amazing'
import Discount from '../body/Discount'
import Favorite from '../body/Favorite'
import TopSliders from '../body/TopSliders'

function HomePage  () {
  return (
    <Layout>
      <TopSliders/>
      <Discount/>
      <Favorite/>
      <Amazing/>
    </Layout>
  )
}
export default HomePage