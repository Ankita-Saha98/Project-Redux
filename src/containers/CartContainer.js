import {connect} from 'react-redux'
import Cart from '../components/Cart'
import {setQuantityToCart} from '../service/actions/actions'

const mapStateToProps=state=>({
    data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    setQuantityHandler:data=>dispatch(setQuantityToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart)